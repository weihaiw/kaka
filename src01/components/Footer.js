import React from 'react';
import Icon from 'antd/lib/icon'
import {NavLink} from 'react-router-dom'
export default class Footer extends React.Component{
  render(){
    return(
      <footer>
        <NavLink exact to='/' activeStyle={{color:"#666"}}><Icon type="home"/><br />Home</NavLink>
        <NavLink to='/blog' activeStyle={{color:"#666"}}><Icon type="exception"/><br />Blog</NavLink>
        <NavLink to='/work' activeStyle={{color:"#666"}}><Icon type="file-text"/><br />Work</NavLink>
        <NavLink to='/about' activeStyle={{color:"#666"}}><Icon type="global"/><br />About</NavLink>
      </footer>
    )
  }
}
