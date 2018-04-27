import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <iframe src="https://www.menoramivt.co.il/" width="100%" style={{height: '1500px'}}></iframe>
      </div>
    );
  }
}

export default App;
