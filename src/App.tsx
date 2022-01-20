import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Text from './components/Text/Text';
import Container from './components/Container/Container';
import Box from './components/Box/Box';
import Col from './components/Col/Col';
import Row from './components/Row/Row';




function App() {

  const click = () => {
    console.log('teste');
  }

  return (
    <div className="App" style={{backgroundColor:'#e8e8e8', height: '100vh'}}>
      <Container backgroundColor={'#d4d4d5'} height={'200px'}>
        <Row>
          <Col sm={2} md={2}>
            Item 1
          </Col>
          <Col sm={5} md={8}>
            Item 2
          </Col>
          <Col sm={5} md={2}>
            Item 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
