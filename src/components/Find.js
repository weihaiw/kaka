import React from 'react';
import FindHeader from './FindHeader.js'
import Share from './Share.js'
let arr=[
  {
    touxiang:`${require("./images/u278.svg")}`,
    name:"泡沫",
    sex:`${require("./images/u277.svg")}`,
    jiantou:`${require("./images/u310.png")}`,
    p:"安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ",
    img1:`${require("./images/u280.svg")}`,
    img2:`${require("./images/u288.svg")}`,
    img3:`${require("./images/u290.svg")}`,
    add:`${require("./images/u118.svg")}`,
    time:"58分钟前",
    addr:"宏村秀里精品文化酒店"
  },
  {
    touxiang:`${require("./images/u343.svg")}`,
    name:"初夏",
    sex:`${require("./images/u277.svg")}`,
    jiantou:`${require("./images/u310.png")}`,    
    p:"安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ",
    img1:`${require("./images/u339.svg")}`,
    img2:`${require("./images/u347.svg")}`,
    img3:`${require("./images/u349.svg")}`,
    add:`${require("./images/u118.svg")}`,
    time:"58分钟前",
    addr:"宏村秀里精品文化酒店"
  },
  {
    touxiang:`${require("./images/u353.svg")}`,
    name:"陈 xx",
    sex:`${require("./images/u110.svg")}`,
    jiantou:`${require("./images/u310.png")}`,
    p:"在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...",
    img1:`${require("./images/u363.jpg")}`,
    add:`${require("./images/u118.svg")}`,
    time:"1小时前",
    addr:"浙江省桐乡市乌镇酒吧"
  }
]
export default class Find extends React.Component{
  constructor(){
    super()
    this.state={
      click:false
    }
  }
  bindleClick(){
    this.setState({click:!(this.state.click)})
    console.log(this.state.click)
    
  }
  render(){
    return(
      <div>      
        <div className="main-w">
          <FindHeader />
          {this.state.click ? <Share state={this.state}/> : ""}
          <div className="main">            
              {
                arr.map((item,index) => (
                  <div className="find" key={index}>
                    <img alt="find" src={item.touxiang}/>
                    <p>{item.name} 
                      <img alt="find" src={item.sex}/> 
                      <span onClick={this.bindleClick.bind(this)}><img alt="find" src={item.jiantou}/></span>
                    </p>
                    <p>{item.p}</p>
                    <p>
                      <img alt="find" src={item.img1}/>
                      {item.img2 ? <img alt="find" src={item.img2}/> : ""}
                      {item.img3 ? <img alt="find" src={item.img3}/> : ""}
                    </p>
                    <p>
                      <span>{item.time}  <img alt="find" src={item.add}/>  {item.addr}</span> 
                      <span>
                        <span style={{backgroundImage:`url(${require("./images/u298.svg")})`}} >6326</span>
                        <span style={{backgroundImage:`url(${require("./images/u296.svg")})`}} >70</span>
                        <span style={{backgroundImage:`url(${require("./images/u42.png")})`}} >261</span>
                      </span>
                    </p>
                  </div>
                ))
              }
            
          </div>
        </div>            
      </div>
    )
  }
}
