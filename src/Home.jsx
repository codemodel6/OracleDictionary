import React from "react";
import styled from "styled-components";
import oracle from "../src/image/oracle.png";

const HomeWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  border-radius: 50px;

  .textWrapper {
    color: white;
    text-align: center;
  }

  .redSpan {
    color: red;
  }
  .whiteSpan {
    color: white;
  }
  .imageDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    img {
      width: 300px;
      height: 300px;
      border-radius: 20px;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className="textWrapper">
        {"WELCOME TO THE\n"}
        <span className="redSpan">ORACLE </span>
        {"DATABASE\n DICTIONARY"}
      </div>
      <div className="imageDiv">
        <img src={oracle} alt="오라클 이미지"></img>
      </div>
    </HomeWrapper>
  );
};

export default Home;
