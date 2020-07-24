import React from "react";
import styled from "styled-components";

function Header() {
  const Contenedor = styled.div`
    .line {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #686f75;
    }
    p {
      font-size: 22px;
    }
    .text {
      display: flex;
      justify-content: space-between;
    }
    i {
      color: #1e7ac3;
      padding: 5px;
    }
    i:hover {
      border-radius: 50%;
      background-color: rgba(29, 161, 242, 0.1);
    }
  `;
  return (
    <Contenedor>
      <div className="row ">
        <div class="line ">
          <p class="text mt-2 ml-2 ">
            <b>Inicio</b>
            <i class="mr-3 far fa-star"></i>
          </p>
        </div>
      </div>
    </Contenedor>
  );
}

export default Header;
