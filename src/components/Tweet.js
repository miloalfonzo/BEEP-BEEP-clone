import React from "react";
import styled from "styled-components";

function Tweet({ img, name, user, tweet }) {
  const Container = styled.div`
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    p {
      line-height: 10px;
    }
    i {
      color: #686f75;
      font-size: 20px;
    }
    .icons {
      display: flex;
      justify-content: space-around;
    }
    .line {
      border-bottom: 1px solid #686f75;
    }
    small {
      color: #686f75;
    }
    // .fa-chevron-down {
    //   margin-left: 25vw;
    // }
  `;

  return (
    <Container>
      <div className="container">
        <div className="row tmb-2">
          <img className="mt-3 ml-3" src={img} />
          <div className="text ml-3 mt-3">
            <p>
              <b> {name} </b> <small>@{user}</small>
            </p>
            <p>{tweet}</p>
          </div>
          {/* <i className=" mt-3 fas fa-chevron-down"></i> */}
        </div>
        <div className="row icons mb-3">
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-share-square"></i>
        </div>
        <div className="row line"></div>
      </div>
    </Container>
  );
}

export default Tweet;
