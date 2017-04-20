import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import about from './blog/About.js';
import blog from './blog/blog.js';
import sites from './blog/Sites.js';
import dates from './navbar/dates.js';
import Tag1 from './navbar/taggins.js';
import Screen1 from './main-content/mainContent.js';

import './styles/app.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="app-header">
        <div className="app-wrapper-nav">
          <div className="app-nav">
            <div className="nav-item blog">
            <p>Blogs</p></div>
            <div className="nav-item about">
            <p>About</p></div>
            <div className="nav-item sites">
            <p>Recommended Sites</p></div>
          </div>
        </div>
        </div>
        <div className="app-wrapper">
        <div className="app-nav-bar">
          <div className="nav-item dates">
          <p>Post by Dates</p>
          </div>
          <div className="nav-item tags">
          <p>Tags</p> <Tag1 />
          </div>
          </div>
          <div className="mainContent">
            <div className="Screen1">
              <Screen1 />

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
