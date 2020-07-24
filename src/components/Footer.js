import React from "react";
import styled from "styled-components";

function Footer() {
  const Container = styled.div`
    p {
      font-size: 10px;
      color: #686f75;
      margin: 3px;
    }
    p:hover {
      color: #777e85;
    }
  `;

  return (
    <Container>
      <div className="container mt-2 col-lg-10">
        <div className="row">
          <p>Términos</p>
          <p> Politica de privacidad</p>
          <p> Cookies</p>
        </div>
        <div className="row">
          <p>Información de anuncios </p>
          <p>Más opciones</p>
        </div>
        <div className="row">
          <p> ®2020, Twitter, Inc.</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
