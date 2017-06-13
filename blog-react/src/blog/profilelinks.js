import React, { Component } from 'react'
import WebProjects from '../styles/images/projects/FirstPage.png'
class Projects extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="profilelinks">
      <div className="webProjects one"><img className="portfolio" src={WebProjects}/></div>
      <div className="webProjects two"><img className="portfolio" src={WebProjects}/></div>
      <div className="webProjects three"><img className="portfolio" src={WebProjects}/></div>
      <div className="webProjects four"><img className="portfolio" src={WebProjects}/></div>
      <div className="webProjects five"><img className="portfolio" src={WebProjects}/></div>
      <div className="webProjects six"><img className="portfolio" src={WebProjects}/></div>

      </div>
    )
  }
}


module.exports = Projects
