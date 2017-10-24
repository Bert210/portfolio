/** Intro.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Presentation
	What does it do: Tells the user who I am and what I can do.
	Why does it do it: Its the main reason for the site
**/

import React from 'react'
import glamorous from 'glamorous'

const IntroContainer = glamorous.div({
	height: 500,
	width: '100%',
	background: 'url(background.jpeg)',
})

const Name = glamorous.div({
	color: 'white',
	fontSize: 24,
})

const Intro = () => (
	<IntroContainer>
		<Name>Robert</Name>
	</IntroContainer>
)

export default Intro