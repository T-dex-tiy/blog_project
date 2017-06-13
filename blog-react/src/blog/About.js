import React, { Component } from 'react';
import Projects from '../blog/profilelinks.js'

class about extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="profile">
          <div className="Hero">
            <h2>Loud and Original</h2>
          </div>
          <div className="bio">
            <h1>Adventure based web design and pursuing the next big idea.</h1>
          </div>
          <div className="Hero2">
            <h2>Design thru Adventure</h2>
          </div>
        <div className="links">
          <h1>Projects!</h1>
          <Projects/>
        </div>
      </div>
    )
  }
}


module.exports = about
