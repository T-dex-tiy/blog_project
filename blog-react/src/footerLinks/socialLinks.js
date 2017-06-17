import React, { Component } from 'react'

class Footer extends Component{
  constructor(props){
    super(props)
}
  render(){
    return (
      <div className="footer">
      <h4><a href="https://twitter.com/dexmills">twitter</a></h4>
      <h4><a href="https://medium.com/@dexmills">medium</a></h4>
      <h4><a href="https://github.com/T-dex/">github</a></h4>
      </div>
    )
  }
}


module.exports = Footer
