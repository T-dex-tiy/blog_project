import React, { Component } from 'react'

class NavBar extends Component{


  constructor(props){
    super(props)
    const postByDate =
    Object.keys(this.props.view).filter(currentKey=>{
      const month =
      this.props.view[currentKey]
      console.log(month);
      return  ;
    })
  }

  render(){
    return (
      <div className="app-nav-bar">
        <div
          className="nav-item dates">
          <p>January Post</p>
        </div>
        <div
          className="nav-item dates">
          <p>Febuaray Post</p>
        </div>
        <div
          className="nav-item dates">
          <p>March Post</p>
        </div>
        <div
          className="nav-item dates">
          <p>April Post</p>
        </div>
        <div
          className="nav-item dates">
          <p>May Post</p>
        </div>
        <div
          className="nav-item dates">
          <p>June Post</p>
        </div>
        <div
          className="nav-item dates">
          <p>July Post </p>
        </div>
        <div
          className="nav-item dates">
          <p>August Post </p>
        </div>
        <div
          className="nav-item dates">
          <p>September Post </p>
        </div>
        <div
          className="nav-item dates">
          <p>October Post </p>
        </div>
        <div
          className="nav-item dates">
          <p>November Post </p>
        </div>
        <div
          className="nav-item dates">
          <p>December Post </p>
        </div>

        <div
          className= "nav-item tags">
        <p>Tags</p>
        </div>
      </div>
    )
  }
}


module.exports = NavBar
