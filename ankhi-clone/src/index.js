// index.js or App.js (the entry point of your React application)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <Provider store={store}> {}
    <App />
  </Provider>,
  document.getElementById('root')
);



//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
