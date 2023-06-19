const oracledb = require("oracledb");

async function oraclePost(Query) {
  return new Promise(async (resolve, reject) => {
    try {
      // Oracle 데이터베이스에 연결
      const connection = await oracledb.getConnection({
        user: "DIC",
        password: "1234",
        connectString: "XE",
      });

      // 연결 성공시 작업 실행
      // INSERT문 실행
      await connection.execute(Query);

      // 커밋
      await connection.commit();

      // 테이블 조회 쿼리 실행
      const result = await connection.execute("SELECT * FROM DATA19");

      // 객체 key, value 타입으로 변경
      const objResult = result.rows.map((it) => {
        const objRow = {};
        result.metaData.forEach((now, idx) => {
          // key값의 첫글자를 대문자로 변경
          keyNow =
            now.name.charAt(0).toUpperCase() + now.name.slice(1).toLowerCase();
          // 특정값 예외처리
          if (keyNow === "Exquery") {
            keyNow = "EXQuery";
          }
          if (keyNow === "Exexplanation") {
            keyNow = "EXExplanation";
          }
          objRow[keyNow] = it[idx];
        });
        return objRow;
      });

      // 연결 종료
      await connection.close();

      console.log("objResult : ", objResult);
      resolve(objResult); // 성공적으로 결과를 반환합니다.
    } catch (error) {
      // 오류 처리
      console.error("오류 발생:", error);
      reject(error); // 오류를 전달합니다.
    }
  });
}

module.exports = oraclePost;
