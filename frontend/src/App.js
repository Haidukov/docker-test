import React from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeApiRequest = () => {
    axios.get('/api/test2');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save2 to reload!!!! Hello from inside
          docker Hi I'm develsopment
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>
        Click me
      </button>
    </div>
  );
}

export default App;
