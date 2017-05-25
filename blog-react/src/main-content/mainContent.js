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
      <textarea className="inputField" rows="25" cols="90">What is on Your mind</textarea>
      <button onClick = {() => {this.props.eventEmitter.emit("PostBlog",{blogHead:43})}}>Submit</button>
      </div>
    )
  }
}


module.exports = Post
