import one1 from "../../src/image/1/1-1.png";
import one2 from "../../src/image/1/1-2.png";
import one3 from "../../src/image/1/1-3.png";
import one4 from "../../src/image/1/1-4.png";
import one5 from "../../src/image/1/1-5.png";
import one6 from "../../src/image/1/1-6.png";
import one7 from "../../src/image/1/1-7.png";
import one8 from "../../src/image/1/1-8.png";
import one9 from "../../src/image/1/1-9.png";
import one10 from "../../src/image/1/1-10.png";
import one11 from "../../src/image/1/1-11.png";
import one12 from "../../src/image/1/1-12.png";
import one13 from "../../src/image/1/1-13.png";
import one15 from "../../src/image/1/1-15.png";
import one16 from "../../src/image/1/1-16.png";
import one17 from "../../src/image/1/1-17.png";
import one18 from "../../src/image/1/1-18.png";
import one19 from "../../src/image/1/1-19.png";
import one20 from "../../src/image/1/1-20.png";
import one21 from "../../src/image/1/1-21.png";
import one22 from "../../src/image/1/1-22.png";
import one23 from "../../src/image/1/1-23.png";
import one24 from "../../src/image/1/1-24.png";

const data1 = [
  {
    Name: "1-1. ABS",
    Explanation: "ABS는 숫자를 받으면 그 숫자를 절대값으로 바꿔주는 함수이다.",
    Query: "SELECT ABS(-15) '절대값' FROM DUAL;",
    Details:
      "DUAL은 Oracle 데이터베이스에서 사용되는 특수한 테이블이다. 실제 테이블에 엑세스 하지 않고 단일 값의 계산이나 검색이 필요한 경우 SQL 쿼리에서 사용된다. 한 개의 행과 한 개의 열만 갖는다는 특징이 있다.",
    image: one1,
  },
  {
    Name: "1-2. ACOLS",
    Explanation: "ACOS는 받은 숫자의 역코사인값을 반환한다.",
    Query: "SELECT ACOS(.4)'역코싸인' FROM DUAL;",
    Details: "역코사인값을 반환",
    image: one2,
  },
  {
    Name: "1-3. ASING",
    Explanation: "ASING(n)은 n의 역사인값을 반환한다. ",
    Query: "SELECT ASIN(.3) '역싸인' FROM DUAL;",
    Details: "역사인값을 반환",
    image: one3,
  },
  {
    Name: "1-4. ATAN2",
    Explanation: "ATAN2(n,m)은 n/m의 역탄젠트 값을 반환한다.",
    Query: "SELECT ATAN2(.3, .2) 'Arc_Tangent2' FROM DUAL;",
    Details: "",
    image: one4,
  },
  {
    Name: "1-5. BITAND",
    Explanation:
      "BITAND 함수는 인수1과 인수2의 대해 AND 연산을 수행하여 정수를 반환한다.",
    Query: "SELECT BITAND(5, 3) AS Result FROM DUAL;",
    Details: "AND 연산\n5 = 101\n3 = 011\n--------\n    001 -> 1",
    image: one5,
  },
  {
    Name: "1-6. CEIL",
    Explanation: "CEIL 함수는 인수를 올림하여 정수를 구하는 함수이다.",
    Query: "SELECT CEIL(15.7) 'Ceiling' FROM DUAL;",
    Details: "인수를 올림",
    image: one6,
  },
  {
    Name: "1-7. COS",
    Explanation: "COS는 n의 값의 코사인값을 반환한다.",
    Query: "SELECT COS(180 * 3.14159265359/180) 'Cosine' FROM DUAL;",
    Details: "코사인값을 반환",
    image: one7,
  },
  {
    Name: "1-8. COSH",
    Explanation: "COSH는 n의 쌍곡 코사인값을 반환한다.",
    Query: "SELECT COSH(0) 'Hyperbolic cosine' FROM DUAL;",
    Details: "쌍곡 코사인값을 반환",
    image: one8,
  },
  {
    Name: "1-9. EXP",
    Explanation: "EXP는 e의 n제곱 값을 반환한다",
    Query: "SELECT EXP(4) 'e의 4제곱' FROM DUAL;",
    Details: "n제곱 값을 반환",
    image: one9,
  },
  {
    Name: "1-10. FLOOR",
    Explanation: "FLOOR 함수는 인수를 내림하여 정수로 나타낸다.",
    Query: "SELECT FLOOR(15.7) 'Floor' FROM DUAL;",
    Details: "인수를 내림",
    image: one10,
  },
  {
    Name: "1-11. LN",
    Explanation: "LN함수는 입력값의 자연 로그값을 반환한다.",
    Query: "SELECT LN(95) 'Natural log of 95' FROM DUAL;",
    Details: "자연 로그값 반환",
    image: one11,
  },
  {
    Name: "1-12. LOG",
    Explanation: "LOG(m,n)은 밑을 m으로 한 n의 로그값을 반환한다.",
    Query: "SELECT LOG(10,100) 'Log base 10 of 100' FROM DUAL;",
    Details: "로그값 반환",
    image: one12,
  },
  {
    Name: "1-13. MOD",
    Explanation: "MOD(m,n)은 m을 n으로 나눈나머지 값을 반환한다.",
    Query: "SELECT MOD(11,4) 'Modulus' FROM DUAL;",
    Details: "나머지 값 반환",
    image: one13,
  },
  {
    Name: "1-14. NANVL",
    Explanation: "NANVL 함수는 NULL 값을 다른 값으로 대체하는 기능을 제공한다.",
    Query: "SELECT NANVL(Salary, 0) AS NewSalary FROM Employees;",
    Details:
      "SALARY 값이 NULL 이라면 NANVL 함수는 0을 반환하고 NULL이 아니라면 Salary 값을 그대로 반환한다.",
    image: "",
  },
  {
    Name: "1-15. POWER",
    Explanation: "POWER(m,n)는 m의 n승 값을 반환한다.",
    Query: "SELECT POWER(3,2) 'Raised' FROM DUAL;",
    Details: "m의 n승 값 반환",
    image: one15,
  },
  {
    Name: "1-16. REMAINDER",
    Explanation: "REMAINDER(m,n) 함수는 m을 n으로 나눈 나머지를 반환한다.",
    Query: "SELECT REMAINDER(13, 4) AS Result FROM DUAL;",
    Details: "나머지 반환",
    image: one16,
  },
  {
    Name: "1-17. ROUND",
    Explanation:
      "ROUND 함수는 입력값을 소수점 이하를 두 번째 인자값 기준으로 반올림하여 반환한다. 만약 두 번째 인자값을 생략하면 입력값의 소수점을 반올림한다. 소수점 왼쪽의 정수부를 반올림하기 위해 음수값을 지정할수 있다.",
    Query: "SELECT ROUND(15.193,1) 'Round' FROM DUAL;",
    Details: "반올림하여 반환",
    image: one17,
  },
  {
    Name: "1-18. SIGN",
    Explanation:
      "SIGN 함수는 입력값의 부호를 반환한다. 정수면 1 음수면 –1 0이면 0을 반환한다.",
    Query: "SELECT SIGN(-15) 'Sign' FROM DUAL;",
    Details: "부호를] 반환",
    image: one18,
  },
  {
    Name: "1-19. SIN",
    Explanation: "SIN 함수는 입력값의 사인값을 반환한다.",
    Query: "SELECT SIN(30 * 3.14159265359/180) 'Sine of 30 degrees' FROM DUAL;",
    Details: "사인값 반환",
    image: one19,
  },
  {
    Name: "1-20. SQRT",
    Explanation: "SQRT 함수는 입력값의 제곱근을 반환한다.",
    Query: "SELECT SQRT(4) 'Square root' FROM DUAL;",
    Details: "제곱근 반환",
    image: one20,
  },
  {
    Name: "1-21. TAN",
    Explanation: "TAN 함수는 입력값의 탄젠트값을 반환한다",
    Query:
      "SELECT TAN(135 * 3.14159265359/180) 'Tangent of 135 degrees' FROM DUAL;",
    Details: "탄젠트값 반환",
    image: one21,
  },
  {
    Name: "1-22. TANH",
    Explanation:
      "TANH함수는 입력값의 쌍곡선 탄젠트(hyperbolic tangent)를 반환한다",
    Query: "SELECT TANH(.5) 'Hyperbolic tangent of .5'  FROM DUAL;",
    Details: "쌍곡선 탄젠트값 반환",
    image: one22,
  },
  {
    Name: "1-23. TRUNC",
    Explanation: "TRUNC(n1,n2)함수는 인수 n1을 n2 이하를 절삭한다.",
    Query: "SELECT TRUNC(15.79,1) 'Truncate' FROM DUAL;",
    Details:
      "만약 인수 n2를 지정하는 않는 경우, 인수 n1의 소수점 이하를 절삭한다. 만약 인수 n2가 음수인 경우는, 소수점 왼쪽의 n2자리(정수부분)에서 절삭한다.",
    image: one23,
  },
  {
    Name: "1-24. WIDTH_BUCKET",
    Explanation:
      "WIDTH_BUCKET함수는 주어진 값의 범위 내에서 구간을 지정하는 기능을 제공한다.",
    Query: "SELECT WIDTH_BUCKET(7, 0, 10, 5) AS BucketNumber FROM DUAL;",
    Details:
      "0부터 10까지의 범위를 5개의 구간으로 나눈 경우 값 7이 어디있는지 알려줌",
    image: one24,
  },
];

export default data1;
