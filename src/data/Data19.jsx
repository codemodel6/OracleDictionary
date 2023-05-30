const data19 = [
  {
    Name: "SYS_EXTRACT_UTC",
    Explanation:
      "주어진 타임스탬프(날짜와 시간) 값을 협정 세계시(UTC, Coordinated Universal Time)로 변환하여 반환합니다.",
    Query: "SYS_EXTRACT_UTC(timestamp_value)",
    Details: "timestamp_value는 변환하고자 하는 타임스탬프 값입니다.",
    EXQuery:
      "SELECT SYS_EXTRACT_UTC(SYSTIMESTAMP) AS utc_timestamp\nFROM DUAL;",
    EXExplanation:
      "SYSTIMESTAMP 함수를 사용하여 현재 타임스탬프를 가져온 다음, SYS_EXTRACT_UTC 함수를 사용하여 해당 타임스탬프를 협정 세계시(UTC)로 변환하여 출력합니다.",
  },
  {
    Name: "UPDATEXML",
    Explanation: "XML 데이터를 업데이트하는 함수입니다.",
    Query: "UPDATEXML(xml_data, xpath_expression, new_value)",
    Details:
      "xml_data는 업데이트할 XML 데이터입니다.\nxpath_expression은 업데이트할 XML 노드를 지정하는 XPath 표현식입니다.\nnew_value는 새로운 값을 나타내는 XML 데이터입니다.",
    EXQuery:
      "SELECT UPDATEXML(xml_data, '/root/element', 'New Value') AS updated_xml\nFROM my_table;",
    EXExplanation:
      "my_table 테이블에서 xml_data 열의 XML 데이터를 조회합니다. ",
  },
];

export default data19;
