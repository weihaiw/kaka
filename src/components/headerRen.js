import React from 'react';
import {withRouter} from 'react-router-dom'

 class HeaderRen extends React.Component{
  render(){
    return(
      <header>           
          <a onClick={() => this.props.history.goBack()}><img style={{width:"20px",verticalAlign: "middle",marginLeft:"5px",marginTop: "-8px"}} 
            src={require('./images/u103.png')}  alt="a"/>
          </a>      
          <h1>任务详情</h1>
          <a></a> 
      </header>
    )
  }
}
export default withRouter(HeaderRen)
