import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  apikey="0414e8d318b04351a092c05cb0676986"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    




    return (
      <div>
        <Router>
        <Navbar/>
        
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => this.setProgress(0)}
      />
      
        {/* <News pageSize={this.pageSize} country="in" category="spor setprogress={setProgress} ts" /> */}
        <Routes>
          <Route exact  path="/" element={<News   setprogress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News   setprogress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business" />} ></Route>
          <Route exact  path="/entertainment" element={<News   setprogress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} ></Route>
          <Route exact  path="/general" element={<News    setprogress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />} ></Route>
          <Route exact path="/health" element={<News    setprogress={this.setProgress} apikey={this.apikey} key="health"pageSize={this.pageSize} country="in" category="health" />} ></Route>
          <Route exact  path="/science" element={<News   setprogress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science" />} ></Route>
          <Route exact  path="/sports" element={<News    setprogress={this.setProgress} apikey={this.apikey} key="sports"pageSize={this.pageSize} country="in" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News  setprogress={this.setProgress} apikey={this.apikey}  key="technology" pageSize={this.pageSize} country="in" category="technology" />} ></Route>

            
         
        </Routes>
        </Router>
        
      </div>
    )
  }
}
