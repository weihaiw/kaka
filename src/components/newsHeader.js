import React from 'react';
import {withRouter} from 'react-router-dom'

 class NewsHeader extends React.Component{
  render(){
    return(
      <header>           
          <a onClick={() => this.props.history.goBack()}><img style={{width:"20px",verticalAlign: "middle",marginLeft:"5px",marginTop: "-8px"}} 
            src={require('./images/u103.png')}  alt="a"/>
          </a>      
          <p style={{color:"#fff",fontSize:"14px"}}>{this.props.name}</p>
          <a></a> 
      </header>
    )
  }
}
export default withRouter(NewsHeader)
