const express = require("express");
const app = express();
const connectToOracle = require("./data/oracleData");

// /1 경로에 대한 처리
app.get("/1", async (req, res) => {
  try {
    const DATA = "DATA1";
    const data1 = await connectToOracle(DATA);
    res.send(data1);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 조회 오류");
  }
});

// /qwe 경로에 대한 처리
app.get("/2", (req, res) => {
  // 다른 코드 실행
  res.send("Welcome to /qwe!");
});

// 서버 시작
app.listen(3000, () => {
  console.log("서버가 http://localhost:3000 에서 실행 중입니다.");
});
