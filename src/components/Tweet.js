import React from "react";
import styled from "styled-components";

function Tweet({ img, name, user, tweet, alt }) {
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
      padding: 5px;
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
    .blue:hover {
      background-color: rgba(29, 161, 242, 0.1);
      border-radius: 50px;
      color: #1e7ac3;
    }
    .green:hover {
      background-color: rgb(11, 161, 151, 0.1);
      border-radius: 50px;
      color: rgb(23, 191, 99);
    }
    .red:hover {
      background-color: rgba(224, 36, 94, 0.1);
      border-radius: 50px;
      color: rgb(224, 36, 94);
    }
    // .cont:hover {
    //   background-color: rgb(25, 39, 52);
    // }
  `;

  return (
    <Container>
      <div className="cont ">
        <div className="row mb-2">
          <img className="mt-3 ml-3" alt={alt} src={img} />
          <div className="text ml-3 mt-3">
            <p>
              <b> {name} </b> <small>@{user}</small>
            </p>
            <p>{tweet}</p>
          </div>
          {/* <i className=" mt-3 fas fa-chevron-down"></i> */}
        </div>
        <div className="row icons mb-3">
          <i className="blue far fa-comment"></i>
          <i className="green fas fa-retweet"></i>
          <i className="red far fa-heart"></i>
          <i className="blue far fa-share-square"></i>
        </div>
        <div className="row line"></div>
      </div>
    </Container>
  );
}

export default Tweet;
