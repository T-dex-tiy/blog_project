import React, { Component } from 'react';
import Navitems from '../components/navcomponents.js';


class Nav extends Component{

  constructor(props){
    super(props)
    this.state={


    }
  }

  render(){
    return (
      <div className="app-nav">
          <div className="navcompnents">
            <Navitems eventEmitter={this.props.eventEmitter}/>
          </div>
      </div>
    )
  }
}


module.exports = Nav
