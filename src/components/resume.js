import React from 'react'
import ResumePDF from '../Resume.pdf'

const Resume = () => {
	return(
		<div id="resume">
			<embed className="resume-item" src={ResumePDF}></embed>
		</div>
	)
}

export default Resume