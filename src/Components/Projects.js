/** Projects.js
	Created by: Robert Utchel
	On: Oct 24 7:56 AM 2017
	Type: Container
	What does it do: Renders the my list of projects
	Why does it do it: Its for naviagtion of the website
**/
import React from 'react'

import glamorous from 'glamorous'

const ProjectImage = glamorous.img({
	width: '200px',

})

const listOfProjects = [
	{image:"./img/nfldataviewer.png", title:"nfldataviewer", info:"A simple visualiztion of NFL teams"},
	// {image:"", title:"", info:""},
]



const formatProject = (project) => (
	<div key={project.title}>
		<ProjectImage src={project.image} alt={project.title} />
		<h1>{project.title}</h1>
		<p>{project.info}</p>
	</div>
)

const Projects = () => (
	<div>
		<h1>Projects</h1>
		<div>
			{listOfProjects.map((projects) => (formatProject(projects)))}
		</div>
	</div>
)

export default Projects