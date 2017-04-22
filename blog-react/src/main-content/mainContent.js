import React, { Component } from 'react'

class Post extends Component{

  render(){
    return (
      <div className="blog main">
      <textarea className="inputField" rows="25" cols= "90">What is on Your mind</textarea>
      <button>Submit</button>
      
      </div>
    )
  }
}


module.exports = Post
