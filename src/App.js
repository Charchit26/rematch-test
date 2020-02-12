import React from 'react';
import logo from './logo.svg';
import './App.css';
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import Comp from "./comp.js";
import {count} from "./models.js";

export const store = init({
    models: {
        count,
    },
})

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Comp />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Provider>
  );
}

export default App;
