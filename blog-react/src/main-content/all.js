import React, { Component } from 'react';
import Dates from '../navbar/dates.js';
import Tag1 from '../navbar/taggins.js';
import NavBar from '../components/navbar.js';

class All extends Component{
  constructor(props){
    super(props)
      this.renderBlog = this.renderBlog.bind(this)
  }
  renderBlog(event){

  const renderBlog= {
    body:this.props.body.value

  }
}
  render(){
    return (
      <div className="AllBlogs">
        <NavBar eventEmitter={this.eventEmitter}
          screenDisplay ={this.props.screenDisplay} />
        <h2>How</h2>
        <p>do I Get the info to </p>
        <p>Display???</p>
      </div>
    )
  }
}


module.exports = All
