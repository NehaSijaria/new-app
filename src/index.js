import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const MyComponent = () => { {
  return (
    <p>Calling MyComponent</p>
  )
}
 
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

