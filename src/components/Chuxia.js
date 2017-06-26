import React from 'react';
let input

export default class Chuxia extends React.Component{
  constructor(){
    super()
    this.state={
      talk:[]
    }
  }
  bindleclick(){
    this.setState({talk:[...this.state.talk,(input.value)]})
    console.log(this.state.talk)
    input.value=""
    console.log(this.state.talk)
  }
  render(){
    return(
      
      <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 94px)",backgroundColor:"#fff"}}>  
          
        <div style={{alignItems:"center",flexGrow:"1"}}>
          <p style={{textAlign:"center",color:"#ccc",lineHeight:"38px",fontSize:"12px"}}>{this.props.arr[0].time}</p>
          <p style={{padding:"0 3%"}}>
            <img alt="chuxia" src={this.props.arr[0].touxiang} style={{width:"35px"}}/>
            <span style={{backgroundColor:"#ccc",borderRadius:"10px",padding:"8px 40px 8px 8px",marginLeft:"10px"}}>
              {this.props.arr[0].news}
            </span>
          </p>
          
            {
              this.state.talk.map((item,index) => (
                <div style={{width:"100%",height:"50px"}}>
                  <p style={{padding:"0 3%",float:"right"}}>
                     <span style={{backgroundColor:"red",borderRadius:"10px",padding:"8px 40px 8px 8px",marginRight:"10px"}}>
                        {this.state.talk[index]}
                      </span>
                      <img style={{width:"35px"}} alt="chuxia" src={require("./images/chen_xx___u103.svg")}/>
                   </p>
                 </div>
              ))
            }
        </div>      
      
        <div style={{backgroundColor:"red",padding:"0 3%"}}>
          <img style={{width:"20px",verticalAlign:"middle",margin:"0 5px"}} alt="chuxia" src={require("./images/资源 62.png")}/>
          <input style={{margin:"8px 0",width:"75%"}} type="text" ref={node => {input = node}}/>
          <img style={{width:"20px",verticalAlign:"middle",margin:"0 5px"}} alt="chuxia" src={require("./images/u432.png")}/>
          <img onClick={this.bindleclick.bind(this)} style={{width:"20px",verticalAlign:"middle",margin:"0 5px"}} alt="chuxia" src={require("./images/u201.png")}/>
        </div>
      </div>
    )
  }
}
