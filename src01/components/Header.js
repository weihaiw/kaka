import React from 'react';
import Button from 'antd/lib/button';
import {withRouter} from 'react-router-dom'
class Header extends React.Component{
  console.log(this.props)
  render(){
    return(
      <header>
        <Button icon="left" onClick={() => this.props.history.goBack()}>返回</Button>
        <h3>薇薇一笑很倾城</h3>
        <Button icon="user"></Button>
      </header>
    )
  }
}
export default withRouter(Header)
