import React, { Component } from 'react'

class Months extends Component{
  constructor(props){
    super(props)
    this.callBlogDate = this.callBlogDate.bind(this)
  }


  render(){
    return (
      <div>
      <p>{this.props.view.key}</p>

      </div>
    )
  }
}



module.exports = Months
