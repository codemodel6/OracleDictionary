const oracledb = require("oracledb");

async function connectToOracle() {
  try {
    // Oracle 데이터베이스에 연결
    const connection = await oracledb.getConnection({
      user: "rudqq",
      password: "1234",
      connectString: "XE",
    });

    // 연결 성공 시 작업 수행
    console.log("연결성공");

    // 테이블 조회 쿼리 실행
    const result = await connection.execute(`
        SELECT table_name
        FROM all_tables
        WHERE owner = 'ETL_ADMIN'
      `);

    // 조회 결과 출력
    console.log("테이블 목록:");
    for (const row of result.rows) {
      console.log(row[0]);
    }

    // 연결 종료
    await connection.close();
  } catch (error) {
    // 오류 처리
    console.error("오류 발생:", error);
  }
}

// 연결 함수 호출
connectToOracle();
