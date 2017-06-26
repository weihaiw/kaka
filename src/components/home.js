import React from 'react';
import Carousel from 'antd/lib/carousel';
import Header from './Header.js'
import {Link} from 'react-router-dom'

let arr=[
  {
    p:"想了解一下武汉市武昌区汉街的街景和街上的几个咖啡厅店里面的情况......",
    touxiang:`${require("./images/chen_xx___u103.svg")}`,
    spanLeft:"chen xx",
    spanLeftImg:`${require("./images/u110.svg")}`,
    spanRight:"50",
    spanRightImg:`${require("./images/u602.svg")}`,
    spanDown:"上海市浦东新区 988km 2017-03-09",
    spanDownImg:`${require("./images/u602.svg")}`
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
    spanDownImg:`${require("./images/u602.svg")}`
  }
]
let Img =[`${require("./images/u647.jpg")}`,
  `${require("./images/u649.jpg")}`,
  `${require("./images/u651.jpg")}`
]
export default class Home extends React.Component{  

  render(){    
    return(
      <div className="main-w">
        <Header />
        <div className="main">
          <Carousel autoplay>
            <div><img src={require("./images/u539.jpg")} alt="banner" style={{width:"100%",height:"204px"}}/></div>
            <div><img src={require("./images/u541.jpg")} alt="banner" style={{width:"100%",height:"204px"}}/></div>
            <div><img src={require("./images/u584.jpg")} alt="banner" style={{width:"100%",height:"204px"}}/></div>
          </Carousel>
          <div className="home">
            <h3>--最新任务--</h3>
            <div>            
              {
                arr.map((item,index) => (
                  <div key={index}>
                    <Link to={`/home/${index}`} >
                      <p style={{paddingBottom:"0"}}>{item.p}
                        {item.img ? <img src={item.img} alt="home"/> :null} 
                      </p>
                      <img src={item.touxiang} style={{width:"30px",height:"30px",float:"left",marginLeft:"8px"}} alt="home"/>                 
                      <p style={{paddingTop:"0",paddingBottom:"0"}}>                    
                        <span style={{fontSize:"14px"}}>{item.spanLeft} 
                          <img src={item.spanLeftImg} style={{width:"10px",height:"10px",marginLeft:"5px"}} alt="home"/>
                        </span>
                        <span style={{float:"right",color: "#EA0606",fontWeight:"800",fontSize:"14px"}}>
                          <img src={item.spanRightImg} style={{width:"16px",height:"16px",marginRight:"5px"}} alt="home"/>
                          {item.spanRight}
                        </span>
                      </p>
                      <p style={{paddingTop:"0",color:"#A3A3A3",paddingLeft:"40px"}}><span>{item.spanDown}</span></p>
                    </Link>                    
                  </div>
                ))
              }
            </div>
            <h3>--今日推荐--</h3>
            <div className="tuijian">
              <p>
                {
                  Img.map((item,index) => (
                    <img style={{margin:"0 1%",width:"31.3%",height:"97px",float:"left"}} src={item} alt="home" key={index}/>
                  ))
                }
              </p>
              <p style={{fontSize: "12px",lineHeight:"20px",color:"#7D7D7D",padding:"8px 2%",paddingBottom:"0"}}>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)古根海娒美术馆</p>
              <p >
                <span style={{backgroundImage:`url(${require("./images/u298.svg")})`}} >6326</span>
                <span style={{backgroundImage:`url(${require("./images/u602.svg")})`}} >70</span>
                <span style={{backgroundImage:`url(${require("./images/u42.png")})`}} >261</span>
              </p>            
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}
