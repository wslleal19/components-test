import React from 'react';
import logo from './logo.svg';
import './fluence-ui.css';
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Text from './components/Text/Text';




function App() {

  const click = () => {
    console.log('teste');
  }

  return (
    <div className="App" style={{backgroundColor:'#e8e8e8', height: '100vh'}}>
        <Title size={1}>H21 title</Title>
    </div>
  );
}

export default App;
