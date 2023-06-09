const express = require("express");
const cors = require("cors");
const app = express();
const connectToOracle = require("./data/oracleData");
const oraclePost = require("./data/oraclePost");
const oracleDelete = require("./data/oracleDelete");

// CORS 설정
app.use(cors());

// Client에서 값을 가져오기 위해 Body를 가져올 수 있는 express.json 사용
app.use(express.json());

// DATA1 TABLE에 관한 get 요청
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

// DATA19 TABLE에 관한 get 요청
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

// post 요청
app.post("/post/:id", async (req, res) => {
  try {
    // 요청 주소의 :id값을 가져옴
    const postId = req.params.id;

    const { Name, Explanation, Query, Details, EXQuery, EXExplanation } =
      req.body;

    const insertQuery = `INSERT INTO DATA${postId} (NAME, EXPLANATION, QUERY, DETAILS, EXQuery, EXExplanation) VALUES ('${Name}','${Explanation}','${Query}','${Details}','${EXQuery}','${EXExplanation}')`;
    const postResult = await oraclePost(insertQuery);
    res.send(postResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 추가 오류");
  }
});

// delete 요청
app.delete("/delete/:id", async (req, res) => {
  try {
    let deleteId = req.params.id;
    console.log(deleteId);
    console.log("body : ", req.body);
    const deleteQuery = `DELETE FROM DATA${deleteId} WHERE NAME = '${req.body.Name}'`;
    const deleteResult = await oracleDelete(deleteQuery);
    res.send(deleteResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 삭제 오류");
  }
});

// patch 요청
app.patch("/patch/:id", async (req, res) => {
  try {
    let patchId = req.params.id;
    const { Name, Explanation, Query, Details, EXQuery, EXExplanation } =
      req.body;
    console.log(Name, Explanation, Query, Details, EXQuery, EXExplanation);
    const postQuery = `UPDATE DATA${patchId} SET EXPLANATION = '${Explanation}', QUERY = '${Query}', DETAILS = '${Details}', EXQuery = '${EXQuery}', EXExplanation = '${EXExplanation}' WHERE NAME = '${Name}'`;
    console.log(postQuery);
    const postResult = await oraclePost(postQuery);
    res.send(postResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 수정 오류");
  }
});

// 서버 시작
app.listen(5000, () => {
  console.log("서버가 http://localhost:5000 에서 실행 중입니다.");
});
