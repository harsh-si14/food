import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StateProvider } from './comp/context/StateProvider';
import { initalState } from './comp/context/initalState';
import reducer from './comp/context/reducer';
ReactDOM.render(
  <Router>
  <StateProvider initalState={initalState} reducer={reducer}>
  <App />
  </StateProvider>
 
  </Router>,
  document.getElementById("root")
);
