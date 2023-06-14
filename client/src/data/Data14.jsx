const data14 = [
  {
    Name: "SYS_CONTEXT",
    Explanation:
      "현재 세션의 컨텍스트 값을 반환하는 함수입니다. 컨텍스트는 사용자나 세션에 대한 추가 정보를 저장하고 조회할 수 있는 시스템 레벨의 구성 요소입니다.",
    Query: "SYS_CONTEXT(namespace, parameter)",
    Details:
      "namespace는 컨텍스트의 네임스페이스(namespace)입니다. 네임스페이스는 컨텍스트를 분류하고 구분하는 역할을 합니다.\nparameter는 조회할 컨텍스트의 파라미터(parameter)입니다. 파라미터는 네임스페이스 내에서 유니크해야 합니다.",
    EXQuery:
      "SELECT SYS_CONTEXT('USERENV', 'SESSION_USER') AS session_user\nFROM DUAL;",
    EXExplanation:
      "USERENV 네임스페이스에서 SESSION_USER 파라미터를 조회하여 현재 세션의 사용자 이름을 반환합니다.",
  },
  {
    Name: "SYS_GUID",
    Explanation:
      "유니크한 글로벌 식별자(Globally Unique Identifier, GUID)를 생성하는 함수입니다",
    Query: "SYS_GUID()",
    Details:
      "호출될 때마다 새로운 GUID 값을 생성하여 반환합니다. 반환되는 값은 RAW 데이터 형식으로 표시됩니다.",
    EXQuery: "SELECT SYS_GUID() AS guid\nFROM DUAL;",
    EXExplanation:
      "SYS_GUID 함수를 호출하여 새로운 GUID 값을 생성하고, 해당 값을 반환합니다.",
  },
  {
    Name: "SYS_TYPEID",
    Explanation:
      "사용자 정의 타입(User-Defined Type)의 식별자를 반환하는 함수입니다",
    Query: "SYS_TYPEID(expression)",
    Details: "expression은 사용자 정의 타입을 참조하는 표현식입니다.",
    EXQuery: "",
    EXExplanation: "",
  },
  {
    Name: "UID",
    Explanation:
      "현재 세션의 사용자 식별자(User Identifier)를 반환하는 시스템 변수입니다.",
    Query: "UID",
    Details: "UID",
    EXQuery: "SELECT UID AS session_user_id\nFROM DUAL;",
    EXExplanation: "UID 변수를 조회하여 현재 세션의 사용자 ID를 반환합니다.",
  },
  {
    Name: "USER",
    Explanation: "현재 세션의 사용자 이름을 반환하는 시스템 변수입니다. ",
    Query: "USER",
    Details: "USER",
    EXQuery: "SELECT USER AS session_user\nFROM DUAL;",
    EXExplanation: "USER 변수를 조회하여 현재 세션의 사용자 이름을 반환합니다.",
  },
  {
    Name: "USERENV",
    Explanation: "현재 세션의 환경 변수를 조회할 수 있는 시스템 영역입니다.",
    Query: "USERENV(string)",
    Details:
      "SESSION_USER: 현재 세션의 사용자 이름을 반환합니다.\nSESSIONID: 현재 세션의 고유한 식별자를 반환합니다.\nDB_NAME: 데이터베이스의 이름을 반환합니다.\nHOST: 데이터베이스에 접속한 클라이언트의 호스트 이름을 반환합니다.\nOS_USER: 클라이언트가 데이터베이스에 접속한 운영체제 사용자의 이름을 반환합니다.\nIP_ADDRESS: 클라이언트의 IP 주소를 반환합니다.",
    EXQuery:
      "SELECT USERENV('SESSION_USER') AS session_user,\nUSERENV('SESSIONID') AS session_id,\nUSERENV('DB_NAME') AS db_name,\nUSERENV('HOST') AS host,\nUSERENV('OS_USER') AS os_user,\nnUSERENV('IP_ADDRESS') AS ip_address\nFROM DUAL;",
    EXExplanation:
      "USERENV 함수를 사용하여 현재 세션의 사용자, 세션 ID, 데이터베이스 이름, 호스트, 운영체제 사용자, IP 주소를 조회합니다.",
  },
];

export default data14;
