import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = (props) => {
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo: 
          <Input id="titulo" 
          onChange = {props.changeTitulo} value = {props.titulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange = {props.changeImagem} value = {props.imagem}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange = {props.changeDescricao} value = {props.descricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
