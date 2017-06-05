import React, { Component } from 'react'

class Months extends Component{
  constructor(props){
    super(props)

  }


  render(){
    return (
      <div>
      <p>{this.props.date.key}</p>

      </div>
    )
  }
}



module.exports = Months
