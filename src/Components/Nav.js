/** Nav.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Container
	What does it do: Renders the title bar at the top of the screen.
	Why does it do it: Its for naviagtion of the website
**/
import React from 'react'
import glamorous from 'glamorous'

import {OrangeColor, LightGray} from './Colors'


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
	display: 'inline-block',
	margin: '0.2rem',
	backgroundColor: LightGray,
	textDecoration: 'none',
    padding: '10px 20px',
    border: '2px solid ' + OrangeColor,
    textAlign: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    // borderRadius: 4,
    color: OrangeColor,
	':hover' : {
		backgroundColor: OrangeColor,
		color: LightGray
	}

})


const Nav = () => {
	return (
		<NavContainer>
			<Title>Robert Utchel</Title>
			<NavLinks>
				<Link href='/'>Home</Link>
				<Link href='/#projects'>Projects</Link>
				<Link href='/#blog'>Blog</Link>
				<Link href='/#contact'>Contact</Link>
			</NavLinks>
		</NavContainer>
	)
}

export default Nav