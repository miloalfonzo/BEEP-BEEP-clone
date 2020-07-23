import React from "react";
import styled from "styled-components";

function Profile() {
  const Contenedor = styled.div`
    .prof {
      padding-left: 15px;
      padding-bottom: 5px;
      width: 250px;
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
      background-color: rgba(29, 161, 242, 0.1);
      border-radius: 50px;
    }
    i {
      font-size: 20px;
    }
  `;

  return (
    <Contenedor>
      <div className="prof row ml-1 mt-2">
        <img
          className="mt-3"
          src="https://i.pinimg.com/564x/be/9c/57/be9c578526eecff0d4a171b2f8ce27c7.jpg"
        />
        <div className="text mt-4 ml-2">
          <p>
            <b>Edward Elric </b>
          </p>
          <p className="user">
            <small>@reallytallguy</small>
          </p>
        </div>
        <i className="ml-5 mt-4 fas fa-chevron-down"></i>
      </div>
    </Contenedor>
  );
}

export default Profile;
