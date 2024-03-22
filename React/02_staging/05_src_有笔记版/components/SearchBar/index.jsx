import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // get user input
    const { value } = this.keywordElement;
        // 或者这么写：
        // const { keywordElement: { value } } = this;
        // 这样写可以同时直接获得 keywordElement 和 value。
        // console.log(keywordElement)
        // 这叫做 ‘连续解构赋值’
        // 
        // 也可以写：
        // const { keywordElement: { value: keyword } } = this;
        // 这叫做 ‘重命名’
    
    this.props.updateAppState({ isFirst: false, isLoading: true })

    // send request
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response => { 
        this.props.updateAppState({ users: response.data.items, isLoading: false});
       },
      error => { 
        this.props.updateAppState({ err: error.message, isLoading: false });
        // IMPORTANT 要保存error中的message而不是error本身。因为error本身是一个object，在报错时整个网页都会出错
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
