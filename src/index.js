import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Pages/Main/Main';
import Register from "./Pages/Register/Register"
import "./styles/reset.scss"

ReactDOM.render(
  <React.StrictMode>
    {/* <Main /> */}
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);
