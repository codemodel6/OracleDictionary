const data18 = [
  {
    Name: "CV",
    Explanation:
      "암시적 커서 변수(implicit cursor variable)입니다. CV는 주로 FOR 루프나 FETCH 문 등의 커서 제어 구문에서 사용되며, 암시적 커서를 참조하는 데 사용됩니다.",
    Query: "CV%ROWCOUNT",
    Details:
      "CV는 암시적 커서를 가리키는 변수입니다.\n%ROWCOUNT는 CV 변수에 의해 참조된 커서의 실행 결과로 반환된 행 수를 나타내는 속성입니다.",
    EXQuery: "",
    EXExplanation: "",
  },
  {
    Name: "ITERATION_NUMBER",
    Explanation:
      "계층 쿼리(Hierarchical Query)에서 현재 반복(iteration) 번호를 반환합니다.",
    Query: "ITERATION_NUMBER",
    Details:
      "ITERATION_NUMBER 함수는 계층 쿼리의 SELECT 문에서 사용됩니다. 이 함수를 사용하면 계층 쿼리의 각 반복에서 현재 반복 번호를 반환합니다. 반복 번호는 1부터 시작하여 계층 쿼리의 제한 조건에 따라 증가합니다.",
    EXQuery: "",
    EXExplanation: "",
  },
];

export default data18;
