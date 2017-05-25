import React, { Component } from 'react'

class Post extends Component{
  constructor(){
    super()
    this.state={


    }
  }

  render(){
    return (
      <div className="blog-main">
      <textarea id="headField" rows="2" cols="90"></textarea>
      <textarea id="inputField" rows="25" cols="90"placeholder="What is on Your mind"></textarea>
      <textarea id="tags" rows="1" cols="90"></textarea>
      <button onClick = {() => {this.props.eventEmitter.emit("PostBlog",{blogBody:()})}}>Submit</button>
      </div>
    )
  }
}


module.exports = Post
