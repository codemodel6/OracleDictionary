const data13 = [
  {
    Name: "COALESCE",
    Explanation:
      "NULL이 아닌 첫 번째 유효한 표현식을 반환하는 함수입니다. 이 함수는 여러 개의 인수를 받아 가장 첫 번째로 NULL이 아닌 값을 반환합니다.",
    Query: "COALESCE(expression1, expression2, expression3, ...)",
    Details:
      "expression1, expression2, expression3, ...은 비교할 표현식들입니다.",
    EXQuery:
      "SELECT COALESCE(column1, column2, 'N/A') AS result\nFROM table_name;",
    EXExplanation:
      "table_name에서 column1, column2의 값을 비교하여 NULL이 아닌 첫 번째 값을 반환합니다. 모든 값이 NULL인 경우에는 'N/A'를 반환합니다.",
  },
  {
    Name: "LNNVL",
    Explanation:
      "논리 부정 연산자(NOT)를 사용할 수 없는 NULL 값을 비교할 때 사용되는 함수입니다. LNNVL 함수는 주어진 조건이 거짓(NULL이거나 FALSE)인 경우에만 TRUE를 반환하고, 조건이 참(TRUE)이거나 알 수 없는(NULL) 경우에는 FALSE를 반환합니다.",
    Query: "LNNVL(condition)",
    Details: "condition은 평가할 조건이나 논리 표현식입니다.",
    EXQuery:
      "SELECT column1, column2\nFROM table_name\nWHERE LNNVL(column1 = column2);",
    EXExplanation:
      " table_name에서 column1과 column2의 값을 비교합니다. LNNVL 함수를 사용하여 column1과 column2가 NULL인 경우에만 해당 행을 반환합니다.",
  },
  {
    Name: "NULLIF",
    Explanation:
      "두 개의 표현식을 비교하여 값이 같으면 NULL을, 값이 다르면 첫 번째 표현식의 값을 반환하는 함수입니다. 이 함수는 특정 값이나 표현식을 NULL로 대체하고자 할 때 사용됩니다.",
    Query: "NULLIF(expression1, expression2)",
    Details:
      "expression1은 비교할 첫 번째 표현식입니다.\nexpression2는 비교할 두 번째 표현식입니다.",
    EXQuery:
      "SELECT column1, NULLIF(column2, 0) AS column2_modified\nFROM table_name;",
    EXExplanation:
      " table_name에서 column2의 값을 0과 비교하여 값이 0이면 NULL을 반환하고, 값이 0이 아니면 원래 값을 유지합니다.",
  },
  {
    Name: "NVL",
    Explanation: "NULL 값을 다른 값으로 대체하는 함수입니다.",
    Query: "NVL(expression1, expression2)",
    Details:
      "expression1은 NULL 값을 검사할 표현식입니다.\nexpression2는 expression1이 NULL일 경우 대체할 값입니다.",
    EXQuery:
      "SELECT column1, NVL(column2, 'N/A') AS column2_modified\nFROM table_name;",
    EXExplanation:
      "table_name에서 column2의 값을 검사하여 NULL이면 'N/A'로 대체하고, NULL이 아니면 원래 값을 유지합니다.",
  },
  {
    Name: "NVL2",
    Explanation:
      "NULL 값을 대체하는 함수로, NULL이 아닌 경우에는 다른 값을 반환하고, NULL인 경우에는 다른 값을 반환하는 기능을 제공합니다.",
    Query: "NVL2(expression1, expression2, expression3)",
    Details:
      "expression1은 NULL 여부를 검사할 표현식입니다.\nexpression2는 expression1이 NULL이 아닐 때 반환할 값입니다.\nexpression3는 expression1이 NULL일 때 반환할 값입니다.",
    EXQuery:
      "SELECT column1, NVL2(column2, 'Not Null', 'Null') AS column2_status\nFROM table_name;",
    EXExplanation:
      "table_name에서 column2의 값을 검사하여 NULL이 아닌 경우에는 'Not Null'을 반환하고, NULL인 경우에는 'Null'을 반환합니다.",
  },
];

export default data13;
