import React, { Component } from 'react'
import Months from'../components/months';

class NavBar extends Component{


  constructor(props){
    super(props)


  }

  render(){
    return (
      <div className="app-nav-bar">
        <div className="nav-item tags">
        {
        Object.keys(this.props.view).filter(currentKey=>{
          const view = this.props.view[currentKey]
          return <Months view={this.view}/>})
        }

      </div>
        <div className= "nav-item tags">
        <p>Tags</p>
        </div>
      </div>
    )
  }
}




module.exports = NavBar
