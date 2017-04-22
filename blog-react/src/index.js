import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './blog/About.js';
import Blog from './blog/blog.js';
import Sites from './blog/Sites.js';
import Dates from './navbar/dates.js';
import Tag1 from './navbar/taggins.js';
import NewHome from './blog/newpost.js';
import Post from './main-content/mainContent.js';
import ByTag from './main-content/taggeditem.js';
import ByDate from './main-content/datedpost.js';

import './styles/app.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="app-header">
        <div className="app-wrapper-nav">
          <div className="app-nav">
            <div className="nav-item new">
            <NewHome /></div>
            <div className="nav-item blog">
            <Blog /></div>
            <div className="nav-item about">
            <About /></div>
            <div className="nav-item sites">
            <Sites /></div>
          </div>
        </div>
        </div>
        <div className="app-wrapper">
        <div className="app-nav-bar">
          <div className="nav-item dates">
          <p>Post by Dates</p><Dates />
          </div>
          <div className="nav-item tags">
          <p>Tags</p> <Tag1 />
          </div>
          </div>
          <div className="mainContent">
            <div className="Post">
              <Post />

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
