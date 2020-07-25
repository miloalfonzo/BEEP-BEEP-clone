import React from "react";
import styled from "styled-components";

function Trends({ trendType, trendTitle, cant }) {
  const Container = styled.div`
    .trends {
      background: #1f3040;
      // user-select: none;
      .content {
        border-bottom: 1px solid #686f75;
      }
    }
    p {
      line-height: 5px;
    }
    small {
      color: #a59f9f;
    }
    .trends:hover {
      background-color: #344350;
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <div className="trends">
        <div class="content pl-3 pb-2">
          <p className=" pt-3 ">
            <small>{trendType}</small>
          </p>
          <p>
            <b>{trendTitle}</b>
          </p>
          <p>
            <small>{cant}</small>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Trends;
