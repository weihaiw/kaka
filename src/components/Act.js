import React from 'react';
import NewsHeader from './newsHeader.js'
import Chuxia from './Chuxia.js'
import Tongzhi from './Tongzhi.js';
import Welcome from './Welcome.js'
export default class Act extends React.Component{
  constructor(){
    super()
    this.state={
      arr:[
        {
          touxiang:`${require("./images/u343.svg")}`,
          name:"初夏",
          news:"在吗?",
          time:"昨天 17: 43"
        },
        {
          touxiang:`${require("./images/资源 31.png")}`,
          name:"系统通知",
          news:"30秒带你体验随享咔咔?",
          title:"随享咔咔是一款可以随时随刻帮执泥所想看到的任何一处场景,只要有网络,有接单人,便能看见虽身不能处的地方的场景.",
          time:"下午 01: 25"
        },
        {
          touxiang:`${require("./images/111.png")}`,
          name:"欢迎加入随享咔咔",
          news:"主人,小卡已经恭候多时,200积分奉上,可在钱包查收,有任何意见可直接在消息中回复小卡.",
          time:"2017-01-15"
        }
      ]
    }
  }
  render(){
    let name = this.props.location.pathname;
    name = name.replace("/new/","");
    return(
      <div >        
        <div className="main-w">
          <NewsHeader name={name}/>
          <div className="main">
            {(name==="初夏") ? <Chuxia arr={this.state.arr}/> : ((name==="系统通知") ? <Tongzhi arr={this.state.arr}/> : <Welcome arr={this.state.arr}/>) }
          </div>
        </div>
      </div>
    )
  }
}
