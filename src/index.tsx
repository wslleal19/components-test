import React from 'react';
import ReactDOM from 'react-dom';
import './fluence-ui.css';
import FluenceProvider from './components/FluenceProvider/FluenceProvider';
import theme from './components/theme-fluence-ui';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FluenceProvider theme={theme}>
      <App />
    </FluenceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
