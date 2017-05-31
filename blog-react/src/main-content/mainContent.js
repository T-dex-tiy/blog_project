import React, { Component } from 'react'

class Post extends Component{
  constructor(){
    super()
    this.newBlog = this.newBlog.bind(this)
  }

  newBlog(event) {
    if(!this.refs.mainBlog){
      return
    }
    const newBlog ={
      head: this.refs.blogHead.value,
      body: this.refs.mainBlog.value,
      tags: this.refs.tags.value,
    }
    event.preventDefault()

    this.props.createNewBlog(newBlog)

    // document.querySelector('#blogHead').value = ""
    // document.querySelector('#mainBlog').value = ""
    // document.querySelector('#btags').value = ""
  }

  render(){
    return (
      <div className="blog-main">
        <div>
          <textarea id="headField" rows="2" cols="90" ref="blogHead"></textarea>
        </div>
        <div>
          <textarea id="inputField"
            ref="mainBlog" rows="25" cols="90" placeholder="What is on Your mind"></textarea>
        </div>
        <div>
        <textarea id="tags" ref="tags" rows="1" cols="90"></textarea>
        </div>

        <button onClick ={this.newBlog}>Submit</button>
      </div>
    )
  }
}


module.exports = Post
