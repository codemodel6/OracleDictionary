const oracledb = require("oracledb");

async function connectToOracle(DATA) {
  return new Promise(async (resolve, reject) => {
    try {
      // Oracle 데이터베이스에 연결
      const connection = await oracledb.getConnection({
        user: "DIC",
        password: "1234",
        connectString: "XE",
      });

      // 연결 성공시 작업 실행
      // 테이블 조회 쿼리 실행 - NAME컬럼을 기준으로 3번째부터 4번째 까지 가저옴
      // 이후 4번째가 '.' 일 수도 있으니 REPLACE로 제거 후 NUMBER로 변환
      const result = await connection.execute(`
      SELECT * FROM ${DATA} ORDER BY
      TO_NUMBER(REPLACE(SUBSTR(NAME, 3, 2),'.',''))
      `);

      // 객체 key, value 타입으로 변경
      const objResult = result.rows.map((it) => {
        const objRow = {};
        result.metaData.forEach((now, idx) => {
          objRow[now.name] = it[idx];
        });
        return objRow;
      });

      console.log(objResult);
      // 연결 종료
      await connection.close();

      resolve(objResult); // 성공적으로 결과를 반환합니다.
    } catch (error) {
      // 오류 처리
      console.error("오류 발생:", error);
      reject(error); // 오류를 전달합니다.
    }
  });
}

module.exports = connectToOracle;
