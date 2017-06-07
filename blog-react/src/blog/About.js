import React, { Component } from 'react';
import Herobanner from '../images/herobanner.jpg';

class about extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
      <img className="Hero" src={Herobanner}></img>
      </div>
    )
  }
}


module.exports = about
