/** Nav.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Container
	What does it do: Renders the title bar at the top of the screen.
	Why does it do it: Its for naviagtion of the website
**/
import React from 'react'
import glamorous from 'glamorous'

import {OrangeColor, LightGray, DarkGray} from './Colors'

import './Nav.css'


const NavContainer = glamorous.div({
	borderBottom: '2px solid ' + OrangeColor,
	backgroundColor: LightGray,
	display: 'inline-block',
	width: '100%',
})

const Title = glamorous.div({
	color: OrangeColor,
	fontSize: '2em',
	fontWeight: 'bold',
	margin: '1rem',
	display: 'inline-block',

})

const NavLinks = glamorous.div({
	display: 'inline-block',
	float: 'right',
	margin: '1rem'
})

const Link = glamorous.a({
	outline: 0,
	display: 'inline-block',
	margin: '0.2rem',
	// backgroundColor: LightGray,
	textDecoration: 'none',
    padding: '10px 20px',
    // border: '2px solid ' + OrangeColor,
	textAlign: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    // borderRadius: 4,
    color: DarkGray,
	':hover' : {
		// backgroundColor: ,
		color: OrangeColor
	}

})

let active = (urlName) => {
	return document.URL.split('/').slice(-1)[0] === urlName;			
}

const Nav = () => {
	console.log(active('#home'));
	return (

		<NavContainer>
			<Title>Robert Utchel</Title>
			<NavLinks>
				<Link href='/#home' className={ active('#home') ? 'nav-link-active' : ''}>Home</Link>
				<Link href='/#projects' className={ active('#home') ? 'nav-link-active' : ''}>Projects</Link>
				<Link href='/#blog' className={ active('#home') ? 'nav-link-active' : ''}>Blog</Link>
				<Link href='/#contact' className={ active('#home') ? 'nav-link-active' : ''}>Contact</Link>
			</NavLinks>
		</NavContainer>
	)
}

export default Nav