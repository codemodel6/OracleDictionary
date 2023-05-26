import React from "react";
import data2 from "../data/Data2";
import styled from "styled-components";

const ContentsWrapper = styled.div`
  background-color: purple;

  .QueryWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Query {
      background-color: black;
      text-align: center;
      padding-top: 10px;
      height: 50px;
      width: 500px;
      font-weight: 600;
      font-size: 20px;
      color: white;
      margin-bottom: 10px;
    }

    .ExQuery {
      background-color: black;
      text-align: center;
      padding-top: 10px;
      height: 50px;
      width: 1000px;
      font-weight: 600;
      font-size: 20px;
      color: white;
      margin-bottom: 10px;
    }
  }

  .title {
    background-color: green;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .sutTitle {
    background-color: yellow;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .name {
    background-color: red;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .Explanation {
    background-color: orange;
    font-size: 20px;
    margin-bottom: 30px;
  }

  .QurryExplanation {
    background-color: blue;
    font-size: 20px;
    margin-bottom: 100px;
  }

  .ImageDiv {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 80px;

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
`;

const category2 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"2. 수차함수"}</div>
      {data2.map((it, idx) => (
        <div key={idx}>
          <div className="name">{it.Name}</div>
          <div className="Explanation">{it.Explanation}</div>
          <div className="sutTitle">Query</div>
          <div className="QueryWrapper">
            <div className="Query">{it.Query}</div>
          </div>

          <div className="QurryExplanation">{it.Details}</div>
          <div className="sutTitle">예시</div>
          <div className="QueryWrapper">
            <div className="ExQuery">{it.EXQuery}</div>
          </div>

          <div className="Explanation">{it.EXExplanation}</div>
          <div>
            <div className="ImageDiv">
              <img className="ExImage" src={it.image} alt="준비중.."></img>
            </div>
          </div>
        </div>
      ))}
    </ContentsWrapper>
  );
};

export default category2;
