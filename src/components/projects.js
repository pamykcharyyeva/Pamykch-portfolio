import React from 'react'
import Project from './project'

class ProjectContainer extends React.Component {
	render(){
		return(
			<div>
			<Project 
				itemClass={"individual-project blue-project"}
				src={"https://www.youtube.com/watch?v=7T0ivP3Emeg&list=PLcFFFaP5zdCc3Dx2LsgPz8XgjQRb85YDX"} 
				title={"Talk & Meet App"} 
				p1={"Fullstack React/JS and Ruby/Rails Application, Bootstrap "}
				p2={"Live chatting through Action Cable to access WebSockets"}
				p3={"ChatRoom"}
				github={"https://github.com/carlypecora/mod-5-project-frontend"}
			/>
			<Project 
				itemClass={"individual-project grey-project"}
				src={"https://www.youtube.com/watch?v=T4gTNVQcObk&list=PLcFFFaP5zdCc3Dx2LsgPz8XgjQRb85YDX&index=2"} 
				title={"Catch the Hearts"} 
				p1={"Game to Catch as much as possible Hearts"}
				p2={"Frontend Javasript, HMTL, CSS"}
				p3={"Backend Rub / Rails"}
				github={"https://github.com/pamykcharyyeva?tab=stars"}
			/>
			<Project 
				itemClass={"individual-project blue-project"}
				src={"https://www.youtube.com/embed/8LaQP2Ko4C8"} 
				title={"Postcard"} 
				p1={"Fullstack Javascript and Ruby/Rails Application"}
				p2={"Upload photos to a specific location on a map"}
				p3={"View friends' maps"}
				github={"https://github.com/carlypecora/Frontend-mod3"}
			/>
			<Project 
				itemClass={"individual-project grey-project"}
				src={"https://www.youtube.com/embed/DAs7lAifncY"} 
				title={"mRDB"} 
				p1={"Fullstack Ruby/Rails Application with Auth through BCrypt"}
				p2={"Login and search from the Spotify API"}
				p3={"View an artist's albums and rate an artist's songs"}
			/>
			</div>
		)
	}
}

export default ProjectContainer