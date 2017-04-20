import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="app-header"></div>
        <div className="app-wrapper">
          <div className="app-nav"></div>
          <div className="main-content"></div>
            {this.props.children}
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
