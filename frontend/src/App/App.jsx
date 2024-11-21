import React from "react";
import styled from 'styled-components';
import { Button } from "react-bootstrap";

const Title = styled.h1`
  color: red;
`

const App = () => {
  return (
  <div>
    <Title>Olá, mundo!</Title>
    <Button>Clique aqui</Button>
  </div>
  )

};

export default App;
