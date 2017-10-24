import React, { Component } from 'react'

import Nav from './Components/Nav'
import Intro from './Components/Intro'

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Intro />
			</div>
    	);
  }
}

export default App;
