import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({imagem , descricao , titulo}) => {
  return (
    (imagem && descricao?
      <ContainerPostagem>
      <Title> {titulo} </Title>
      <Image src={imagem} />
      <Description>{descricao}</Description>
    </ContainerPostagem>:
    <ContainerPostagem>
    <Title>Digite Seu Titulo:</Title>
    <Image src={'https://tse2.explicit.bing.net/th?id=OIP.Ae_k4JX25bScVh00mnmZ5gHaFu&pid=Api&P=0&h=180'} />
    <Description>Faça à Sua Descrição:</Description>
  </ContainerPostagem>
    )
  );
};

export default TelaDaPostagem;
