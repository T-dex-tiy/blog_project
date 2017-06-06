import React, { Component } from 'react';


class Nav extends Component{

  constructor(props){
    super(props)
    this.state={


    }
  }

  render(){
    return (
      <div className="app-nav">
          <div className="nav-item new" onClick={(event) => {this.props.eventEmitter.emit("navigateScreen", {screenDisplay:1})}}><p>New Post</p>
          </div>
          <div className={this.props.screenDisplay===4 ? "nav-item all currentScreen":"nav-item all"}  onClick={(event) =>{this.props.eventEmitter.emit("navigateScreen", {screenDisplay:4})}}><p>All</p></div>
          <div className="nav-item about" onClick={(event) =>{this.props.eventEmitter.emit("navigateScreen", {screenDisplay:3})}}>
          <p>About</p></div>
          <div className={this.props.screenDisplay===5 ? "nav-item all currentScreen":"nav-item all"}  onClick={(event) =>{this.props.eventEmitter.emit("navigateScreen", {screenDisplay:5})}}>
          <p>Sites</p></div>
      </div>
    )
  }
}


module.exports = Nav
