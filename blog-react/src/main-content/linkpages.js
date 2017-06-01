import React, { Component } from 'react'

class Links extends Component{
  constructor(props){
    super(props)
    this.state={


    }
  }

  render(){
    return (
      <div className="linkpages">
      <h1> Links that inspire me</h1>
      <div>
        <a href="https://www.medium.com/@dexmills" className="covfefe">Medium</a>
      </div>
      <div>
        <a href="https://www.twitter.com/dexmills"
        className="covfefe">Twitter</a>
      </div>
      <div>
        <a href="https://goodfuckingdesignadvice.com/#/advice/213"
        className="covfefe">GFDA</a>
      <div>(Shouldn't look at work)</div>
      </div>

      </div>
    )
  }
}


module.exports = Links
