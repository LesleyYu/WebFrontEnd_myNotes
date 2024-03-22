import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = {
		users: [],
		isFirst: true, 
		isLoading: false,
		err: ''
	}

	// 因为消息订阅发生在，刚刚渲染好的时候。所以我们用生命周期的钩子来订阅
	componentDidMount() {
		this.token = PubSub.subscribe('hi', (msg, stateObj) => {
			this.setState(stateObj)
		})
	}

	// 需要在结束的时候取消订阅
	componentWillUnmount() {
		PubSub.unsubscribe(this.token)
	}

  render() {
		
		// 要使用的变量是放在 render前 return后
		const {users, isFirst, isLoading, err} = this.state

    return (
      <div>
        <div className="row">
          {
						isFirst ? 
						<h2> Welcome. Please enter keywords and click on Search. </h2> 
						:
						isLoading ? 
							<div> Loading... </div>
						:
						err ?
						<h2 style={{color: 'red'}}>{err}</h2>
						:
            users.map((userObj) => {
							return (
								<div key={ userObj.id } className="card">
            			<a rel="noreferrer" href={ userObj.url } target="_blank">
										<img alt="user avatar" src={ userObj.avatar_url } style={{width: '100px'}}/>
									</a>
									<p className="card-text">{ userObj.login }</p>
								</div>
							)
						})
          }

				</div>
      </div>
    )
  }
}
