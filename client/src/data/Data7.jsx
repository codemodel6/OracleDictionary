import seven1 from "../../src/image/7/7-1.png";
import seven2 from "../../src/image/7/7-2.png";
import seven3 from "../../src/image/7/7-3.png";
import seven4 from "../../src/image/7/7-4.png";
import seven5 from "../../src/image/7/7-5.png";
import seven6 from "../../src/image/7/7-6.png";
import seven7 from "../../src/image/7/7-7.png";
import seven8 from "../../src/image/7/7-8.png";
import seven9 from "../../src/image/7/7-9.png";
import seven12 from "../../src/image/7/7-12.png";
import seven13 from "../../src/image/7/7-13.png";
import seven14 from "../../src/image/7/7-14.png";
import seven15 from "../../src/image/7/7-15.png";
import seven16 from "../../src/image/7/7-16.png";
import seven17 from "../../src/image/7/7-17.png";
import seven18 from "../../src/image/7/7-18.png";
import seven19 from "../../src/image/7/7-19.png";
import seven21 from "../../src/image/7/7-21.png";
import seven22 from "../../src/image/7/7-22.png";
import seven23 from "../../src/image/7/7-23.png";
import seven24 from "../../src/image/7/7-24.png";
import seven25 from "../../src/image/7/7-25.png";
import seven26 from "../../src/image/7/7-26.png";
import seven27 from "../../src/image/7/7-27.png";
import seven28 from "../../src/image/7/7-28.png";
import seven29 from "../../src/image/7/7-29.png";
import seven30 from "../../src/image/7/7-30.png";
import seven31 from "../../src/image/7/7-31.png";

let data7 = [
  {
    Name: "ASCIISTR",
    Explanation:
      "주어진 문자열을 ASCII 문자로 변환하여 반환하는 Oracle의 함수입니다. 이 함수는 문자열을 ASCII 문자로 변환하고, 이스케이프된 ASCII 문자열 형식으로 반환합니다.",
    Query: "ASCIISTR(string)",
    Details:
      "string은 ASCII 문자로 변환할 대상 문자열을 나타냅니다.\nASCIISTR 함수는 주어진 문자열을 ASCII 문자로 변환하여 반환합니다. 반환되는 값은 이스케이프된 ASCII 문자열 형식으로 되어 있습니다. 이는 데이터베이스에서 문자열을 저장할 때 특수 문자를 이스케이프(escape)하여 저장하는데 사용되는 형식입니다.",
    EXQuery: "SELECT ASCIISTR('Hello World') AS ConvertedString FROM DUAL;",
    EXExplanation:
      "'Hello World' 문자열을 ASCII 문자로 변환하여 반환합니다. 반환된 값은 이스케이프된 ASCII 문자열 형식.",
    image: seven1,
  },
  {
    Name: "CAST",
    Explanation:
      "데이터 타입을 변환하는 함수로, Oracle에서 사용할 수 있는 함수입니다. CAST 함수는 특정 값 또는 표현식을 다른 데이터 타입으로 변환하고자 할 때 사용됩니다.",
    Query: "CAST(expression AS data_type)",
    Details:
      "expression은 변환하고자 하는 값이나 표현식을 나타내며, data_type은 변환하고자 하는 데이터 타입을 나타냅니다.",
    EXQuery: "SELECT CAST('123' AS NUMBER) AS NumericValue FROM DUAL;",
    EXExplanation:
      "문자열 '123'을 NUMBER 데이터 타입으로 변환하여 NumericValue 컬럼으로 반환합니다.",
    image: seven2,
  },
  {
    Name: "CHARTOROWID",
    Explanation:
      "ROWID 값을 문자열로 변환하는 Oracle의 내장 함수입니다. ROWID는 데이터베이스 내에서 각 행을 식별하는 고유한 식별자입니다. CHARTOROWID 함수는 문자열 형태의 ROWID 값을 입력받아 해당하는 실제 ROWID 값으로 변환합니다.",
    Query: "CHARTOROWID(string)",
    Details:
      "string은 ROWID 값을 나타내는 문자열입니다. CHARTOROWID 함수는 문자열을 실제 ROWID 값으로 변환하여 반환합니다.",
    EXQuery:
      "SELECT CHARTOROWID('AAARioAAEAAAAV6AAA') AS RowIDValue FROM DUAL;",
    EXExplanation:
      "'AAARioAAEAAAAV6AAA'를 CHARTOROWID 함수를 사용하여 실제 ROWID 값으로 변환하고, RowIDValue 컬럼으로 반환합니다.",
    image: seven3,
  },
  {
    Name: "COMPOSE",
    Explanation:
      "Unicode 문자열을 정규화(Normalization)된 형태로 결합하는 Oracle의 내장 함수입니다. ",
    Query: "COMPOSE(string)",
    Details:
      "string은 정규화된 문자열을 생성할 Unicode 문자열입니다. COMPOSE 함수는 주어진 문자열을 정규화된 형태로 결합하여 반환합니다.",
    EXQuery: "SELECT COMPOSE('A' || CHR(778)) AS ComposedString FROM DUAL;",
    EXExplanation:
      "문자열 'A'와 문자 U+030A(Combining Ring Above)를 결합하여 정규화된 형태로 변환한 결과를 ComposedString 컬럼으로 반환합니다. 이 경우, 정규화된 문자열은 'Å'로 나타납니다.",
    image: seven4,
  },
  {
    Name: "HEXTORAW",
    Explanation: "16진수 문자열을 이진 RAW 형식으로 변환하는 함수입니다.",
    Query: "HEXTORAW(string)",
    Details: "string 문자열을 이진값으로 변환합니다.",
    EXQuery: "SELECT HEXTORAW('48656C6C6F') AS raw_value FROM DUAL;",
    EXExplanation:
      "48656C6C6F'라는 16진수 문자열을 HEXTORAW 함수를 사용하여 이진 RAW 형식으로 변환합니다. ",
    image: seven5,
  },
  {
    Name: "NUMTODSINTERVAL",
    Explanation:
      "숫자 값을 일정한 시간 간격으로 변환하는 Oracle 함수입니다. 이 함수를 사용하여 숫자 값을 일, 시간, 분, 초 등의 시간 단위로 변환할 수 있습니다.",
    Query: "NUMTODSINTERVAL(n, 'interval_unit')",
    Details:
      "n은 변환할 숫자 값이고, 'interval_unit'은 변환할 시간 단위를 지정하는 문자열입니다. 'interval_unit'에는 다양한 시간 단위가 사용될 수 있으며, 주요한 예시로는 'DAY', 'HOUR', 'MINUTE', 'SECOND' 등이 있습니다.",
    EXQuery:
      "SELECT NUMTODSINTERVAL(120, 'MINUTE') AS time_interval FROM DUAL;",
    EXExplanation:
      "120이라는 숫자 값을 'MINUTE' 시간 단위로 변환하여 결과로 반환합니다. 결과는 INTERVAL DAY TO SECOND 데이터 형식으로 출력됩니다.",
    image: seven6,
  },
  {
    Name: "NUMTOYMINTERVAL",
    Explanation: "숫자 값을 일정한 월 간격으로 변환하는 Oracle 함수입니다. ",
    Query: "NUMTOYMINTERVAL(n, 'interval_unit')",
    Details:
      "n은 변환할 숫자 값이고, 'interval_unit'은 변환할 월 단위를 지정하는 문자열입니다. 'interval_unit'에는 다양한 월 단위가 사용될 수 있으며, 주요한 예시로는 'YEAR', 'MONTH' 등이 있습니다.",
    EXQuery: "SELECT NUMTOYMINTERVAL(24, 'MONTH') AS time_interval FROM DUAL;",
    EXExplanation:
      "24라는 숫자 값을 'MONTH' 월 단위로 변환하여 결과로 반환합니다. 결과는 INTERVAL YEAR TO MONTH 데이터 형식으로 출력됩니다.",
    image: seven7,
  },
  {
    Name: "RAWTOHEX",
    Explanation:
      "RAW 데이터 타입의 값을 16진수 문자열로 변환하는 Oracle 함수입니다. ",
    Query: "RAWTOHEX(raw_data)",
    Details: "raw_data는 16진수로 표현할 RAW 값이나 BLOB 값입니다.",
    EXQuery: "SELECT RAWTOHEX(HEXTORAW('48656C6C6F')) AS hex_string FROM DUAL;",
    EXExplanation:
      "48656C6C6F'라는 16진수 문자열을 RAW 값으로 변환한 후, RAWTOHEX 함수를 사용하여 다시 16진수 문자열로 변환합니다. 결과는 '48656C6C6F'와 같은 16진수 문자열로 출력됩니다.",
    image: seven8,
  },
  {
    Name: "ROWIDTOCHAR",
    Explanation:
      "ROWID 값을 문자열 형태로 변환하는 데 사용됩니다.ROWID는 테이블 내에서 행을 식별하는 데 사용되는 고유한 식별자입니다. ",
    Query: "ROWIDTOCHAR(rowid_value)",
    Details:
      "owid_value는 ROWID 값을 나타내는 식입니다. 이 함수는 ROWID 값을 받아들여 해당 값을 문자열 형태로 반환합니다.",
    EXQuery: "SELECT ROWIDTOCHAR(ROWID) AS rowid_str FROM DUAL;",
    EXExplanation:
      "DUAL 테이블에서 ROWID 값을 조회하여 'ROWIDTOCHAR' 함수를 사용하여 해당 ROWID를 문자열 형태로 변환합니다. 변환된 문자열은 'rowid_str' 열에 반환됩니다.",
    image: seven9,
  },
  {
    Name: "SCN_TO_TIMESTAMP",
    Explanation:
      "시스템 변화 번호(System Change Number, SCN)를 타임스탬프로 변환하는 데 사용됩니다.",
    Query: "SCN_TO_TIMESTAMP(SCN)",
    Details:
      "SCN은 변환하려는 SCN 값입니다. SCN은 숫자 형식으로 제공되며, SCN_TO_TIMESTAMP 함수는 이를 해당 SCN에 해당하는 타임스탬프로 변환하여 반환합니다.",
    EXQuery: "SELECT SCN_TO_TIMESTAMP(1234567890) FROM DUAL;",
    EXExplanation: "SCN에 대한 타임스탬프 값입니다.",
    image: "",
  },
  {
    Name: "TIMESTAMP_TO_SCN",
    Explanation:
      "타임스탬프를 시스템 변화 번호(System Change Number, SCN)로 변환하는 데 사용됩니다. ",
    Query: "TIMESTAMP_TO_SCN(timestamp)",
    Details:
      "timestamp는 변환하려는 타임스탬프 값입니다. 타임스탬프는 DATE 형식이나 TIMESTAMP 형식으로 제공될 수 있습니다. TIMESTAMP_TO_SCN 함수는 해당 타임스탬프에 대한 SCN 값을 반환합니다.",
    EXQuery:
      "SELECT TIMESTAMP_TO_SCN(TIMESTAMP '2023-05-30 10:30:00') FROM DUAL;",
    EXExplanation: "타임스탬프에 대한 SCN 값입니다.",
    image: "",
  },
  {
    Name: "TO_BINARY_DOUBLE",
    Explanation:
      "숫자 값을 이진 부동 소수점(Binary Double) 형식으로 변환하는 데 사용됩니다.",
    Query: "TO_BINARY_DOUBLE(numeric_value)",
    Details:
      "numeric_value는 변환하려는 숫자 값입니다. 숫자 값은 NUMBER, INTEGER, FLOAT, 또는 다른 숫자 데이터 형식일 수 있습니다. TO_BINARY_DOUBLE 함수는 해당 숫자 값을 이진 부동 소수점 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_BINARY_DOUBLE(3.14159) FROM DUAL;",
    EXExplanation:
      " 숫자 값 3.14159를 이진 부동 소수점 형식으로 변환한 값입니다.",
    image: seven12,
  },
  {
    Name: "TO_BINARY_FLOAT",
    Explanation:
      "오라클에서 숫자 값을 이진 부동 소수점(Binary Float) 형식으로 변환하는 데 사용됩니다.",
    Query: "TO_BINARY_FLOAT(numeric_value)",
    Details:
      "numeric_value는 변환하려는 숫자 값입니다. 숫자 값은 NUMBER, INTEGER, FLOAT 등의 숫자 데이터 형식일 수 있습니다. TO_BINARY_FLOAT 함수는 해당 숫자 값을 이진 부동 소수점 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_BINARY_FLOAT(2.71828) FROM DUAL;",
    EXExplanation:
      "숫자 값 2.71828을 이진 부동 소수점 형식으로 변환한 값입니다.",
    image: seven13,
  },
  {
    Name: "CHAR (character)",
    Explanation:
      "문자(Character) 데이터를 저장하는 데이터 형식 중 하나입니다. CHAR 데이터 형식은 고정 길이의 문자열을 나타냅니다. CHAR 형식으로 저장된 문자열은 고정된 길이를 갖으며, 저장되는 값의 길이가 고정 길이보다 짧을 경우 공백으로 채워집니다.",
    Query: "CHAR(n)",
    Details:
      "n은 CHAR 필드의 길이를 나타내는 값입니다. n은 1 이상의 정수입니다. CHAR 형식으로 선언된 필드는 항상 고정된 길이 n으로 저장되며, 저장되는 값의 길이가 n보다 짧을 경우 공백으로 채워집니다.",
    EXQuery: "CREATE TABLE my_table (my_char_field CHAR(10));",
    EXExplanation:
      "my_char_field라는 CHAR 필드는 항상 10자리의 고정된 길이로 저장됩니다. 만약 이 필드에 'Hello'라는 값을 저장한다면, 나머지 5자리는 공백으로 채워져서 'Hello '로 저장됩니다.",
    image: seven14,
  },
  {
    Name: "TO_CHAR (datetime)",
    Explanation: "날짜 및 시간 데이터를 문자열로 변환하는 데 사용됩니다.",
    Query: "TO_CHAR(date_value, format)",
    Details:
      "date_value는 변환하려는 날짜 또는 시간 값이고, format은 날짜 및 시간 값을 문자열로 변환할 때 사용할 형식입니다.",
    EXQuery: "SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') FROM DUAL;",
    EXExplanation:
      "SYSDATE로부터 가져온 현재 날짜와 시간 값을 'YYYY-MM-DD HH24:MI:SS' 형식의 문자열로 변환하여 반환합니다.",
    image: seven15,
  },
  {
    Name: "TO_CHAR (number)",
    Explanation: "숫자(Number) 데이터를 문자열로 변환하는 데 사용됩니다.",
    Query: "TO_CHAR(number_value, format)",
    Details:
      "number_value는 변환하려는 숫자 값이고, format은 숫자 값을 문자열로 변환할 때 사용할 형식입니다.",
    EXQuery: "SELECT TO_CHAR(1234.5678, '9999.9999') FROM DUAL;",
    EXExplanation:
      "숫자 값 1234.5678을 '9999.9999' 형식의 문자열로 변환하여 반환합니다. 결과는 '1234.5678'입니다.",
    image: seven16,
  },
  {
    Name: "TO_CLOB",
    Explanation:
      "오라클에서 문자열 데이터를 CLOB(Character Large Object) 데이터 형식으로 변환하는 데 사용됩니다. CLOB은 대용량 텍스트 데이터를 저장하는 데 사용되며, 문자열의 길이에 제한이 없습니다.",
    Query: "TO_CLOB(string_value)",
    Details:
      "string_value는 CLOB으로 변환하려는 문자열 값입니다. TO_CLOB 함수는 해당 문자열 값을 CLOB 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_CLOB('This is a sample CLOB value.') FROM DUAL;",
    EXExplanation:
      "문자열 'This is a sample CLOB value.'를 CLOB 데이터 형식으로 변환하여 반환합니다.",
    image: seven17,
  },
  {
    Name: "TO_DATE",
    Explanation: "문자열을 날짜(Date) 데이터 형식으로 변환하는 데 사용됩니다. ",
    Query: "TO_DATE(string_value, format)",
    Details:
      "string_value는 변환하려는 문자열 값이고, format은 문자열을 날짜로 변환할 때 사용할 형식입니다.",
    EXQuery: "SELECT TO_DATE('2023-05-30', 'YYYY-MM-DD') FROM DUAL;",
    EXExplanation:
      "'2023-05-30'을 'YYYY-MM-DD' 형식의 날짜로 변환하여 반환합니다.",
    image: seven18,
  },
  {
    Name: "TO_DSINTERVAL",
    Explanation:
      "문자열을 DSINTERVAL(Day Second Interval) 데이터 형식으로 변환하는 데 사용됩니다. DSINTERVAL은 일과 초를 나타내는 간격 값을 저장하는 데이터 형식입니다.",
    Query: "TO_DSINTERVAL(string_value)",
    Details:
      "string_value는 DSINTERVAL으로 변환하려는 문자열 값입니다. TO_DSINTERVAL 함수는 해당 문자열 값을 DSINTERVAL 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_DSINTERVAL('+10 12:34:56') FROM DUAL;",
    EXExplanation:
      "문자열 '+10 12:34:56'을 DSINTERVAL 데이터 형식으로 변환하여 반환합니다.",
    image: seven19,
  },
  {
    Name: "TO_LOB",
    Explanation:
      "문자열 또는 RAW 데이터를 LOB (Large Object) 데이터 형식으로 변환하는 데 사용됩니다. LOB 데이터 형식은 대용량의 이진 또는 문자 데이터를 저장하는 데 사용되며, CLOB(Character Large Object) 또는 BLOB(Binary Large Object)로 구성될 수 있습니다.",
    Query: "TO_LOB(value)",
    Details:
      "value는 LOB으로 변환하려는 문자열 또는 RAW 데이터입니다. TO_LOB 함수는 해당 데이터 값을 LOB 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "",
    EXExplanation: "",
    image: "",
  },
  {
    Name: "TO_MULTI_BYTE",
    Explanation:
      "문자열을 다중바이트(Multi-byte) 문자열로 변환하는 데 사용됩니다.",
    Query: "TO_MULTI_BYTE(string_value)",
    Details:
      "string_value는 변환하려는 단일바이트 문자열 값입니다. TO_MULTI_BYTE 함수는 해당 문자열 값을 다중바이트 문자열로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_MULTI_BYTE('ABC') FROM DUAL;",
    EXExplanation:
      "단일바이트 문자열 'ABC'를 다중바이트 문자열로 변환하여 반환합니다.",
    image: seven21,
  },
  {
    Name: "TO_NCHAR (character)",
    Explanation:
      "문자열을 NCHAR 데이터 형식으로 변환하는 데 사용됩니다. NCHAR은 유니코드(Unicode) 문자를 저장하는 데 사용되며, 다국어 문자를 지원하기 위해 설계된 데이터 형식입니다.",
    Query: "TO_NCHAR(string_value)",
    Details:
      "string_value는 변환하려는 문자열 값입니다. TO_NCHAR 함수는 해당 문자열 값을 NCHAR 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_NCHAR('안녕하세요') FROM DUAL;",
    EXExplanation:
      "문자열 '안녕하세요'를 NCHAR 데이터 형식으로 변환하여 반환합니다.",
    image: seven22,
  },
  {
    Name: "TO_NCHAR (datetime)",
    Explanation:
      "날짜와 시간 데이터를 NCHAR 데이터 형식으로 변환하는 데 사용되지 않습니다. TO_NCHAR 함수는 문자열을 NCHAR로 변환하는 용도로 주로 사용됩니다.",
    Query: "TO_NCHAR(datetime)",
    Details:
      "날짜와 시간 데이터를 NCHAR로 변환하려면 TO_CHAR 함수를 사용하여 날짜 및 시간 값을 문자열로 변환한 후, TO_NCHAR 함수를 사용하여 문자열을 NCHAR로 변환할 수 있습니다.",
    EXQuery:
      "SELECT TO_NCHAR(TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS')) FROM DUAL;",
    EXExplanation:
      "SYSDATE로부터 가져온 현재 날짜와 시간 값을 'YYYY-MM-DD HH24:MI:SS' 형식의 문자열로 변환한 후, TO_NCHAR 함수를 사용하여 문자열을 NCHAR로 변환하여 반환합니다.",
    image: seven23,
  },
  {
    Name: "TO_NCHAR",
    Explanation:
      "숫자(Number) 데이터를 NCHAR 데이터 형식으로 변환하는 데 사용됩니다. TO_NCHAR 함수를 사용하여 숫자 값을 NCHAR로 변환할 수 있습니다.",
    Query: "TO_NCHAR(number_value)",
    Details:
      "number_value는 변환하려는 숫자 값입니다. TO_NCHAR 함수는 해당 숫자 값을 NCHAR 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_NCHAR(1234) FROM DUAL;",
    EXExplanation: "숫자 값 1234를 NCHAR 데이터 형식으로 변환하여 반환합니다.",
    image: seven24,
  },
  {
    Name: "TO_NCLOB",
    Explanation:
      "문자열을 NCLOB (National Character Large Object) 데이터 형식으로 변환하는 데 사용됩니다. NCLOB은 유니코드 문자를 저장하는 데 사용되며, 대용량의 다국어 텍스트 데이터를 저장하는 데 적합한 데이터 형식입니다.",
    Query: "TO_NCLOB(string_value)",
    Details:
      "string_value는 변환하려는 문자열 값입니다. TO_NCLOB 함수는 해당 문자열 값을 NCLOB 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_NCLOB('This is a sample NCLOB value.') FROM DUAL;",
    EXExplanation:
      "문자열 'This is a sample NCLOB value.'를 NCLOB 데이터 형식으로 변환하여 반환합니다.",
    image: seven25,
  },
  {
    Name: "TO_NUMBER",
    Explanation:
      "문자열을 숫자(Number) 데이터 형식으로 변환하는 데 사용됩니다. TO_NUMBER 함수를 사용하여 문자열을 지정된 형식에 맞는 숫자로 변환할 수 있습니다.",
    Query: "TO_NUMBER(string_value, format)",
    Details:
      "string_value는 변환하려는 문자열 값이고, format은 문자열을 숫자로 변환할 때 사용할 형식입니다. format 매개변수는 선택적이며, 생략할 경우 기본 숫자 형식을 사용합니다.",
    EXQuery: "SELECT TO_NUMBER('123.45') FROM DUAL;",
    EXExplanation:
      "문자열 '123.45'를 기본 숫자 형식에 따라 숫자로 변환하여 반환합니다.",
    image: seven26,
  },
  {
    Name: "TO_SINGLE_BYTE",
    Explanation:
      "다중바이트(Multi-byte) 문자열을 단일바이트(Single-byte) 문자열로 변환하는 데 사용됩니다.",
    Query: "TO_SINGLE_BYTE(string_value)",
    Details:
      "string_value는 변환하려는 다중바이트 문자열 값입니다. TO_SINGLE_BYTE 함수는 해당 문자열 값을 단일바이트 문자열로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_SINGLE_BYTE('ＡＢＣ１２３') FROM DUAL;",
    EXExplanation:
      "다중바이트 문자열 'ＡＢＣ１２３'을 단일바이트 문자열로 변환하여 반환합니다.",
    image: seven27,
  },
  {
    Name: "TO_TIMESTAMP",
    Explanation: "문자열을 TIMESTAMP 데이터 형식으로 변환하는 데 사용됩니다. ",
    Query: "TO_TIMESTAMP(string_value, format)",
    Details:
      "string_value는 변환하려는 문자열 값이고, format은 문자열을 TIMESTAMP으로 변환할 때 사용할 형식입니다. format 매개변수는 선택적이며, 생략할 경우 기본 TIMESTAMP 형식을 사용합니다.",
    EXQuery:
      "SELECT TO_TIMESTAMP('2023-05-30 10:30:00', 'YYYY-MM-DD HH24:MI:SS') FROM DUAL;",
    EXExplanation:
      "문자열 '2023-05-30 10:30:00'을 'YYYY-MM-DD HH24:MI:SS' 형식에 따라 TIMESTAMP으로 변환하여 반환합니다.",
    image: seven28,
  },
  {
    Name: "TO_TIMESTAMP_TZ",
    Explanation:
      "문자열을 TIMESTAMP WITH TIME ZONE 데이터 형식으로 변환하는 데 사용됩니다. TO_TIMESTAMP_TZ 함수를 사용하여 문자열을 지정된 형식에 맞는 TIMESTAMP WITH TIME ZONE 값으로 변환할 수 있습니다.",
    Query: "TO_TIMESTAMP_TZ(string_value, format)",
    Details:
      "string_value는 변환하려는 문자열 값이고, format은 문자열을 TIMESTAMP WITH TIME ZONE으로 변환할 때 사용할 형식입니다. format 매개변수는 선택적이며, 생략할 경우 기본 TIMESTAMP WITH TIME ZONE 형식을 사용합니다.",
    EXQuery:
      "SELECT TO_TIMESTAMP_TZ('2023-05-30 10:30:00 -07:00', 'YYYY-MM-DD HH24:MI:SS TZH:TZM') FROM DUAL;",
    EXExplanation:
      "문자열 '2023-05-30 10:30:00 -07:00'을 'YYYY-MM-DD HH24:MI:SS TZH:TZM' 형식에 따라 TIMESTAMP WITH TIME ZONE으로 변환하여 반환합니다.",
    image: seven29,
  },
  {
    Name: "TO_YMINTERVAL",
    Explanation:
      "문자열을 YEAR TO MONTH INTERVAL 데이터 형식으로 변환하는 데 사용됩니다. TO_YMINTERVAL 함수를 사용하여 문자열을 지정된 형식에 맞는 YEAR TO MONTH INTERVAL 값으로 변환할 수 있습니다.",
    Query: "TO_YMINTERVAL(string_value)",
    Details:
      "string_value는 변환하려는 문자열 값입니다. TO_YMINTERVAL 함수는 해당 문자열 값을 YEAR TO MONTH INTERVAL 데이터 형식으로 변환하여 반환합니다.",
    EXQuery: "SELECT TO_YMINTERVAL('+10-06') FROM DUAL;",
    EXExplanation:
      "문자열 '+10-06'을 YEAR TO MONTH INTERVAL 데이터 형식으로 변환하여 반환합니다.",
    image: seven30,
  },
  {
    Name: "TRANSLATE ... USING",
    Explanation:
      "문자열에서 문자를 다른 문자로 대체하는 데 사용됩니다. 이 구문은 특정 문자열에서 문자의 집합을 다른 문자 집합으로 변환하는 데 유용합니다.",
    Query:
      "TRANSLATE(source_string, character_set_to_replace, replacement_characters)",
    Details:
      "source_string은 변환할 문자열입니다. character_set_to_replace는 대체할 문자의 집합이며, replacement_characters는 대체할 문자로 사용될 문자의 집합입니다. 이 두 매개변수는 서로 대응되는 위치에 있는 문자를 대체합니다.",
    EXQuery:
      "SELECT TRANSLATE('Hello, World!', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') FROM DUAL;",
    EXExplanation:
      " 'Hello, World!' 문자열에서 알파벳 소문자를 대문자로 대체하여 반환합니다.",
    image: seven31,
  },
  {
    Name: "UNISTR",
    Explanation:
      "Unicode 이스케이프 시퀀스를 사용하여 문자열을 생성하는 데 사용됩니다. UNISTR 함수를 사용하면 Unicode 문자를 나타내는 이스케이프 시퀀스를 문자열 안에 포함시킬 수 있습니다.",
    Query: "UNISTR(string)",
    Details:
      "string은 Unicode 이스케이프 시퀀스를 포함한 문자열입니다. UNISTR 함수는 해당 이스케이프 시퀀스를 해당하는 Unicode 문자로 변환하여 반환합니다.",
    EXQuery: "SELECT UNISTR('Hello \u4F60\u597D') FROM DUAL;",
    EXExplanation:
      "문자열 'Hello \u4F60\u597D'의 이스케이프 시퀀스를 해당하는 Unicode 문자로 변환하여 반환합니다. 예를 들어, '\u4F60'은 '你' 문자를 나타내고, '\u597D'는 '好' 문자를 나타냅니다.",
    image: "",
  },
];
export default data7;
