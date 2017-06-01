import React, { Component } from 'react'

class Entry extends Component{
  constructor(props){
    super(props)
    }


  render(){
    return (
      <div className="historyPost">
        <h1 className="header">{this.props.post.head}</h1>
        <p className="body">{this.props.post.body}</p>
        <p className="tags">{this.props.post.tags}</p>

      </div>
    )
  }
}


module.exports = Entry
