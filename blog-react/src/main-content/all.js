import React, { Component } from 'react'

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
      <div>
        <h2>How</h2>
        <p>do I Get the info to </p>
        <p>Display???</p>
      </div>
    )
  }
}


module.exports = All
