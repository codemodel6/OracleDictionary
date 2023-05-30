const data10 = [
  {
    Name: "SYS_CONNECT_BY_PATH",
    Explanation:
      "오라클에서 계층적인 데이터를 쿼리할 때 사용되는 함수입니다. 이 함수는 CONNECT BY 절과 함께 사용되며, 현재 노드를 루트부터 해당 노드까지의 경로로 반환합니다.",
    Query: "SYS_CONNECT_BY_PATH(column, separator)",
    Details:
      "column은 현재 노드의 값을 나타내는 열이며, separator는 경로의 요소를 구분할 문자열입니다. SYS_CONNECT_BY_PATH 함수는 현재 노드의 값과 해당 노드까지의 경로를 구분자로 연결한 문자열을 반환합니다.",
    EXQuery:
      "SELECT EMPLOYEE_ID, EMPLOYEE_NAME, SYS_CONNECT_BY_PATH(EMPLOYEE_NAME, '/') AS PATH\nFROM EMPLOYEE\nSTART WITH MANAGER_ID IS NULL\nCONNECT BY PRIOR EMPLOYEE_ID = MANAGER_ID;",
    EXExplanation:
      "EMPLOYEE 테이블을 계층적으로 조회하면서 각 노드의 경로를 " /
      " 구분자로 연결한 문자열을 반환합니다.",
  },
];

export default data10;
