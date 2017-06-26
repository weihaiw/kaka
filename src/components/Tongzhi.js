import React from 'react';


export default class Tongzhi extends React.Component{
  render(){
    return(      
      <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 94px)"}}>  
        <p style={{textAlign:"center",color:"#ccc",lineHeight:"38px",fontSize:"12px",marginTop:"20px"}}>
          <span style={{backgroundColor:"rgba(0,0,0,0.5)",padding:"6px 10px",borderRadius:"8px"}}>{this.props.arr[1].time}</span>
        </p>
        <div style={{backgroundColor:"#fff",borderRadius:"10px",margin:"15px 5px"}}>
          <p style={{padding:"0 3%"}}>
            <p style={{marginLeft:"10px",lineHeight:"30px",paddingBottom:"180px"}}>
              {this.props.arr[1].news}
            </p>
          <p style={{padding:"0 3%",color:"#888",paddingBottom:"10px"}}>
            {this.props.arr[1].title}
          </p>
          </p>            
        </div>      
      </div>
    )
  }
}
