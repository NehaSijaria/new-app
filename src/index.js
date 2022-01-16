import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const MyComponent = (props) => { {
  return (
    <>
      <h5>Calling component</h5>
      <p>{props.compTitle}</p> 
    </>
  )
}
 
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent compTitle = "Title: MyComponent"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

