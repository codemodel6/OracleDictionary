const data9 = [
  {
    Name: "CARDINALITY",
    Explanation:
      "컬렉션(배열 또는 VARRAY)의 요소 개수를 반환하는 데 사용됩니다.",
    Query: "CARDINALITY(collection)",
    Details:
      "collection은 요소 개수를 확인하려는 컬렉션입니다. CARDINALITY 함수는 해당 컬렉션의 요소 개수를 반환합니다.",
    EXQuery:
      "DECLARE\nTYPE num_array IS TABLE OF NUMBER;\nmy_array num_array := num_array(10, 20, 30, 40, 50);\narray_size NUMBER;\nBEGIN\narray_size := CARDINALITY(my_array);\nDBMS_OUTPUT.PUT_LINE('Array size: ' || array_size);\nEND;",
    EXExplanation:
      "num_array라는 숫자 배열을 정의하고, 해당 배열의 요소 개수를 CARDINALITY 함수를 사용하여 확인합니다. 결과는 DBMS_OUTPUT.PUT_LINE을 통해 출력됩니다.",
  },
  {
    Name: "COLLECT",
    Explanation:
      " GROUP BY 절과 함께 사용되어 그룹화된 데이터의 요소를 컬렉션으로 수집하는 데 사용됩니다. COLLECT 함수를 사용하면 같은 그룹 내에서 여러 행의 값을 하나의 컬렉션으로 수집할 수 있습니다.",
    Query: "COLLECT(expression) [KEEP (DENSE_RANK) [FIRST/LAST]]",
    Details:
      "expression은 그룹화된 데이터의 값을 나타내는 표현식입니다. COLLECT 함수는 해당 표현식의 값을 컬렉션으로 수집합니다. KEEP (DENSE_RANK) 절은 중복된 값을 컬렉션에 포함시킬 때 사용되며, FIRST 또는 LAST 키워드는 중복된 값을 처리하는 방식을 지정합니다.",
    EXQuery:
      "SELECT Department, COLLECT(Salary) AS SalaryList\nFROM Department\nGROUP BY Department;",
    EXExplanation:
      "Department' 테이블을 'Department' 컬럼으로 그룹화하고, 각 그룹 내의 'Salary' 값을 'SalaryList'라는 컬렉션으로 수집합니다. 결과는 각 그룹에 대해 컬렉션 형태로 반환됩니다.",
  },

  {
    Name: "POWERMULTISET",
    Explanation:
      "입력된 집합의 모든 가능한 조합을 생성하여 멀티셋(Multiset)으로 반환하는 데 사용됩니다. ",
    Query: "POWERMULTISET(expression)",
    Details:
      "expression은 멀티셋으로 변환할 집합이나 테이블 컬럼을 나타내는 표현식입니다. POWERMULTISET 함수는 해당 표현식의 집합의 모든 가능한 조합을 멀티셋으로 반환합니다.",
    EXQuery:
      "SELECT POWERMULTISET(COLLECT(1, 2, 3)) AS Combinations\nFROM DUAL;",
    EXExplanation:
      "(1, 2, 3) 집합의 모든 가능한 조합을 멀티셋으로 생성하여 반환합니다. 결과는 멀티셋 형태로 표시됩니다.",
  },
  {
    Name: "POWERMULTISET_BY_CARDINALITY",
    Explanation:
      "입력된 집합의 모든 가능한 조합을 생성하여 멀티셋(Multiset)으로 반환하는 데 사용됩니다. 이 함수는 POWERMULTISET 함수와는 달리 입력된 집합의 크기를 기준으로 조합을 생성합니다.",
    Query: "POWERMULTISET_BY_CARDINALITY(expression)",
    Details:
      "expression은 멀티셋으로 변환할 집합이나 테이블 컬럼을 나타내는 표현식입니다. POWERMULTISET_BY_CARDINALITY 함수는 해당 표현식의 집합의 가능한 조합을 멀티셋으로 반환합니다. 조합의 생성은 입력된 집합의 크기에 따라 이루어집니다.",
    EXQuery:
      "SELECT POWERMULTISET_BY_CARDINALITY(COLLECT(1, 2, 3)) AS Combinations\nFROM DUAL;",
    EXExplanation:
      " (1, 2, 3) 집합의 가능한 조합을 멀티셋으로 생성하여 반환합니다. 결과는 멀티셋 형태로 표시됩니다.",
  },
];

export default data9;
