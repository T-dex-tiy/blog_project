import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
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

const base = Rebase.createClass({
  apiKey: "AIzaSyAZzsLt4oX0-d20ygSn4k0R5vOiHG8TuVE",
  authDomain: "captainradmcsaucypants2.firebaseapp.com",
  databaseURL: "https://captainradmcsaucypants2.firebaseio.com",
  projectId: "captainradmcsaucypants2",
  storageBucket: "captainradmcsaucypants2.appspot.com",
  messagingSenderId: "523061406446"
}, 'captainradmcsaucypants2');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      screenDisplay: 1,
      blog:{
        t42:{
          head:"here is my Head",
          body:"Here is my body",
          tags:"adsf",
          key:"t42",
        }
      },
    }
  }

  compnentDidMount(){
    base.syncState('Blog', {
      content: this,
      state:'blog',
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

    // if(this.state.screenDisplay === 2){
    //   DisplayedScreen = <ByDate eventEmitter= {this.eventEmitter} blog = {this.state.blog}
    //    />
    // }
    //
    // if(this.state.screenDisplay === 3){
    //   DisplayedScreen = <ByTag eventEmitter= {this.eventEmitter} blog = {this.state.blog}
    //    />
    // }

    if(this.state.screenDisplay === 4){
      DisplayedScreen = <All view={this.state.blog}/>
      }

    if(this.state.screenDisplay === 5){
      DisplayedScreen = <Links eventEmitter= {this.eventEmitter}/>
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
