const express = require("express");
const cors = require("cors");
const app = express();
const connectToOracle = require("./data/oracleData");

// CORS 설정
app.use(cors());

app.get("/1", async (req, res) => {
  try {
    // NAME컬럼을 기준으로 3번째부터 4번째 까지 가저옴
    // 이후 4번째가 '.' 일 수도 있으니 REPLACE로 제거 후 NUMBER로 변환
    const Query =
      "SELECT * FROM DATA1 ORDER BY TO_NUMBER(REPLACE(SUBSTR(NAME, 3, 2),'.',''))";
    const data1 = await connectToOracle(Query);
    res.send(data1);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 조회 오류");
  }
});

app.get("/19", async (req, res) => {
  try {
    const Query = "SELECT * FROM DATA19";
    const data19 = await connectToOracle(Query);
    res.send(data19);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 조회 오류");
  }
});

// 서버 시작
app.listen(5000, () => {
  console.log("서버가 http://localhost:5000 에서 실행 중입니다.");
});
