import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

const [titulo , setTitulo] = useState ('')
const [imagem , setImagem] = useState ('')
const [descricao , setDescricao] = useState ('')
 


const changeTitulo = (event) => {
  setTitulo (event.target.value)
}

const changeImagem = (event) => {
  setImagem (event.target.value)
}

const changeDescricao = (event) => {
  setDescricao (event.target.value)
}

  return (
    <>
      <GlobalStyle/>

      <Container>

        <FormularioPostagem 
        titulo = {titulo} 
        changeTitulo = {changeTitulo}
        
        imagem = {imagem}
        changeImagem = {changeImagem}

        descricao = {descricao}
        changeDescricao = {changeDescricao}
        />

        <TelaDaPostagem 
        titulo = {titulo}
        imagem = {imagem}
        descricao = {descricao}/>

      </Container>
    </>
  );
}

export default App;
