import React, { Component } from 'react';
import Dates from '../navbar/dates.js';
import Tag1 from '../navbar/taggins.js';
import NavBar from '../components/navbar.js';
import Entry from '../main-content/entry'

class All extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div className="AllBlogs">
        <NavBar view={this.props.view}/>
        <div>
          {Object.keys(this.props.view).map(key=>{return<Entry key={key} post={this.props.view[key]}/>})}
        </div>
      </div>
    )
  }
}


module.exports = All
