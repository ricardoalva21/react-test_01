import React from "react";
import styled from "styled-components";

import { Container, Box } from "@mui/material";

const Imagen = styled.div`
img {
    width: 50%;
    border-radius:35px;
`;

const Section = styled.div``;

const Titulo = styled.h1`
  color: #fff;
`;

const Parrafo = styled.p`
  color: #fff;
`;

const SubTitulo = styled.h3`
  color: #fff;
`;

function Main() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "#121319",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Titulo>Ponemos buena Musica</Titulo>
        <Imagen>
          <img src="/LOGO_RAIZ.jpg" alt="logo2" />
        </Imagen>

        <Parrafo>Somos musica</Parrafo>
      </Box>
      <Box>
        <SubTitulo>Latest Recordings</SubTitulo>
        <Section>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SqQ_61DDcsE?si=Gtw0sq2b2Go3I4AC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Parrafo>2023</Parrafo>
        </Section>
      </Box>
    </Container>
  );
}

export default Main;
