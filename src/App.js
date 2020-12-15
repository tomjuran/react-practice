//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
    return <div>
     <h1>Hi</h1>
     <Folder name="Desktop">
     <Folder name="music">
       <File name="all_star" />
       <File name="express" />
     </Folder>
      <h3>stuff</h3>
      <File name="dog.jpeg"/>
     </Folder>
     <Folder name="Applications">
       <h1>music</h1>
     </Folder>
     </div>

}
const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  console.log(props);
  const { name, children } = props;
  const handleClick = () => {
    setIsOpen(!isOpen);

  };
  const borderStyle = { border: '2px solid pink' };
  return <div style={borderStyle}>
   <span onClick={handleClick}>{name}</span>
   <div style={{ marginLeft: '17px', border: '2px solid navy' }}>
    {isOpen ? children : null}
   </div>
  </div>
};
const File =(props) => {
  return <div>{props.name}</div>
}

export default App;