import React, { Component } from 'react'

class NavBar extends Component{

  constructor(props){
    super(props)
    this.state={


    }
  }

  render(){
    return (
      <div className="app-nav-bar">
        <div
          className={this.props.screenDisplay===2 ? "nav-item dates currentScreen" : "nav-item dates"}onClick={(event) => {this.props.eventEmitter.emit("navigateScreen", {screenDisplay:2})}}>
        <p>Post by Date</p></div>

        <div
          className={this.props.screenDisplay===3 ? "nav-item tags currentScreen" : "nav-item tags"} onClick={(event) => {this.props.eventEmitter.emit("navigateScreen", {screenDisplay:3})}}>
        <p>Tags</p>
        </div>
      </div>
    )
  }
}


module.exports = NavBar
