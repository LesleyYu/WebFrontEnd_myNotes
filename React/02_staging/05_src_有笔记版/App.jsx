import React, { Component } from 'react';
import Search from './components/SearchBar';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

	state = { 		// init state
		users: [],
		isFirst: true,
		isLoading: false,
		err: ''
	}

	updateAppState = (stateObj) => {
		this.setState( stateObj )
	}

	render() {
		return (
			<div className="container">
				<Search updateAppState = { this.updateAppState } />
				<List {...this.state} />
			</div>
		)
	}
}
