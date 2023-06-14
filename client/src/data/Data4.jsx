import four1 from "../../src/image/4/4-1.png";
import four2 from "../../src/image/4/4-2.png";
import four3 from "../../src/image/4/4-3.png";
import four4 from "../../src/image/4/4-4.png";

let data4 = [
  {
    Name: "4-1. ASCII",
    Explanation: "주어진 문자의 ASCII 코드 값을 반환하는 함수입니다",
    Query: "ASCII(character)",
    Details:
      "character는 ASCII 코드 값을 확인하고자 하는 단일 문자 또는 문자열의 첫 번째 문자입니다. ASCII 코드 값을 확인하려는 문자는 따옴표로 묶어서 전달해야 합니다.",
    EXQuery: "SELECT ASCII('A') AS AsciiValue FROM DUAL;",
    EXExplanation: "A'의 ASCII 코드 값인 65가 'AsciiValue' 컬럼에 출력됩니다.",
    image: four1,
  },
  {
    Name: "4-2. INSTR",
    Explanation:
      " 주어진 문자열에서 특정 부분 문자열이 처음으로 등장하는 위치를 반환하는 함수입니다.",
    Query: "INSTR(string, substring, start_position, occurrence)",
    Details:
      "string: 검색 대상이 되는 원본 문자열\nsubstring: 검색하고자 하는 부분 문자열\nstart_position (선택적): 검색을 시작할 위치. 기본값은 1입니다.\noccurrence (선택적): 검색할 특정 등장 횟수. 기본값은 1입니다.",
    EXQuery: "SELECT INSTR('Hello, World!', 'World') AS Position FROM DUAL;",
    EXExplanation:
      "World'는 문자열 'Hello, World!'에 8번째 위치에 등장하므로 'Position' 컬럼에 8이 출력됩니다.",
    image: four2,
  },
  {
    Name: "4-3. LENGTH",
    Explanation: "주어진 문자열의 길이를 반환하는 함수입니다.",
    Query: "LENGTH(string)",
    Details:
      "LENGTH 함수는 문자열에 포함된 문자의 개수를 반환합니다. 공백과 같은 비표시 문자도 포함하여 길이를 계산합니다.",
    EXQuery: "SELECT LENGTH('Hello, World!') AS StringLength FROM DUAL;",
    EXExplanation:
      "문자열 'Hello, World!'는 13개의 문자로 이루어져 있으므로 'StringLength' 컬럼에 13이 출력됩니다.",
    image: four3,
  },
  {
    Name: "4-4. REGEXP_INSTR",
    Explanation:
      "정규 표현식 패턴과 일치하는 부분 문자열이 처음으로 등장하는 위치를 반환하는 함수입니다",
    Query:
      "REGEXP_INSTR(string, pattern, start_position, occurrence, match_param)",
    Details:
      "string: 검색 대상이 되는 원본 문자열\npattern: 검색하고자 하는 정규 표현식 패턴\nstart_position (선택적): 검색을 시작할 위치. 기본값은 1입니다.\noccurrence (선택적): 검색할 특정 등장 횟수. 기본값은 1입니다.\nmatch_param (선택적): 패턴 일치에 대한 옵션. 기본값은 'c'로 대소문자를 구분합니다.",
    EXQuery:
      "SELECT REGEXP_INSTR('Hello, World!', 'Ww+') AS Position FROM DUAL;",
    EXExplanation:
      " 'Ww+'는 문자열 'Hello, World!'에 'World'라는 부분 문자열과 일치하므로 'Position' 컬럼에 8이 출력됩니다.",
    image: four4,
  },
];

export default data4;
