import React from 'react';

export default class Wecome extends React.Component{
  render(){
    console.log(this.props)
    return(      
      <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 94px)",backgroundColor:"#fff"}}>  
        <div style={{alignItems:"center",flexGrow:"1"}}>
          <p style={{textAlign:"center",color:"#ccc",lineHeight:"38px",fontSize:"12px"}}>{this.props.arr[2].time}</p>
          <p style={{padding:"0 3%"}}>
            <img alt="chuxia" src={this.props.arr[2].touxiang} style={{width:"25px"}}/>
            <p style={{backgroundColor:"#ccc",borderRadius:"10px",padding:"8px 40px 8px 8px",marginLeft:"10px"}}>
              {this.props.arr[2].news}
            </p>
          </p>             
         </div>      
      </div>
    )
  }
}
