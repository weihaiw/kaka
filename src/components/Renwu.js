import React from 'react';
import HeaderRen from './headerRen.js'
export default class Renwu extends React.Component{
  constructor(){
    super()
    this.state={
          arr:[
        {
          p:"想了解一下武汉市武昌区汉街的街景和街上的几个咖啡厅店里面的情况......",
          touxiang:`${require("./images/chen_xx___u103.svg")}`,
          spanLeft:"chen xx",
          spanLeftImg:`${require("./images/u110.svg")}`,
          spanRight:"50",
          spanRightImg:`${require("./images/u602.svg")}`,
          spanDown:"上海市浦东新区 988km 2017-03-09",
          spanDownImg:`${require("./images/u118.svg")}`
        },
        {
          p:"我想知道这个星巴克现在的客......",
          img:`${require("./images/u617.svg")}`,
          touxiang:`${require("./images/u631.svg")}`,
          spanLeft:"an 然",
          spanLeftImg:`${require("./images/u277.svg")}`,
          spanRight:"100",
          spanRightImg:`${require("./images/u602.svg")}`,
          spanDown:"合肥市包河区 917km 2017-03-09",
          spanDownImg:`${require("./images/u118.svg")}`
        }
      ]
    }
  }
  render(){
    // let name = this.props.location.pathname;
    // let ind = name.replace("/home/","")
    let ind = this.props.ind
    return(
      <div>
        <div className="main-w">
          <HeaderRen />
          <div className="main">
            <div style={{textAlign:"center",backgroundColor:"#fff",marginBottom:"10px"}}>
              <img src={this.state.arr[ind].touxiang} alt="Ren" 
                style={{width:"89px",height:"89px",margin:"12px"}}/>
              <p style={{paddingBottom:"8px",marginTop:"-5px",fontSize:"14px",fontWeight: "100"}}>{this.state.arr[ind].spanLeft} <img alt="ren" src={this.state.arr[ind].spanLeftImg}/></p>
            </div>
            <div style={{backgroundColor:"#fff",marginBottom:"10px"}}>
              <p style={{padding:"3%"}}>{this.state.arr[ind].p}</p>
              <p style={{padding:"3%",paddingTop:"50px"}}>
                <span style={{justifyContent:"space-between"}}>
                  <img alt="ren" src={this.state.arr[ind].spanDownImg} style={{width:"10px",marginRight:"5px"}}/>
                  {this.state.arr[ind].spanDown}
                </span>
                <span style={{fontSize:"40px",float:"right",marginTop:"-30px",fontWeight: "lighter"}}>
                  <img alt="ren" src={this.state.arr[ind].spanRightImg} style={{width:"40px"}}/>
                  {this.state.arr[ind].spanRight}
                </span>
              </p>
            </div>
            <div style={{backgroundColor:"#fff",marginBottom:"10px",padding:"40px 0"}}>
              <a href="#" 
                style={{display:"block",fontSize:"20px",textAlign:"center",lineHeight:"47px",fontWeight:"800",
                width:"94%",margin:"50px 3%",color:"#fff",  borderRadius:"10px",
                background:`url(${require("./images/u62.png")})`}}>
                接受任务
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
