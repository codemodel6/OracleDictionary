import React from "react";
import styled from "styled-components";
import oracle from "../src/image/oracle.png";

const HomeWrapper = styled.div`
  background-color: black;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 90px;
  border-radius: 50px;
  height: 1000px;
  margin-bottom: 100px;

  .textWrapper {
    color: white;
    text-align: center;
    margin-bottom: 100px;
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
      animation: ball 1s ease-in Infinite Alternate;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className="textWrapper">
        WELCOME TO THE
        <br />
        <span className="redSpan">ORACLE </span>
        DATABASE
        <br />
        DICTIONARY
      </div>
      <div className="ball"></div>
      <div className="imageDiv">
        <img src={oracle} alt="오라클 이미지"></img>
      </div>
    </HomeWrapper>
  );
};

export default Home;
