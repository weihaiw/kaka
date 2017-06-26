import React from 'react';
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    return(
      <header>
        <Link to='/add'>武汉<img style={{width:"20px",verticalAlign: "middle",marginLeft:"5px",marginTop: "-8px"}} 
          src={require('./images/dingwei.png')} onClick={() => this.props.history.goBack()} alt="a"/></Link>
        <img style={{width:"73px"}} src={require('./images/u75.svg')} alt="a"/>
        <Link to='/sousuo'><img style={{width:"20px"}} src={require('./images/sousuo.png')} alt="a"/></Link>
      </header>
    )
  }
}
