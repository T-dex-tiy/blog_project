import React, { Component } from 'react'

class All extends Component{


  render(){
    return (
      <div>
        <h2>{this.props.view.head}</h2>
        <p body= {this.props.view.body}></p>
        <p tags = {this.props.view.tags}></p>
      </div>
    )
  }
}


module.exports = All
