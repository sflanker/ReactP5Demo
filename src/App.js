import React from 'react';
import P5Demo from './Components/P5Demo';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          P5.js React Demo
        </h1>
      </header>
      <main>
        <P5Demo color="green" />
      </main>
    </div>
  );
}

export default App;
