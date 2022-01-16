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
  console.log('props ------', props)
  {
    return (
      <>
        <h5>Welcome component = Title: {props.username} & Age: {props.age} </h5>
      </>
    )
  }
}
Welcome.defaultProps = {
  username:"user",
  age:30
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent compTitle = "Title:MyComponent"/>
    <App />
    <Welcome username="Sam" age="34"/>
    <Welcome username="Samyi" age="38"/>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);




