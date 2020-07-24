import React from "react";
import styled from "styled-components";

function Search() {
  const Container = styled.div`
    * {
      background: none;
    }
    input {
      border: none;
    }
    .search {
      color: #8699a6;
      background-color: #344350;
      border-radius: 50px;
      padding: 8px;
      i {
        color: #8699a6;
      }
    }
    .search:hover {
      background-color: #18242e;
      border: 1px solid #1e7ac3;
      i {
        color: #1e7ac3;
      }
    }
  `;
  return (
    <Container>
      <div className="col-lg-11">
        <div className="search mt-2 mb-4 row">
          <div className="ml-3 input-group-addon">
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            className="ml-3"
            placeholder="Buscar en Twitter"
          ></input>
        </div>
      </div>
    </Container>
  );
}

export default Search;
