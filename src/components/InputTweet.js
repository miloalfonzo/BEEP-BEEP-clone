import React from "react";
import styled from "styled-components";

function InputTweet() {
  const Container = styled.div`
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    input {
      height: 40px;
      color: gray;
      background-color: #18242e;
      width: 39vw;
      border: none;
      font-size: 20px;
    }
    button {
      font-weight: bold;
      background: #31a1e1;
      border-radius: 50px;
      width: 100px;
      margin-left: 20vw;
    }
    i {
      color: #1e7ac3;
      font-size: 20px;
      padding: 5px;
      margin-right: 10px;
    }
    i:hover {
      background-color: rgba(29, 161, 242, 0.1);
      border-radius: 50%;
    }
    .space {
      height: 1.5vh;
      background-color: #344350;
    }
  `;

  return (
    <Container>
      <div className="">
        <form>
          <div className="row">
            <img
              className="mt-3 ml-3"
              src="https://i.pinimg.com/564x/be/9c/57/be9c578526eecff0d4a171b2f8ce27c7.jpg"
            />

            <input
              type="text"
              className="mt-4 ml-3"
              minLength="1"
              maxLength="256"
              required
              placeholder="¿Qué esta pasando?"
            />
          </div>
          <div className="row row2 mt-3 mb-3">
            <div className="ml-5 icons">
              <i className="far fa-image"></i>
              <i className="fas fa-video"></i>
              <i className="fas fa-chart-bar"></i>
              <i className="far fa-smile"></i>
              <i className="far fa-calendar-alt"></i>
              <button className="btn btn-primary p-2 ">Twittear</button>
            </div>
          </div>
          <div className="row space"></div>
        </form>
      </div>
    </Container>
  );
}

export default InputTweet;
