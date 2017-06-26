import React from 'react';
import SuosouHeader from './SuosouHeader.js'
export default class Suosou extends React.Component{
  render(){
    let prop = this.props.history;
    return(
      <div>
        <div className="main-w">
          <SuosouHeader prop={prop}/>
          <div className="main" style={{backgroundColor:"#fff",margin:"0 auto",lineHeight:"calc(100vh - 94px)"}}>
            <img src={require("./images/u71.png")} alt="home"/>
          </div>
        </div>
      </div>
    )
  }
}
