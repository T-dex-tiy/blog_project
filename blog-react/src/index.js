import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="app-header">
        <div className="app-wrapper-nav">
          <div className="app-nav">
            <div className="blog page">
            <p>Blogs</p></div>
            <div className="about page">
            <p>About</p></div>
            <div className="rec link page">
            <p>Recommended Sites</p></div>
          </div>
        </div>
        </div>
        <div className="app-wrapper">
        <div className="app-nav-bar"></div>
          <div className="main-content"></div>
            <div className="text-area">
            </div>
          </div>
        <div className="app-footer"></div>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
