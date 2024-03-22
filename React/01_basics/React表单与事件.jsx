// ------------------react表单------------------

// 1
// 在实例中我们设置了输入框 input 值 value = {this.state.data}。在输入框值发生变化时我们可以更新 state。我们可以使用onChange 事件来监听 input 的变化，并修改 state。

var HelloMessage = React.createClass({
  getInitialState: function() {
    return { value: 'Hello edu.aliyun.com!' };
  },  
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
      <input type="text" value={ value } onChange={this.handleChange} /> 
      <h4>{ value }</h4>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);


// 2
// 如何在子组件上使用表单。 
// onChange 方法将触发 state 的更新并将更新的值传递到子组件的输入框的 value 上来重新渲染界面。
// 你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。

var Content = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
        <h4> { this.props.myDataProp } </h4>
      </div>
    );  
  }
});

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {value: 'Hello Lesley'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    var value = this.state.value;
    return (
      <div>
        <Content myDataProp={value} updateStateProp={this.handleChange}></Content>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);



// ------------------react事件------------------

// 1
// 通过 onClick 事件来修改数据
var HelloMessage = React.createClass({
  getInitialState: function() {
    return {value: 'edu.aliyun.com!'};
  },
  
  handleChange: function(event) {
    this.setState({value: '阿里云大学'})
  },

  render: function() {
    var value = this.state.value;
    return (
      <div>
      <button onClick={this.handleChange}>点我</button>
      <h4>{value}</h4>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);


// 2
// 当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。实例如下：
var Content = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick = {this.props.updateStateProp}>点我</button>
        <h4>{this.props.myDataProp}</h4>
      </div>
    )
  }
});

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {value: 'Hello edu.aliyun.com!'};
  },  
  handleChange: function(event) {
    this.setState({value: '阿里云大学'})
  },

  render: function() {
    var value = this.state.value;
    return (
      <div>
        <Content myDataProp = {value}
              updateStateProp = {this.handleChange}>
        </Content>
      </div>
    );
  }

});

ReactDOM.render(
  <HelloMessage />,  document.getElementById('example')
);