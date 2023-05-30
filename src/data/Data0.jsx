export const data001 = [
  {
    Name: "CREATE – 생성",
    Query: "CREATE [객체종류] [이름]",
    Explanation: "객체 종류를 지정한 이름으로 생성한다.",
  },
  {
    Name: "ALTER – 변경",
    Query: "ALTER [객체종류] [객체이름] [수정내용]",
    Explanation: "객체이름의 객체종류를 수정내용으로 수정한다",
  },
  {
    Name: "DROP – 제거",
    Query: "DROP [객체종류] [객체이름]",
    Explanation: "객체종류의 객체이름을 제거한다",
  },
];

export const data002 = [
  {
    Name: "SELECT – 조회",
    Query:
      "SELECT [데이터 속성] FROM [테이블] WHERE [조건식] GROUP BY [열]\nHAVING [조건식] ORDER BY [열] [ASC|DESC];",
    Explanation:
      "데이터의 속성을 테이블에서 검색한다. \n\nWHREE의 조건식은 특정한 조건을 적는다. EX) Price >= 5000\n\nGROUP BY는 특정 열을 기준으로 그룹화한다. HAVING은 그룹화된 결과의 조건식을 주어서 특정 그룹만 선택할 수 있게 한다.\n\nODER BY는 기준이 될 열을 선택한다 이후 ASC(오름차순) DESC(내림차순) 으로 정렬한다.",
  },
  {
    Name: "INSERT – 테이블에 추가",
    Query: "INSERT INTO [테이블] ([조건1], [조건2]) VALUES ([값1], [값2]);",
    Explanation:
      "테이블 이름을 정한 후 테이블의 컬럼인 조건을 적은 후 VALUES 뒤에 넣어줄 값인 튜플의 내용을 적어준다.",
  },
  {
    Name: "DELETE – 삭제",
    Query: "DELETE FROM [테이블] WHERE [조건식];",
    Explanation:
      "삭제하고 싶은 데이터가 있는 테이블을 적고 조건에 맞는 튜플을 삭제한다.",
  },
  {
    Name: "UPDATE – 수정",
    Query: "UPDATE [테이블] SET [컬럼] = [값] WHERE [조건식];",
    Explanation:
      "수정하고 싶은 테이블을 선택하고 설정할 컬럼과 값을 적는다. 이후 조건식을 적어 조건에 맞는 튜플을 바꾼다.",
  },
];

export const data003 = [
  {
    Name: "GRANT – 권한 부여",
    Query: "GRANT [권한] ON [객체] TO [사용자];",
    Explanation:
      "권한을 부여할 객체(테이블,뷰 등)를 고른 후 권한을 받을 사용자를 적는다,",
  },
  {
    Name: "REVOKE – 권한 회수",
    Query: "REVOKE [권한] ON [객체] FROM [사용자];",
    Explanation: "부여했던 권한을 취소할 객체를 고른 후 사용자를 적는다.",
  },
  {
    Name: "COMMIT",
    Query: "COMMIT",
    Explanation:
      "데이터베이스에서 수행한 변경 작업을 영구적으로 저장한다. 이후 트랜잭션을 종료한다.",
  },
  {
    Name: "ROLLBACK ",
    Query: "ROLLBACK ",
    Explanation:
      "트랜잭션에서 이전에 수행한 변경 작업을 취소하고 이전 상태로 되돌리는 데 사용한다.",
  },
];
