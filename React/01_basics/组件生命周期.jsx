// 以下实例在 Hello 组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔100毫秒重新设置组件的透明度，并重新渲染：
var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };  
  }, 

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;      
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);  
  },

  render: function () {
    return (
      <div style={ {opacity: this.state.opacity} }> 
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Hello name="world"/>,
   document.body
);

/*
运行结果
Hello world
*/





// 以下实例初始化 state ， setNewnumber 用于更新 state。所有生命周期在 Content 组件中。

var Button = React.createClass({
  getInitialState: function() {
    return { data:0 };
  },
  setNewNumber: function() {
    this.setState({data: this.state.data + 1})
  },
  render: function () {
    return (
        <div>
          <button onClick = {this.setNewNumber}>INCREMENT</button>
          <Content myNumber = {this.state.data}></Content>
        </div>
    );
  }
});

var Content = React.createClass({
  componentWillMount:function() {
    console.log('Component WILL MOUNT!')
  },
  componentDidMount:function() {
    console.log('Component DID MOUNT!')
  },
  componentWillReceiveProps:function(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  },
  shouldComponentUpdate:function(newProps, newState) {
    return true;
  },
  componentWillUpdate:function(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  },
  componentDidUpdate:function(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  },
  componentWillUnmount:function() {
    console.log('Component WILL UNMOUNT!')
  }, 
  render: function () {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Button />
  </div>,
  document.getElementById('example')
);
 

/**
运行结果
INCREMENT
0
 */