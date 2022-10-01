import './App.css';
import NavBar from './Component/NavBar';
import News from './Component/News';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5}/>
      </div>
    )
  }
}

