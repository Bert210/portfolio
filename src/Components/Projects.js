/** Projects.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Container
	What does it do: Renders the my list of projects
	Why does it do it: Its for naviagtion of the website
**/
import React from 'react'

import glamorous, {H1} from 'glamorous'

import {OrangeColor, LightGray, DarkGray} from './Colors'

const ProjectsContainer = glamorous.div({
	textAlign: 'center',
	backgroundColor: LightGray,
	paddingBottom: '15%',
})

const ProjectContainer = glamorous.div({
	height: 500,
	display: 'flex',
	borderTop: '1px solid ' + OrangeColor,
	borderBottom: '1px solid ' + OrangeColor,
}, ({image}) => ({
	backgroundImage: `url(${image})`,
	backgroundSize: 'contain',
	backgroundPosition: 'center',
	backgroundAttachment: 'fixed',
	opacity: 0.5,
	':hover': {
	}
}))


const Title = glamorous.p({
	fontSize: '2rem',
	fontWeight: 'bold',
	zIndex: 100,
	color: 'white',
	margin: 'auto',
})

const listOfProjects = [
	{image:"./img/nfldataviewer.png", title:"NFL Data Viewer", info:"A simple visualiztion of NFL teams"},
	{image:"./img/code.png", title:"NFL Data Viewer", info:"A simple visualiztion of NFL teams"},
	{image:"./img/programmer.jpeg", title:"NFL Data Viewer", info:"A simple visualiztion of NFL teams"},
	{image:"./img/nfldataviewer.png", title:"NFL Data Viewer", info:"A simple visualiztion of NFL teams"},
	// {image:"", title:"", info:""},
]

const ProjectDescription = glamorous.div({
	backgroundColor: 'rgba(0,0,0,0.5)',
	borderRadius: '1rem',
	margin: 'auto',
	width: '25%',
	color: 'white',
	// height: '25%',
})



const formatProject = (project) => (
	<ProjectContainer key={project.title} image={project.image}>
		<ProjectDescription>
			<Title>{project.title}</Title>
			<p>{project.info}</p>
		</ProjectDescription>
	</ProjectContainer>
)

const Projects = () => (
	<ProjectsContainer>
		<H1 margin={0} padding={"1rem 0"} color={OrangeColor}>Projects</H1>
		<div>
			{listOfProjects.map((projects) => (formatProject(projects)))}
		</div>
	</ProjectsContainer>
)

export default Projects