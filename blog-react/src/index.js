import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import About from './blog/About.js';
import Sites from './blog/Sites.js';
import Dates from './navbar/dates.js';
import Tag1 from './navbar/taggins.js';
import NewHome from './blog/newpost.js';
import Post from './main-content/mainContent.js';
import ByTag from './main-content/taggeditem.js';
import ByDate from './main-content/datedpost.js';
import {EventEmitter} from 'events';
import All from './main-content/all.js';
import Nav from './components/nav.js';
import NavBar from './components/navbar.js';

import './styles/app.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        screenDisplay: 1
      }
    }
    componentWillMount(){
      this.eventEmitter = new EventEmitter()

      this.eventEmitter.addListener("navigateScreen",  ({screenDisplay}) => {
        this.updatePage({newDisplay: screenDisplay})
      })
    }

    updatePage({newDisplay}){
      this.setState({screenDisplay: newDisplay})
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
            <Nav eventEmitter={this.eventEmitter}
              screenDisplay ={this.state.screenDisplay} />
          </div>
        </div>
        <div className="app-wrapper">
        <NavBar eventEmitter={this.eventEmitter}
          screenDisplay ={this.state.screenDisplay} />
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
