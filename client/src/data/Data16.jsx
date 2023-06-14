const data16 = [
  {
    Name: "LAG",
    Explanation: "현재 행과 이전 행 간의 차이를 계산하여 반환합니다",
    Query: "LAG(expr, offset, default) OVER (ORDER BY ordering_expr)",
    Details:
      "expr은 이전 행의 값을 가져올 컬럼 또는 표현식을 지정합니다. offset은 이전 행과의 차이를 결정하는 오프셋을 나타냅니다. default은 이전 행의 값이 NULL일 경우 대체할 값을 지정합니다. ORDER BY 절을 사용하여 데이터를 정렬합니다.",
    EXQuery:
      "SELECT salary, LAG(salary, 1, 0) OVER (ORDER BY salary) AS lag_salary_diff\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값을 기준으로 정렬한 후, 각 직원의 급여 값과 이전 행의 급여 값과의 차이를 계산하여 반환합니다. LAG 함수의 오프셋을 1로 설정했으므로, 이전 행의 급여 값과 현재 행의 급여 값 간의 차이가 계산됩니다. 만약 이전 행의 급여 값이 NULL일 경우 대신 0을 사용합니다.",
  },
  {
    Name: "LEAD",
    Explanation: "현재 행과 다음 행 간의 차이를 계산하여 반환합니다.",
    Query: "LEAD(expr, offset, default) OVER (ORDER BY ordering_expr)",
    Details:
      "expr은 다음 행의 값을 가져올 컬럼 또는 표현식을 지정합니다. offset은 다음 행과의 차이를 결정하는 오프셋을 나타냅니다. default은 다음 행의 값이 NULL일 경우 대체할 값을 지정합니다. ORDER BY 절을 사용하여 데이터를 정렬합니다.",
    EXQuery:
      "SELECT salary, LEAD(salary, 1, 0) OVER (ORDER BY salary) AS lead_salary_diff\nFROM employees;",
    EXExplanation:
      " employees 테이블의 salary 컬럼 값을 기준으로 정렬한 후, 각 직원의 급여 값과 다음 행의 급여 값과의 차이를 계산하여 반환합니다. LEAD 함수의 오프셋을 1로 설정했으므로, 다음 행의 급여 값과 현재 행의 급여 값 간의 차이가 계산됩니다. 만약 다음 행의 급여 값이 NULL일 경우 대신 0을 사용합니다.",
  },
  {
    Name: "NTILE",
    Explanation:
      "정렬된 결과 집합을 지정된 수의 동일한 크기로 나누고, 각 그룹에 번호를 할당합니다.",
    Query: "NTILE(n) OVER (ORDER BY ordering_expr)",
    Details:
      "n은 결과를 몇 개의 그룹으로 분할할지를 지정하는 정수입니다. ORDER BY 절을 사용하여 데이터를 정렬합니다.",
    EXQuery:
      "SELECT salary, NTILE(4) OVER (ORDER BY salary) AS ntile_group\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값을 기준으로 정렬한 후, 각 직원의 급여 값을 4개의 동등한 그룹으로 분할하고, 각 직원이 속한 그룹에 대한 번호를 반환합니다. NTILE 함수의 인수를 4로 설정했으므로, 결과는 1부터 4까지의 번호로 표시됩니다.",
  },
  {
    Name: "ROW_NUMBER",
    Explanation: "결과 집합의 각 행에 대해 순차적인 번호를 할당합니다",
    Query: "ROW_NUMBER() OVER (ORDER BY ordering_expr)",
    Details:
      "ORDER BY 절을 사용하여 데이터를 정렬하며, ORDER BY 절을 생략하면 기본적으로 정렬되지 않은 순서로 번호가 할당됩니다.",
    EXQuery:
      "SELECT ROW_NUMBER() OVER (ORDER BY employee_id) AS row_num, employee_id, first_name, last_name\nFROM employees;",
    EXExplanation:
      "employees 테이블의 모든 직원을 employee_id 기준으로 정렬한 후, 각 직원에 대해 순차적인 번호(row_num)를 할당합니다. ROW_NUMBER 함수는 ORDER BY employee_id로 지정했으므로, 결과는 employee_id를 기준으로 오름차순으로 정렬된 번호가 할당됩니다.",
  },
];

export default data16;
