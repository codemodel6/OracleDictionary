import styled from "styled-components";

export const ContentsWrapper = styled.div`
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
    margin-bottom: 20px;
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
      margin-bottom: 60px;
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
