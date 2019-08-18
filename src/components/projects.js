import React from 'react'
import Project from './project'

class ProjectContainer extends React.Component {
	render(){
		return(
			<div>
			<Project 
				itemClass={"individual-project grey-project"}
				src={"https://www.youtube.com/embed/j2nbcG0X0dc"} 
				title={"My Portfilo"} 
				p1={"React, ReactMDL, Ant Design "}
				github={"https://github.com/pamykcharyyeva/Pamykch-portfolio"}
			/>
			<Project 
				itemClass={"individual-project blue-project"}
				src={"https://www.youtube-nocookie.com/embed/7T0ivP3Emeg"} 
				title={"Talk & Meet App"} 
				p1={"Fullstack React/JS and Ruby/Rails Application, Bootstrap "}
				p2={"Live chatting through Action Cable to access WebSockets"}
				p3={"ChatRoom"}
				github={"https://github.com/carlypecora/mod-5-project-frontend"}
			/>
			<Project 
				itemClass={"individual-project grey-project"}
				src={"https://www.youtube-nocookie.com/embed/T4gTNVQcObk"} 
				title={"Catch the Hearts"} 
				p1={"Game to Catch as much as possible Hearts"}
				p2={"Frontend Javasript, HMTL, CSS"}
				p3={"Backend Rub / Rails"}
				github={"https://github.com/pamykcharyyeva?tab=stars"}
			/>
			<Project 
				itemClass={"individual-project blue-project"}
				src={"https://www.youtube-nocookie.com/embed/JZSMO-hvtGo"} 
				title={"Weather App"} 
				p1={"Built with React, & Open Weather Map API, Bootstrap"}
				p2={"App to check realtime weather"}
				github={"https://github.com/pamykcharyyeva/WeatherApp"}
			/>

			</div>
		)
	}
}

export default ProjectContainer




