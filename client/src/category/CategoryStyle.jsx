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

export const AddDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;

  .addButton {
    text-align: center;
    width: 400px;
    height: 80px;
    background-color: black;
    cursor: pointer;
    font-size: 30px;
    font-weight: 800;
    color: red;
    border-radius: 20px;
  }

  .addTextDiv {
    width: 1000px;
    background-color: black;
    border-radius: 20px;
    padding: 10px;

    .textContent {
      font-size: 20px;
      color: white;
      margin-bottom: 10px;
    }
    .addText {
      width: 100%;
      height: 60px;
      background-color: white;
      border: none;
      resize: none;
      font-size: 17px;
      font-weight: 500;
      color: black;
      border-radius: 20px;
      padding: 10px;
      margin-bottom: 5px;
    }
    .addText::placeholder {
      font-size: 17px;
    }
  }

  .completeDiv {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;

    .addComplete {
      text-align: center;
      width: 200px;
      height: 45px;
      background-color: white;
      border: none;
      cursor: pointer;
      font-size: 20px;
      font-weight: 800;
      color: black;
      border-radius: 10px;
    }
    .addComplete:hover {
      background-color: black;
      color: red;
      border: 2px solid white;
    }
  }
`;
