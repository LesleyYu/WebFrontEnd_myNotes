var Counter = React.createClass({
  getInitialState: function () {
    return { clickCount: 0 };
  },
  handleClick: function () {
    this.setState( function(state) {
      return { clickCount: state.clickCount + 1 };
    });
  },
  render: function () {
    return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
  }
});

ReactDOM.render(
  <Counter />,
  document.getElementById('message')
);