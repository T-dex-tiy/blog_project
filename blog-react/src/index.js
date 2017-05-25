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
        screenDisplay: 1,
        blog:{},


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

  addedNewBlog(newBlog){
    const newMedia = {...this.state.blog}
    const key = "t"+ Date.now()
    newBlog.key= key
    newMedia[key]=newBlog
    this.setState({blog:newMedia})
  }

  render() {
    var DisplayedScreen

    if(this.state.screenDisplay === 1){
      DisplayedScreen = <Post eventEmitter= {this.eventEmitter}
      createNewBlog ={this.addedNewBlog.bind(this)}
       />
    }

    if(this.state.screenDisplay === 2){
      DisplayedScreen = <ByDate eventEmitter= {this.eventEmitter} blog= {this.state.blog}
       />
    }

    if(this.state.screenDisplay === 3){
      DisplayedScreen = <ByTag eventEmitter= {this.eventEmitter} blog= {this.state.blog}
       />
    }

    if(this.state.screenDisplay === 4){
      DisplayedScreen = <All eventEmitter= {this.eventEmitter} blog= {this.state.blog}
       />
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
          <div className="mainContent" >
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
