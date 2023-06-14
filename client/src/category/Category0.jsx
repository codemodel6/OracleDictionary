import React from "react";

import styled from "styled-components";
import { data001, data002, data003 } from "../data/Data0";

const HomeStyle = styled.div`
  .title {
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 10px;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .QueryWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .Query {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      height: 50px;
      width: 800px;
      font-weight: 600;
      font-size: 20px;
      color: white;
      margin-bottom: 10px;
      border-radius: 10px;
    }

    .ExQuery {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;

      justify-content: center;
      height: 50px;
      width: 1000px;
      height: 100px;
      font-weight: 600;
      font-size: 20px;
      color: white;
      margin-bottom: 10px;
      border-radius: 10px;
    }
  }

  .name {
    background-color: black;
    color: white;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 15px;
  }

  .contentWrapper {
    background-color: white;
    border: 2px solid #e2e2e2;
    border-radius: 20px;
    margin-bottom: 130px;
    padding: 10px;

    .sutTitle {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 30px;
      border: 2px solid black;
      display: inline-block;
      color: black;
      padding: 8px;
      border-radius: 10px;
    }

    .Explanation {
      font-size: 20px;
      margin-bottom: 30px;
    }

    .QurryExplanation {
      font-size: 20px;
      margin-bottom: 120px;
    }

    .ImageDiv {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 30px;

      .ExImage {
        width: 200px;
        height: 100px;
        background-color: skyblue;
        font-size: 30px;
        font-weight: 700;
        color: white;
        text-align: center;
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <div className="title">0. SQL문</div>
      <div className="name">DDL - [ CREATE, ALTER, DROP ]</div>
      <div className="contentWrapper">
        {data001.map((it, idx) => (
          <div key={idx}>
            <div className="sutTitle">{it.Name}</div>
            <div className="QueryWrapper">
              <div className="Query">{it.Query}</div>
            </div>
            <div className="QurryExplanation">{it.Explanation}.</div>
          </div>
        ))}
      </div>
      <div className="name">DML - [ SELECT, INSERT, DELETE, UPDATE ]</div>
      <div className="contentWrapper">
        {data002.map((it, idx) => (
          <div key={idx}>
            <div className="sutTitle">{it.Name}</div>
            <div className="QueryWrapper">
              <div className="Query">{it.Query}</div>
            </div>
            <div className="QurryExplanation">{it.Explanation}.</div>
          </div>
        ))}
      </div>
      <div className="name">DCL - [ GRANT, REVOKE, COMMIT, ROLLBACK ]</div>
      <div className="contentWrapper">
        {data003.map((it, idx) => (
          <div key={idx}>
            <div className="sutTitle">{it.Name}</div>
            <div className="QueryWrapper">
              <div className="Query">{it.Query}</div>
            </div>
            <div className="QurryExplanation">{it.Explanation}.</div>
          </div>
        ))}
      </div>
    </HomeStyle>
  );
};

export default Home;
