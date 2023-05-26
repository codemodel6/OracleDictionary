import five1 from "../../src/image/5/5-1.png";
import five2 from "../../src/image/5/5-2.png";
import five3 from "../../src/image/5/5-3.png";
import five4 from "../../src/image/5/5-4.png";
import five5 from "../../src/image/5/5-5.png";
import five6 from "../../src/image/5/5-6.png";
import five7 from "../../src/image/5/5-7.png";
import five8 from "../../src/image/5/5-8.png";
import five9 from "../../src/image/5/5-9.png";
import five10 from "../../src/image/5/5-10.png";
import five11 from "../../src/image/5/5-11.png";
import five12 from "../../src/image/5/5-12.png";
import five13 from "../../src/image/5/5-13.png";
import five14 from "../../src/image/5/5-14.png";
import five15 from "../../src/image/5/5-15.png";
import five16 from "../../src/image/5/5-16.png";
import five17 from "../../src/image/5/5-17.png";
import five18 from "../../src/image/5/5-18.png";
import five19 from "../../src/image/5/5-19.png";
import five20 from "../../src/image/5/5-20.png";
import five21 from "../../src/image/5/5-21.png";
import five22 from "../../src/image/5/5-22.png";
import five23 from "../../src/image/5/5-23.png";
import five24 from "../../src/image/5/5-24.png";
import five25 from "../../src/image/5/5-25.png";

let data5 = [
  {
    Name: "5-1. ADD_MONTHS",
    Explanation:
      "날짜에 대해 사용되는 함수 중 하나입니다. 이 함수는 지정된 날짜에 월을 더하거나 뺄 때 사용됩니다.",
    Query: "ADD_MONTHS(date, n)",
    Details:
      "date: 날짜 값이나 날짜를 포함하는 표현식입니다.\nn: 더하거나 뺄 월 수를 나타내는 정수 값입니다. 양수일 경우 해당 월 수를 더하고, 음수일 경우 해당 월 수를 뺍니다.",
    EXQuery: "SELECT ADD_MONTHS(SYSDATE, 3) AS New_Date FROM DUAL;",
    EXExplanation:
      "SYSDATE는 현재 날짜를 나타내며, 3은 3개월을 의미합니다. 함수의 결과로 현재 날짜로부터 3개월 뒤의 날짜가 반환됩니다.",
    image: five1,
  },
  {
    Name: "CURRENT_DATE",
    Explanation: "현재 날짜를 반환하는 함수입니다.",
    Query: "CURRENT_DATE",
    Details:
      "매개변수를 필요로하지 않고, 단순히 현재 시스템 날짜를 반환합니다.",
    EXQuery: "SELECT CURRENT_DATE AS Today FROM DUAL;",
    EXExplanation:
      "현재 날짜를 'Today'라는 별칭으로 조회하고, 결과로 현재 날짜가 반환됩니다.",
    image: five2,
  },
  {
    Name: "CURRENT_TIMESTAMP",
    Explanation: "현재 날짜와 시간을 반환하는 함수입니다.",
    Query: "CURRENT_TIMESTAMP",
    Details:
      "매개변수를 필요로하지 않고, 현재의 시스템 날짜와 시간을 반환합니다.",
    EXQuery: "SELECT CURRENT_TIMESTAMP AS CurrentDateTime FROM DUAL;",
    EXExplanation:
      "현재 날짜와 시간을 'CurrentDateTime'라는 별칭으로 조회하고, 결과로 현재 날짜와 시간이 반환됩니다.",
    image: five3,
  },
  {
    Name: "DBTIMEZONE",
    Explanation:
      "오라클 데이터베이스의 현재 타임존을 나타내는 시스템 파라미터입니다. 이 파라미터는 데이터베이스 서버가 동작하는 시간대를 지정합니다.",
    Query: "SELECT DBTIMEZONE FROM DUAL;",
    Details:
      " DBTIMEZONE 값을 조회하여 결과로 현재 데이터베이스의 타임존을 반환합니다.",
    EXQuery: "SELECT DBTIMEZONE FROM DUAL;",
    EXExplanation:
      "DBTIMEZONE 값은 일반적으로 시간대 오프셋을 나타내는 문자열로 표현됩니다. 예를 들어, 'GMT', 'UTC+00:00', 'America/New_York' 등의 형태로 나타날 수 있습니다. 이 값은 데이터베이스 서버가 동작하는 기본 시간대를 나타내며, 데이터베이스의 날짜 및 시간 연산에 영향을 줄 수 있습니다.",
    image: five4,
  },
  {
    Name: "EXTRACT (datetime)",
    Explanation:
      "날짜 및 시간 값에서 특정 부분을 추출하는 함수입니다. 이 함수를 사용하여 날짜와 시간 값에서 연도, 월, 일, 시간, 분, 초 등의 구성 요소를 추출할 수 있습니다.",
    Query: "EXTRACT (datetime_part FROM date_expression)",
    Details:
      "datetime_part는 추출하려는 날짜 및 시간 구성 요소를 나타내며, date_expression은 추출할 값을 포함하는 날짜 또는 시간 표현식입니다.\ndatetime_part는 다양한 값 중 하나를 가질 수 있으며, 일반적으로 다음과 같은 구성 요소를 추출하는 데 사용됩니다:\nYEAR: 연도\nMONTH: 월\nDAY: 일\nHOUR: 시간\nMINUTE: 분\nSECOND: 초",
    EXQuery: "SELECT EXTRACT(YEAR FROM SYSDATE) AS CurrentYear FROM DUAL;",
    EXExplanation:
      " SYSDATE에서 연도를 추출하여 'CurrentYear'라는 별칭으로 조회하고, 결과로 현재 연도가 반환됩니다.",
    image: five5,
  },
  {
    Name: "FROM_TZ",
    Explanation:
      "타임존 정보를 가진 TIMESTAMP 값을 생성하는 함수입니다. 이 함수는 특정 TIMESTAMP 값에 타임존 정보를 추가하여 새로운 TIMESTAMP WITH TIME ZONE 값을 생성합니다.",
    Query: "FROM_TZ(timestamp_value, time_zone)",
    Details:
      "timestamp_value는 타임존 정보를 추가할 TIMESTAMP 값이고, time_zone은 추가할 타임존을 나타냅니다. time_zone은 일반적으로 '±HH:MI' 형식의 오프셋 문자열이거나, '이름/지역' 형식의 타임존 이름입니다.",
    EXQuery:
      "SELECT FROM_TZ(TIMESTAMP '2023-05-25 10:30:00', 'Asia/Seoul') AS TimeWithTimeZone FROM DUAL;",
    EXExplanation:
      "TIMESTAMP 값에 'Asia/Seoul' 타임존을 추가하여 TIMESTAMP WITH TIME ZONE 값을 생성하고, 'TimeWithTimeZone'라는 별칭으로 조회합니다.",
    image: five6,
  },
  {
    Name: "LAST_DAY",
    Explanation:
      "지정된 날짜의 해당 월의 마지막 날짜를 반환하는 함수입니다. 즉, 입력된 날짜의 해당 월의 마지막 날짜를 가져올 수 있습니다.",
    Query: "LAST_DAY(date_expression)",
    Details:
      "date_expression은 마지막 날짜를 확인하려는 날짜 값이나 날짜 표현식입니다.",
    EXQuery: "SELECT LAST_DAY(SYSDATE) AS LastDayOfMonth FROM DUAL;",
    EXExplanation:
      " SYSDATE를 입력으로 사용하여 해당 월의 마지막 날짜를 가져와 'LastDayOfMonth'라는 별칭으로 조회합니다.",
    image: five7,
  },
  {
    Name: "SYSDATE",
    Explanation: " 현재 날짜와 시간을 반환하는 시스템 함수입니다. ",
    Query: "SYSDATE",
    Details:
      "SYSDATE 함수를 호출하면 데이터베이스 서버의 현재 날짜와 시간을 가져올 수 있습니다.",
    EXQuery: "SELECT SYSDATE AS CurrentDateTime FROM DUAL;",
    EXExplanation:
      "현재 날짜와 시간을 'CurrentDateTime'라는 별칭으로 조회합니다.",
    image: five8,
  },
  {
    Name: "LOCALTIMESTAMP",
    Explanation: "현재 로컬 날짜와 시간을 반환하는 함수입니다.",
    Query: "LOCALTIMESTAMP",
    Details:
      "현재 데이터베이스 세션의 로컬 날짜와 시간이 반환됩니다. 반환되는 값은 데이터베이스 서버의 타임존에 따라 로컬로 조정된 값입니다.",
    EXQuery: "SELECT LOCALTIMESTAMP AS CurrentDateTime FROM DUAL;",
    EXExplanation:
      "LOCALTIMESTAMP 함수를 사용하여 현재 로컬 날짜와 시간을 'CurrentDateTime'라는 별칭으로 조회합니다.",
    image: five9,
  },
  {
    Name: "MONTHS_BETWEEN",
    Explanation: "두 날짜 사이의 개월 수를 계산하는 함수입니다.",
    Query: "MONTHS_BETWEEN(date1, date2)",
    Details: "date1과 date2는 비교하려는 두 날짜 값 또는 날짜 표현식입니다.",
    EXQuery:
      "SELECT MONTHS_BETWEEN(TO_DATE('2022-01-01', 'YYYY-MM-DD'), TO_DATE('2021-07-01', 'YYYY-MM-DD')) AS MonthDiff FROM DUAL;",
    EXExplanation:
      "'2022-01-01'과 '2021-07-01' 사이의 개월 수를 MONTHS_BETWEEN 함수를 사용하여 계산하고 'MonthDiff'라는 별칭으로 조회합니다.\nMONTHS_BETWEEN 함수는 날짜 간의 개월 수를 소수점으로 반환할 수도 있습니다. 예를 들어, 1개월 15일 차이가 있는 경우 1.5의 값을 반환할 수 있습니다.",
    image: five10,
  },
  {
    Name: "NEW_TIME",
    Explanation: "날짜와 시간을 다른 타임존으로 변환하는 함수입니다.",
    Query: "NEW_TIME(date, from_tz, to_tz)",
    Details:
      "date는 변환할 날짜 값 또는 날짜 표현식이며, from_tz는 원래 타임존, to_tz는 변환하고자 하는 타임존을 나타냅니다.",
    EXQuery:
      "SELECT NEW_TIME(SYSDATE, 'GMT', 'EST') AS ConvertedDateTime FROM DUAL;",
    EXExplanation:
      "SYSDATE를 GMT 타임존에서 EST 타임존으로 변환하여 'ConvertedDateTime'라는 별칭으로 조회합니다.",
    image: five11,
  },
  {
    Name: "NEXT_DAY",
    Explanation:
      "특정 날짜 이후로 다음으로 지정한 요일이 나오는 날짜를 반환하는 함수입니다. ",
    Query: "NEXT_DAY(date, day)",
    Details:
      "date는 기준이 되는 날짜 값 또는 날짜 표현식이며, day는 다음으로 나와야 할 요일을 나타냅니다. day는 문자열로 표현되며, 일요일은 'SUNDAY', 월요일은 'MONDAY', 화요일은 'TUESDAY' 등과 같이 지정합니다.",
    EXQuery: "SELECT NEXT_DAY(SYSDATE, '화요일') AS NextTuesday FROM DUAL;",
    EXExplanation:
      "현재 날짜 (SYSDATE) 이후로 다음 화요일을 조회하고 'NextTuesday'라는 별칭으로 결과를 반환합니다.",
    image: five12,
  },
  {
    Name: "NUMTODSINTERVAL",
    Explanation:
      "숫자를 일정한 간격으로 변환하여 INTERVAL 데이터 타입을 생성하는 오라클 함수입니다. 주어진 숫자를 일, 시간, 분, 초 등의 간격으로 변환하여 INTERVAL 데이터 타입으로 반환합니다.",
    Query: "NUMTODSINTERVAL(n, 'interval_unit')",
    Details:
      "n은 변환할 숫자 값이며, interval_unit은 변환할 간격의 단위를 나타냅니다. interval_unit은 문자열로 표현되며, 'DAY', 'HOUR', 'MINUTE', 'SECOND' 등의 값으로 지정할 수 있습니다.",
    EXQuery: "SELECT NUMTODSINTERVAL(5, 'HOUR') AS IntervalValue FROM DUAL;",
    EXExplanation:
      " 5를 시간 간격으로 변환하여 'IntervalValue'라는 별칭으로 결과를 반환합니다.",
    image: five13,
  },
  {
    Name: "NUMTOYMINTERVAL",
    Explanation:
      "숫자를 일정한 간격으로 변환하여 INTERVAL YEAR TO MONTH 데이터 타입을 생성하는 오라클 함수입니다.",
    Query: "NUMTOYMINTERVAL(n, 'interval_unit')",
    Details:
      "n은 변환할 숫자 값이며, interval_unit은 변환할 간격의 단위를 나타냅니다. interval_unit은 문자열로 표현되며, 'YEAR', 'MONTH' 등의 값으로 지정할 수 있습니다.",
    EXQuery: "SELECT NUMTOYMINTERVAL(3, 'MONTH') AS IntervalValue FROM DUAL;",
    EXExplanation:
      "3를 월 간격으로 변환하여 'IntervalValue'라는 별칭으로 결과를 반환합니다.",
    image: five14,
  },
  {
    Name: "ROUND (date)",
    Explanation: "날짜를 가장 가까운 값으로 반올림하는 오라클 함수입니다",
    Query: "ROUND(date, [format])",
    Details:
      "date는 반올림할 날짜 값입니다. format은 선택적인 매개변수로, 날짜의 반올림 단위를 지정하는 데 사용됩니다. format으로 사용할 수 있는 값은 'YEAR', 'MONTH', 'DAY', 'HH', 'MI', 'SS' 등이 있습니다. 이를 통해 해당 단위로 날짜를 반올림할 수 있습니다. format을 지정하지 않으면 날짜는 가장 가까운 초 단위로 반올림됩니다.",
    EXQuery: "SELECT ROUND(SYSDATE, 'MONTH') AS RoundedDate FROM DUAL;",
    EXExplanation:
      "SYSDATE를 월 단위로 반올림하여 'RoundedDate'라는 별칭으로 결과를 반환합니다.",
    image: five15,
  },
  {
    Name: "SESSIONTIMEZONE",
    Explanation: "현재 세션의 타임존 정보를 반환하는 함수입니다.",
    Query: "SELECT SESSIONTIMEZONE FROM DUAL;",
    Details:
      "현재 세션의 타임존 정보를 반환합니다. 결과는 타임존 오프셋 형식으로 표시될 수도 있고, 타임존 이름으로 표시될 수도 있습니다.",
    EXQuery: "SELECT SESSIONTIMEZONE FROM DUAL;",
    EXExplanation: "현재 세션의 타임존 정보를 반환",
    image: five16,
  },
  {
    Name: "SYS_EXTRACT_UTC",
    Explanation:
      "주어진 날짜 또는 타임스탬프 값의 UTC(협정 세계시)에 해당하는 시간을 반환합니다.",
    Query: "SYS_EXTRACT_UTC(date)",
    Details:
      "date는 UTC 시간으로 변환할 날짜 또는 타임스탬프 값입니다.\nSYS_EXTRACT_UTC 함수를 사용하여 날짜 또는 타임스탬프 값을 UTC 시간으로 변환할 수 있습니다. 반환된 값은 해당 날짜 또는 타임스탬프 값의 UTC에 해당하는 시간으로 표시됩니다.",
    EXQuery:
      "SELECT SYS_EXTRACT_UTC(TIMESTAMP '2000-03-28 11:30:00.00 -08:00') AS UTC_Time FROM DUAL;",
    EXExplanation:
      "2000-03-28 11:30:00.00 -08:00 시간의 세계 협정 시간을 보여줍니다.",
    image: five17,
  },
  {
    Name: "SYSTIMESTAMP",
    Explanation: "현재의 시스템 타임스탬프를 반환하는 오라클 함수입니다.",
    Query: "SYSTIMESTAMP",
    Details:
      "SYSTIMESTAMP 함수는 단일 인수를 필요로하지 않으며, 호출 시 현재 시스템의 타임스탬프 값을 반환합니다.\nSYSTIMESTAMP 함수를 사용하여 현재 시스템의 타임스탬프를 확인할 수 있습니다. 반환된 값은 현재 시스템의 날짜와 시간 정보를 포함하는 타임스탬프 형식으로 표시됩니다.",
    EXQuery: "SELECT SYSTIMESTAMP AS Current_Timestamp FROM DUAL;",
    EXExplanation:
      "현재 시스템의 타임스탬프를 'Current_Timestamp'이라는 별칭으로 결과로 반환합니다.",
    image: five18,
  },
  {
    Name: "TO_CHAR (datetime)",
    Explanation:
      "날짜 또는 타임스탬프 값을 지정된 형식으로 문자열로 변환합니다.",
    Query: "TO_CHAR(datetime, format)",
    Details:
      "datetime은 변환할 날짜 또는 타임스탬프 값이고, format은 문자열로 표현할 형식입니다. format 매개변수는 날짜 및 시간 형식 지정자를 포함할 수 있습니다.\nTO_CHAR 함수를 사용하여 날짜 또는 타임스탬프 값을 문자열로 변환할 수 있습니다. 반환된 값은 지정된 형식에 따라 날짜와 시간 값을 나타내는 문자열로 표시됩니다.",
    EXQuery:
      "SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') AS Formatted_DateTime FROM DUAL;",
    EXExplanation:
      "SYSDATE 값을 'YYYY-MM-DD HH24:MI:SS' 형식으로 변환하여 'Formatted_DateTime'이라는 별칭으로 결과를 반환합니다.",
    image: five19,
  },
  {
    Name: "TO_DSINTERVAL",
    Explanation:
      "문자열로 표현된 일정 시간 간격을 Oracle의 INTERVAL DAY TO SECOND 데이터 유형으로 변환하는 함수입니다. 이 함수를 사용하면 일정 시간 간격을 표현하는 문자열을 INTERVAL DAY TO SECOND 형식으로 변환할 수 있습니다.",
    Query: "TO_DSINTERVAL(interval_string)",
    Details:
      "interval_string은 변환할 일정 시간 간격을 나타내는 문자열입니다. 문자열은 다음과 같은 형식을 따라야 합니다: [days] [hours]:[minutes]:[seconds].\nTO_DSINTERVAL 함수를 사용하여 문자열을 INTERVAL DAY TO SECOND 형식으로 변환할 수 있습니다. 반환된 값은 INTERVAL DAY TO SECOND 데이터 유형으로 표현된 일정 시간 간격입니다.",
    EXQuery: "SELECT TO_DSINTERVAL('5 12:30:45') AS Interval FROM DUAL;",
    EXExplanation:
      "'5 12:30:45'라는 문자열을 INTERVAL DAY TO SECOND 형식으로 변환하여 'Interval'이라는 별칭으로 결과를 반환합니다.",
    image: five20,
  },
  {
    Name: "TO_TIMESTAMP",
    Explanation:
      "문자열로 표현된 날짜와 시간 값을 Oracle의 TIMESTAMP 데이터 유형으로 변환하는 함수입니다",
    Query: "TO_TIMESTAMP(date_string, format)",
    Details:
      "date_string은 변환할 날짜와 시간을 나타내는 문자열이고, format은 date_string의 형식을 지정하는 문자열입니다. format 매개변수는 날짜와 시간 형식 지정자를 포함할 수 있습니다.\nTO_TIMESTAMP 함수를 사용하여 문자열을 TIMESTAMP 형식으로 변환할 수 있습니다. 반환된 값은 TIMESTAMP 데이터 유형으로 표현된 날짜와 시간 값을 나타냅니다.",
    EXQuery:
      "SELECT TO_TIMESTAMP('2023-05-25 10:30:45', 'YYYY-MM-DD HH24:MI:SS') AS Converted_TimeStamp FROM DUAL;",
    EXExplanation: "",
    image: five21,
  },
  {
    Name: "TO_TIMESTAMP_TZ",
    Explanation:
      "문자열로 표현된 날짜, 시간 및 시간대 값을 Oracle의 TIMESTAMP WITH TIME ZONE 데이터 유형으로 변환하는 함수입니다. 이 함수를 사용하여 문자열을 TIMESTAMP WITH TIME ZONE 형식으로 변환할 수 있습니다.",
    Query: "TO_TIMESTAMP_TZ(date_string, format)",
    Details:
      "date_string은 변환할 날짜, 시간 및 시간대를 나타내는 문자열이고, format은 date_string의 형식을 지정하는 문자열입니다. format 매개변수는 날짜, 시간 및 시간대 형식 지정자를 포함할 수 있습니다.\nTO_TIMESTAMP_TZ 함수를 사용하여 문자열을 TIMESTAMP WITH TIME ZONE 형식으로 변환할 수 있습니다. 반환된 값은 TIMESTAMP WITH TIME ZONE 데이터 유형으로 표현된 날짜, 시간 및 시간대 값을 나타냅니다.",
    EXQuery:
      "SELECT TO_TIMESTAMP_TZ('2023-05-25 10:30:45 America/New_York', 'YYYY-MM-DD HH24:MI:SS TZR') AS Converted_TimeStamp FROM DUAL;",
    EXExplanation:
      "'2023-05-25 10:30:45 America/New_York'라는 문자열을 'YYYY-MM-DD HH24:MI:SS TZR' 형식의 TIMESTAMP WITH TIME ZONE 값으로 변환하여 'Converted_TimeStamp'라는 별칭으로 결과를 반환합니다.",
    image: five22,
  },
  {
    Name: "TO_YMINTERVAL",
    Explanation:
      "문자열로 표현된 연도 및 월 간격 값을 Oracle의 INTERVAL YEAR TO MONTH 데이터 유형으로 변환하는 함수입니다. 이 함수를 사용하여 문자열을 INTERVAL YEAR TO MONTH 형식으로 변환할 수 있습니다.",
    Query: "TO_YMINTERVAL(interval_string)",
    Details:
      "interval_string은 변환할 연도 및 월 간격을 나타내는 문자열입니다. interval_string은 'yyyy-mm' 형식을 따라야 합니다.\nTO_YMINTERVAL 함수를 사용하여 문자열을 INTERVAL YEAR TO MONTH 형식으로 변환할 수 있습니다. 반환된 값은 INTERVAL YEAR TO MONTH 데이터 유형으로 표현된 연도 및 월 간격 값을 나타냅니다.",
    EXQuery: "SELECT TO_YMINTERVAL('2-6') AS Converted_Interval FROM DUAL;",
    EXExplanation:
      "SELECT TO_YMINTERVAL('2-6') AS Converted_Interval FROM DUAL;",
    image: five23,
  },
  {
    Name: "TRUNC (date)",
    Explanation:
      "주어진 날짜 또는 시간 값을 다른 정확도로 자르는 데 사용되는 Oracle의 날짜 및 시간 함수입니다.",
    Query: "TRUNC(date, [format])",
    Details:
      "date는 자를 날짜 또는 시간 값을 나타내며, format은 선택적으로 지정할 수 있는 자르기 정확도를 나타내는 매개변수입니다. format 매개변수는 다음과 같은 값 중 하나를 사용할 수 있습니다\n\n'YEAR': 연도까지 자름\n'MONTH': 월까지 자름\n'DD' 또는 'J': 일까지 자름\n'HH24' 또는 'HH': 시간까지 자름\n'MI': 분까지 자름\n'SS': 초까지 자름\nformat 매개변수를 지정하지 않으면 TRUNC 함수는 기본적으로 'DD'로 설정되어 일까지 자르게 됩니다.",
    EXQuery: "SELECT TRUNC(SYSDATE, 'MONTH') AS Truncated_Date FROM DUAL;",
    EXExplanation:
      "SYSDATE를 월까지 자르고 'Truncated_Date'라는 별칭으로 결과를 반환합니다.",
    image: five24,
  },
  {
    Name: "TZ_OFFSET",
    Explanation:
      "특정 시점에서의 지역 시간대의 오프셋(차이)을 반환하는 Oracle의 날짜 및 시간 함수입니다. 이 함수는 특정 날짜와 시간에 대해 해당 지역의 표준 시간대 오프셋을 나타내는 문자열을 반환합니다.",
    Query: "TZ_OFFSET([timezone])",
    Details:
      "timezone은 선택적으로 지정할 수 있는 매개변수로, 오프셋을 확인하고자 하는 지역 시간대를 나타냅니다. 이 매개변수를 지정하지 않으면 현재 세션의 시간대가 기본값으로 사용됩니다.\nTZ_OFFSET 함수는 '+HH:MI' 또는 '-HH:MI' 형식의 문자열을 반환합니다. 양수 값은 UTC보다 미래에 있는 지역을 나타내며, 음수 값은 UTC보다 과거에 있는 지역을 나타냅니다. 예를 들어, '+05:30'은 인도 표준 시간대의 오프셋을 나타내고, '-08:00'은 태평양 표준 시간대의 오프셋을 나타냅니다.",
    EXQuery: "SELECT TZ_OFFSET('Asia/Kolkata') AS Offset FROM DUAL;",
    EXExplanation:
      "'Asia/Kolkata' 지역의 시간대 오프셋을 'Offset'이라는 별칭으로 반환합니다.",
    image: five25,
  },
];

export default data5;
