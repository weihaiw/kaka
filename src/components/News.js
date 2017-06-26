import React from 'react';
import FindHeader from './FindHeader.js'
import {Link} from 'react-router-dom'

let arr=[
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
export default class News extends React.Component{
  render(){
    return(
      <div>
        <div className="main-w">
          <FindHeader />
          <div className="main">            
            {
              arr.map((item,index) =>
                <Link to={`/new/${item.name}`} key={index}>
                  <div className="news">
                    <img alt="news" src={item.touxiang}/>
                    <p>
                      <b style={{color:"#333"}}>{item.name}</b><br/>
                      <span style={{color:"#999"}} className="left">{item.news}</span>
                      <span style={{color:"#999"}} className="right">{item.time}</span>
                    </p>
                  </div> 
                </Link>
            )}
          </div>
        </div> 
      </div>
    
    )
  }
}
