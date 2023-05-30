const data12 = [
  {
    Name: "DECODE",
    Explanation: "조건에 따라 값을 변환하는 함수입니다.",
    Query:
      "DECODE(expression, search1, result1, search2, result2, ..., default_result)",
    Details:
      "expression은 평가할 표현식이나 값입니다.\nsearch1, search2, ...은 조건에 해당하는 값들입니다.\nresult1, result2, ...은 조건에 해당하는 값일 때 반환될 결과 값들입니다.\ndefault_result는 모든 조건에 맞지 않을 경우 반환될 기본 결과 값입니다.",
    EXQuery:
      "SELECT DECODE(score,\n90, 'A',\n80, 'B',\n70, 'C',\n'F') AS grade\nFROM student_scores;",
    EXExplanation:
      "student_scores 테이블에서 성적을 가져와서 DECODE 함수를 사용하여 해당하는 학점을 반환합니다. 90 이상이면 'A', 80 이상이면 'B', 70 이상이면 'C', 그 외에는 'F'를 반환합니다.",
  },
  {
    Name: "DUMP",
    Explanation:
      "Oracle에서 데이터의 내부 표현을 확인하기 위해 사용되는 함수입니다",
    Query: "DUMP(expression [, format [, start_position [, length ]]])",
    Details:
      "expression은 분석할 데이터나 표현식입니다.\nformat은 옵션으로, 출력 형식을 지정합니다. 기본값은 10입니다.\nstart_position은 옵션으로, 분석을 시작할 위치를 지정합니다. 기본값은 1입니다.\nlength는 옵션으로, 분석할 데이터의 길이를 지정합니다. 기본값은 전체 데이터 길이입니다.",
    EXQuery: "SELECT DUMP('Hello') AS dump_result FROM dual;",
    EXExplanation:
      "문자열 'Hello'를 DUMP 함수에 적용하여 내부 표현을 확인합니다. 결과로 내부 표현이 문자열 형태로 반환됩니다.",
  },
  {
    Name: "ORA_HASH",
    Explanation: "해시 값을 생성하는 함수입니다.",
    Query: "ORA_HASH(expression [, seed ])",
    Details:
      "expression은 해시 값을 계산할 표현식이나 값입니다.\nseed는 옵션으로, 해시 함수의 시드 값을 지정합니다. 기본값은 0입니다.",
    EXQuery: "SELECT ORA_HASH('Hello') AS hash_value\nFROM dual;",
    EXExplanation:
      "문자열 'Hello'를 ORA_HASH 함수에 적용하여 해시 값을 계산합니다. 결과로 해시 값이 반환됩니다.",
  },
  {
    Name: "VSIZE",
    Explanation: "데이터 값의 크기를 바이트 단위로 반환하는 함수입니다. ",
    Query: "VSIZE(expression)",
    Details: "expression은 크기를 확인할 데이터 값이나 표현식입니다.",
    EXQuery: "SELECT VSIZE('Hello') AS size\nFROM dual;",
    EXExplanation:
      " 문자열 'Hello'를 VSIZE 함수에 적용하여 크기를 확인합니다. 결과로 문자열의 크기인 5가 반환됩니다.",
  },
];

export default data12;
