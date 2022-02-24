import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';
// import { DAppProvider } from "@usedapp/core";

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>

      {/* <DAppProvider config={{
    }}> */}
      <App />
      {/* </DAppProvider> */}
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
