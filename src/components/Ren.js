import React from 'react';
import Renwu from "./Renwu.js"
// import Suosou from "./Suosou.js"
// import Add from './Add.js'
export default class Ren extends React.Component{
  render(){  
    let name = this.props.location.pathname;
    let ind = name.replace("/home/","")
    console.log(ind)
    return(
      <div>
        {(ind===0||1) ? <Renwu ind={ind}/> :""}
      </div>
    )
  }
}
