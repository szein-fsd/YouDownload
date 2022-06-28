import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../Main';

class App extends Component{  
  
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to your youtube® videos downloader
          </p>
        </header>
        <Main />
      </div>
  );
}
}

export default App;
