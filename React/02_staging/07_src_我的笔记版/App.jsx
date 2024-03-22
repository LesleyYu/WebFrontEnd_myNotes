import React, { Component } from 'react';
import Search from './components/SearchBar';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

	render() {
		return (
			<div className="container">
				<Search />
				<List />
			</div>
		)
	}
}
