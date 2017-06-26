import React from 'react';
import CenterHeader from './CenterHeader.js'
import Center1 from './Center1.js'
import Center2 from './Center2.js'
export default class Find extends React.Component{

  render(){
    let name = this.props.location.pathname;
    name = name.replace("/center/","");
    console.log(this.props)
    return(
      <div>      
        <div className="main-w">
          <CenterHeader />
          <div className="main">            
            {/* {
              ((name==="wancheng"||"fabu"||"shoucang"||"mingpian") ? <Center1 name={name}/> : "")
            }    */}
            {
              // (name==="wancheng"||"fabu"||"shoucang"||"mingpian") ? <Center1 name={name}/> : 
              (name==="chongzhi") ? <Center2 prop={this.props}/> : ""
            }          
          </div>
        </div>            
      </div>
    )
  }
}
