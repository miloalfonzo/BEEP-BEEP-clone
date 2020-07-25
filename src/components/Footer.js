import React from "react";
import styled from "styled-components";

function Footer() {
  const Container = styled.div`
    p,
    i {
      font-size: 0.9em;
      color: #686f75;
      margin: 3px;
    }
    i {
      font-size: 0.7em;
    }
    p:hover {
      color: #bbc3c9;
    }
  `;

  return (
    <Container>
      <div className="ml-3 mt-2 col-lg-11">
        <div className="row">
          <p>Términos</p>
          <p> Politica de privacidad</p>
          <p> Cookies</p>
        </div>
        <div className="row">
          <p>Información de anuncios </p>
          <p>
            Más opciones<i className=" fas fa-chevron-down"></i>
          </p>
        </div>
        <div className="row">
          <p> ®2020, Twitter, Inc.</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
