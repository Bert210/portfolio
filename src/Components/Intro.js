/** Intro.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Presentation
	What does it do: Tells the user who I am and what I can do.
	Why does it do it: Its the main reason for the site
**/

import React from 'react'
import glamorous from 'glamorous'

import { OrangeColor } from './Colors'

const IntroContainer = glamorous.div({
	display: 'flex',
	height: 500,
	width: '100%',
	background: 'url(background.jpeg)',
	backgroundSize: 'cover',
	borderBottom: '2px solid ' + OrangeColor,
	// backgroundAttachment: 'fixed',
})

const Center = glamorous.div({
	margin: 'auto',
})

const Name = glamorous.div({
	color: 'white',
	fontSize: '3rem',
})

const Info = glamorous.div({
	color:'white',
	textAlign: 'center',
})

const Intro = () => (
	<IntroContainer>
		<Center>
			<Name>Robert Utchel</Name>
			<Info>A React Programmer</Info>
		</Center>	
	</IntroContainer>
)

export default Intro