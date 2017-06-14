import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Rebase from 're-base';
import firebase from 'firebase';
import About from './blog/About.js';
import Sites from './blog/Sites.js';
import Dates from './navbar/dates.js';
import Tag1 from './navbar/taggins.js';
import NewHome from './blog/newpost.js';
import Post from './main-content/mainContent.js';
import ByTag from './main-content/taggeditem.js';
import ByDate from './main-content/datedpost.js';
import {EventEmitter} from 'events';
import Links from './main-content/linkpages.js';
import All from './main-content/all.js';
import Nav from './components/nav.js';
import NavBar from './components/navbar.js';
import './styles/app.css';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAZzsLt4oX0-d20ygSn4k0R5vOiHG8TuVE",
  authDomain: "captainradmcsaucypants2.firebaseapp.com",
  databaseURL: "https://captainradmcsaucypants2.firebaseio.com",
  storageBucket: "captainradmcsaucypants2.appspot.com",
});

const base = Rebase.createClass(app.database());

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      screenDisplay: 3,
      blog:{},
    }
  }

  componentDidMount(){
    base.syncState(`Blogs`, {
      context: this,
      state: 'blog',
    });
  }
  componentWillUnmount(){
  base.removeBinding(this.ref);
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

  blogDate(key){
    let date = this.state.blog
    const updatedDate=(new Date()).toString()
    date[key].updatedDate= updatedDate
    this.setState({blog: date})
  }

  displayBlog(){
    const keys =
    Object.keys(this.state.blog).filter( currentKey =>{
      const blog =
      this.state.blog[currentKey]
    })
    return keys.map( currentKey =>{
      return
      (this.state.blog)[currentKey]
    })
  }

  render() {
    var DisplayedScreen

    if(this.state.screenDisplay === 1){
      DisplayedScreen = <Post eventEmitter= {this.eventEmitter}
      createNewBlog ={this.addedNewBlog.bind(this)}
       />
    }
    if(this.state.screenDisplay === 3){
      DisplayedScreen = <About view={this.state.blog} blogDate={this.blogDate.bind(this)} />
      }

    if(this.state.screenDisplay === 4){
      DisplayedScreen = <All view={this.state.blog} blogDate={this.blogDate.bind(this)} />
      }

    if(this.state.screenDisplay === 5){
      DisplayedScreen = <Links eventEmitter= {this.eventEmitter}/>
      }


    return (
      <div className="app">
        <div className="app-header">
          <div className="Logo"><h1>Dex Mills Designs</h1></div>
            <Nav eventEmitter={this.eventEmitter}
              screenDisplay ={this.state.screenDisplay} />
        </div>
        <div className="app-wrapper">
          <div className="mainContent" >
            {DisplayedScreen}
        </div>
        </div>
        <div className="app-footer"> <p> The Dinosaur Engineering Expierence 2017</p> </div>
      </div>
    )
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
