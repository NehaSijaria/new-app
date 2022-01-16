import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const MyComponent = (props) => { 
  {
    return (
      <>
        <h5>Calling component</h5>
        <p>{props.compTitle}</p> 
      </>
    )
  }
}

const Welcome = (props) => { 
  {
    return (
      <>
        <h5>Welcome component</h5>
        <p>Welcome: {props.username}</p> 
      </>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent compTitle = "Title:MyComponent"/>
    <App />
    <Welcome username="Sam" />
    <Welcome username="Samyi"/>
  </React.StrictMode>,
  document.getElementById('root')
);

