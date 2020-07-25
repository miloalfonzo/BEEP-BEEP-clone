import React from "react";
import styled from "styled-components";

function Suggestions({ img, name, user, alt }) {
  const Container = styled.div`
    .prof {
      background: #1f3040;
      padding-left: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid #686f75;
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    p {
      line-height: 3px;
    }
    .user {
      color: #686f75;
    }
    .prof:hover {
      background-color: #344350;
      cursor: pointer;
    }
    button {
      height: 40px;
      width: 70px;
      font-size: 15px;
      border-radius: 30px;
    }
    .button {
    }
  `;

  return (
    <Container>
      <div className="prof col-lg-12 ">
        <div className=" ml-2 row ">
          <img className="mt-3 " alt={alt} src={img} />
          <div className="text mt-4 ml-2 ">
            <p>
              <b>{name}</b>
            </p>
            <p className="user">
              <small>@{user}</small>
            </p>
          </div>
          <div className="button">
            <button class=" btn btn-outline-primary p-2 mt-3 ml-4">
              Seguir
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Suggestions;
