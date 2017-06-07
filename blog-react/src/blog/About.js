import React, { Component } from 'react';
import Projects from '../blog/profilelinks.js'

class about extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="profile">
        <div>
          <div className="Hero">
            <h2>Loud and Original</h2>
          </div>
        </div>
        <div>
          <div className="bio">
            <h1>Adventure based web design and pursuing the next big idea.</h1>
            <p>Many years of being a ski bum have lead me on many adventures all over the United States. An Injury lead me down a path that I was always interested in but never thought I would go down. Bold has always been a part of who I am, time to share that with the world</p>
          </div>
        </div>
        <div className="links">
          <div><Projects/>
          </div>
        </div>
      </div>
    )
  }
}


module.exports = about
