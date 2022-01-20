import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Text from './components/Text/Text';
import Container from './components/Container/Container';
import Box from './components/Box/Box';



function App() {

  const click = () => {
    console.log('teste');
  }

  return (
    <div className="App" style={{backgroundColor:'#e8e8e8', height: '100vh'}}>
      <Container>
        <Title size={2}>Título teste</Title>
        <Title size={4}>Título teste</Title>
        <Button disabled={false}>Entrar na conta</Button>
        <Box>
          <Text>Texto bla bla teste</Text>
          <Text>Texto bla bla teste</Text>
        </Box>
        <Text>Texto bla bla teste</Text>
        <Text>Texto bla bla teste</Text>
        <Text>Texto bla bla teste</Text>
      </Container>
    </div>
  );
}

export default App;
