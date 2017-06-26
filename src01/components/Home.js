import React from 'react';
import Button from 'antd/lib/button';

export default class Home extends React.Component{
  render(){
    return(
      <div className='home-wrap beijing'>
        <div>
          <h3>HI,I'm WeiHaiWei</h3>
          <p>a front-end developer</p>
          <Button type='primary'><a href="http://github.com/weihaiw">HIRE ME</a></Button>
        </div>
      </div>
    )
  }
}
