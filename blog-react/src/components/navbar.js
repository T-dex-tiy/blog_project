import React, { Component } from 'react'
import Months from'../components/months';

class NavBar extends Component{


  constructor(props){
    super(props)
  }
    newBlogDate(event){
      const newDate={
        date:this.props.key,
      }



      this.props.blogDate(newDate)
    }


  render(){
    return (
      <div className="app-nav-bar">
        <div className="nav-item tags" ref="post" onClick={this.newBlogDate}>
        {
        Object.keys(this.props.view).map(currentKey=>{
          return <Months key={currentKey}
            date={this.props.view[currentKey]} />})
        }
      </div>
        <div className= "nav-item tags">
        <p>Tags</p>
        </div>
      </div>
    )
  }
}




module.exports = NavBar
