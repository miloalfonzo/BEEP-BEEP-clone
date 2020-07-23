import React from "react";
import styled from "styled-components";

function Menu({ icon, title }) {
  const Contenedor = styled.div`
    i {
      font-size: 23px;
      padding: 2px;
    }
    h2 {
      font-size: 20px;
    }
    .menu {
      width: 200px;
    }
    .menu:hover {
      background-color: rgba(29, 161, 242, 0.1);
      border-radius: 50px;
      i,
      h2 {
        color: #1e7ac3;
      }
    }
  `;

  return (
    <Contenedor>
      <div class="menu row ml-2 mb-3 p-1">
        <i class={icon}></i>
        <h2 class="ml-4">{title}</h2>
      </div>
    </Contenedor>
  );
}

export default Menu;
