import React, { Component } from 'react'
import PubSub from 'pubsub-js';
// import axios from 'axios'

export default class Search extends Component {

  search = async() => {
    // get user input (连续解构赋值+重命名)
    const { keywordElement: {value: keyWord } } = this
    
    // this.props.updateAppState({ isFirst: false, isLoading: true })
		//发送请求前通知 List 更新状态
    PubSub.publish('hi', { isFirst: false, isLoading: true })

    // //#region 
    // // 1. send request - axios
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => { 
    //     // this.props.updateAppState({ users: response.data.items, isLoading: false});
    //     PubSub.publish('hi', { users: response.data.items, isLoading: false })
    //    },
    //   error => { 
    //     // this.props.updateAppState({ err: error.message, isLoading: false });
    //     PubSub.publish('hi', { err: error.message, isLoading: false });
    //    }
    // )
    // //#endregion

    //#region 
    // 2. send request - fetch （未优化版本）
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功了');
		// 		return response.json()
    //   },
    //   error => {
    //     console.log('联系服务器失败了',error);
		// 		return new Promise(()=>{})  // 这句话用于停止后续的 then 继续执行
    //                                 // 因为联系服务器失败时会返回 undefined，这不是一个Promise对象。当一个 then 返回一个非Promise对象时，我们会默认这个返回值是成功的。所以会导致后面执行‘获取数据成功了’。所以我们希望在这里停下来。
    //   }
    // ).then(
		// 	response => {console.log('获取数据成功了',response);},
		// 	error => {console.log('获取数据失败了',error);}
    // )
    // 这里要写两个then，第一个尝试联系服务器，第二个尝试获取数据
    // 这就是 关注分离 (Separation of Concerns)
    // 我们在第一个then内写了返回值（而且是promise实例），第二个then内会收到第一个then内的返回值。
    //#endregion

    //#region 
    // // 3. send request - fetch （优化版本 1 ）
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功了');
		// 		return response.json()
    //   }
    // ).then(
		// 	response => {console.log('获取数据成功了',response);}
    // ).catch(
    //   error => { console.log('Somthing went wrong'); }
    // )
    // // 这里我们发现，没必要非得用 .then 方法
    //#endregion

    //#region 
    // send request - fetch （优化版本 2 ）
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      console.log(response)
      const data = await response.json()
      console.log(data)
      PubSub.publish('hi', {isLoading: false, users: data.items})
    } catch (error) {
      console.log('reuqest failed', error)
      PubSub.publish('hi', {isLoading: false, err: error.message})
    }
    //#endregion
    /*
    和 https://segmentfault.com/a/1190000003810652 里面说的一样，现在这个 fetch 的使用率并不高，因为很多浏览器不支持。但是需要做了解，因为它是除了 axios 和 jQuery 之外不使用 XmlHttpRequest 进行封装就可以发送 ajax 请求的工具。
    考点：没有xhr就不能发送请求了吗？不是的，还可以用 fetch
    */
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
