import six1 from "../../src/image/6/6-1.png";
import six2 from "../../src/image/6/6-2.png";

let data6 = [
  {
    Name: "GREATEST",
    Explanation:
      "주어진 값 중에서 가장 큰 값을 반환하는 Oracle의 집계 함수입니다. 이 함수는 여러 개의 인수를 받아서 그 중 최댓값을 반환합니다.",
    Query: "GREATEST(value1, value2, ...)",
    Details:
      "value1, value2, ...는 비교할 값들을 나타냅니다. 이 함수는 인수로 전달된 값들 중에서 가장 큰 값을 반환합니다. 반환되는 값은 입력된 값들 중에서 실제로 가장 큰 값입니다.",
    EXQuery: "SELECT GREATEST(10, 5, 8, 12, 3) AS MaxValue FROM DUAL;",
    EXExplanation:
      " 10, 5, 8, 12, 3 중에서 가장 큰 값을 'MaxValue'라는 별칭으로 반환합니다. 결과는 12가 될 것입니다",
    image: six1,
  },
  {
    Name: "LEAST",
    Explanation:
      "주어진 값 중에서 가장 작은 값을 반환하는 Oracle의 집계 함수입니다. 이 함수는 여러 개의 인수를 받아서 그 중 최솟값을 반환합니다.",
    Query: "LEAST(value1, value2, ...)",
    Details:
      "value1, value2, ...는 비교할 값들을 나타냅니다. 이 함수는 인수로 전달된 값들 중에서 가장 작은 값을 반환합니다. 반환되는 값은 입력된 값들 중에서 실제로 가장 작은 값입니다.",
    EXQuery: "SELECT LEAST(10, 5, 8, 12, 3) AS MinValue FROM DUAL;",
    EXExplanation:
      " 10, 5, 8, 12, 3 중에서 가장 작은 값을 'MinValue'라는 별칭으로 반환합니다. 결과는 3이 될 것입니다.",
    image: six2,
  },
];

export default data6;
