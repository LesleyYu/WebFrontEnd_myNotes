import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
						
						{/* 原生html中，靠<a>跳转不同的页面 */}
						{/* <a className="list-group-item" href="./about.html">About</a>
						<a className="list-group-item active" href="./home.html">Home</a> */}

						{/* 在 react 中靠路由链接实现切换组件 - 编写路由链接 */}
						<Link className='list-group-item' to="/about">About</Link>
						<Link className='list-group-item' to="/home">About</Link>
						{/* 注意点： 1. to 属性，表示跳转到什么页面。2. to 属性 杠前不要带点。3. 最好是小写 */}
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path='/home' element={<Home/>}/>
									<Route path='/about' element={<About/>}/>
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
