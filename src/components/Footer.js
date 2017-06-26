import React from 'react';
import {NavLink} from 'react-router-dom';

const bg1 = {
  backgroundImage: `url(${require("./images/u14.png")})`
};
const bg2 = {
  backgroundImage: `url(${require("./images/u21.png")})`
};
const bg3 = {
  backgroundImage: `url(${require("./images/u32.png")})`,
  backgroundSize:"38px",
  marginTop:"-20px",
  paddingTop:"45px"
};
const bg4 = {
  backgroundImage: `url(${require("./images/u42.png")})`
};
const bg5 = {
  backgroundImage: `url(${require("./images/u52.png")})`,
};
export default class Footer extends React.Component{
  render(){
    return(
      <footer>        
        <NavLink exact to='/' 
          activeStyle={{backgroundImage: `url(${require("./images/u9.png")})`,color:"red"}} 
          style={bg1}>首页</NavLink>
        <NavLink to='/find' 
        activeStyle={{backgroundImage: `url(${require("./images/u26.png")})`,color:"red"}} 
        style={bg2}>发现</NavLink>
        <NavLink to='/fabu' 
        activeStyle={{backgroundImage: `url(${require("./images/u38.png")})`,color:"red"}}
        style={bg3}>发布</NavLink>
        <NavLink to='/news' 
        activeStyle={{backgroundImage: `url(${require("./images/u48.png")})`,color:"red"}}
        style={bg4}>消息</NavLink>
        <NavLink to='/my' 
        activeStyle={{backgroundImage: `url(${require("./images/u58.png")})`,color:"red"}}
        style={bg5}>我的</NavLink>
      </footer>
    )
  }
}
