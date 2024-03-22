import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

		// 要使用的变量是放在 render前 return后
		const {users, isFirst, isLoading, err} = this.props

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
