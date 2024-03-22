import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // get user input (连续解构赋值+重命名)
    const { keywordElement: {value: keyWord } } = this
    
    // this.props.updateAppState({ isFirst: false, isLoading: true })
		//发送请求前通知 List 更新状态
    PubSub.publish('hi', { isFirst: false, isLoading: true })

    // send request
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => { 
        // this.props.updateAppState({ users: response.data.items, isLoading: false});
        PubSub.publish('hi', { users: response.data.items, isLoading: false })
       },
      error => { 
        // this.props.updateAppState({ err: error.message, isLoading: false });
        PubSub.publish('hi', { err: error.message, isLoading: false });
       }
    )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
              <button onClick={this.search}>Search</button>
            </div>
          </section>

      </div>
      
    )
  }
}
