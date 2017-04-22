import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './blog/About.js';
import Sites from './blog/Sites.js';
import Dates from './navbar/dates.js';
import Tag1 from './navbar/taggins.js';
import NewHome from './blog/newpost.js';
import Post from './main-content/mainContent.js';
import ByTag from './main-content/taggeditem.js';
import ByDate from './main-content/datedpost.js';
import All from './main-content/all.js';

import './styles/app.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        screenDisplay: 3
      }
    }

    udpdatedDisplay(newDisplay){
      this.setState({screenDisplay:newDisplay})
    }
  render() {
    var DisplayedScreen

    if(this.state.screenDisplay === 1){
      DisplayedScreen = <Post />
    }

    if(this.state.screenDisplay === 2){
      DisplayedScreen = <ByDate />
    }

    if(this.state.screenDisplay === 3){
      DisplayedScreen = <ByTag />
    }

    if(this.state.screenDisplay === 4){
      DisplayedScreen = <All />
    }

    return (
      <div className="app">
        <div className="app-header">
        <div className="app-wrapper-nav">
          <div className="app-nav">
            <div className="nav-item new" onClick={() => {this.udpdatedDisplay(1)}}>
            <NewHome /></div>
            <div className={this.state.screenDisplay===4 ? "nav-item all currentScreen":"nav-item all"}  onClick={() =>{this.udpdatedDisplay(4)}}><All /></div>
            <div className="nav-item about">
            <About /></div>
            <div className="nav-item sites">
            <Sites /></div>
          </div>
        </div>
        </div>
        <div className="app-wrapper">
        <div className="app-nav-bar">
          <div className={this.state.screenDisplay===2 ? "nav-item dates currentScreen": "nav-item dates"}onClick={() => {this.udpdatedDisplay(2)}}>
          <p>Post by Dates</p><Dates />
          </div>
          <div className={this.state.screenDisplay===3 ? "nav-item tags currentScreen" : "nav-item tags"} onClick={() => {this.udpdatedDisplay(3)}}>
          <p>Tags</p> <Tag1 />
          </div>
          </div>
          <div className="mainContent">
            <div className="Post">
              {DisplayedScreen}

            </div>
          </div>
          </div>
        <div className="app-footer"> <p> The Dinosaur Engineering Expierence 2017</p> </div>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
