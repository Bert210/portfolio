/** Nav.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Container
	What does it do: Renders the title bar at the top of the screen.
	Why does it do it: Its for naviagtion of the website
**/
import React from 'react'
import glamorous from 'glamorous'

import {OrangeColor, DarkGray} from '../Colors'

import './Nav.css'


// const Link = glamorous.a({
// 	outline: 0,
// 	display: 'inline-block',
// 	margin: '0.2rem',
// 	// backgroundColor: LightGray,
// 	textDecoration: 'none',
//     padding: '10px 20px',
//     // border: '2px solid ' + OrangeColor,
// 	textAlign: 'center',
//     transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
//     // borderRadius: 4,
//     color: DarkGray,
// 	':hover' : {
// 		// backgroundColor: ,
// 		color: OrangeColor
// 	}

// })

let active = (urlName) => {
	return document.URL.split('/').slice(-1)[0] === urlName;			
}

const Nav = () => {
	console.log(active('#home'));
	return (

		<div className="nav-container">
			<div className="title">Robert Utchel</div >
			<div className="nav-links">
				<a className="nav-link" href='/#home'>Home</a>
				<a className="nav-link" href='/#projects'>Projects</a>
				<a className="nav-link" href='http://blog.utchel.com'>Blog</a>
				<a className="nav-link" href='/#contact'>Contact</a>
			</div>
		</div>
	)
}

export default Nav