import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './Message';

class App extends Component<any> {

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name='tony' message="Hello ther" />
        </header>
      </div>
    )
  }
}

export default App;
