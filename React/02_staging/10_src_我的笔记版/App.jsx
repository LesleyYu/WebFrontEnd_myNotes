import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
						
						{/* 原生html中，靠<a>跳转不同的页面 */}
						{/* <a className="list-group-item" href="./about.html">About</a>
						<a className="list-group-item active" href="./home.html">Home</a> */}

						{/* 在 react 中靠路由链接实现切换组件 - 编写路由链接 */}
						{/* <NavLink className='list-group-item' to="/about">About</NavLink>
						<NavLink className='list-group-item' to="/home">Home</NavLink> */}
						{/* 注意点： 1. to 属性，表示跳转到什么页面。2. to 属性 杠前不要带点。3. 最好是小写 */}
						<MyNavLink to='About'>About</MyNavLink>
						<MyNavLink to='Home'>Home</MyNavLink>

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
