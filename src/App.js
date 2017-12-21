import React, { Component } from 'react'

import Nav from './Components/Nav'
import Intro from './Components/Intro'
import Projects from './Components/Projects'



class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Intro />
				<Projects />
				<p>Hello Marty</p>
			</div>
    	);
  }
}

export default App;
