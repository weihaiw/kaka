import React from 'react';
import Footer from './components/Footer.js';
import Home from './components/home.js'
import Find from './components/Find.js'
import Fabu from './components/Fabu.js'
import News from './components/News.js'
import My from './components/My.js'
import Ren from './components/Ren.js'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Suosou from './components/Suosou.js';
import Add from './components/Add.js';
import Act from './components/Act.js';
import Center from './components/Center.js'
export default class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <BrowserRouter>
        <div className="my-wrap">
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/find" component={Find} />
            <Route path="/fabu" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/new/:name" component={Act} />
            
            <Route path="/my" component={My} />
            <Route path="/center/:src" component={Center} />
            
            <Route path="/sousuo" component={Suosou} />
            <Route path="/add" component={Add} />
            <Route path="/home/0" component={Ren} />
            <Route path="/home/1" component={Ren} />
            
          </div>
          <Footer />
        </div>
    </BrowserRouter>
    )
  }
}
