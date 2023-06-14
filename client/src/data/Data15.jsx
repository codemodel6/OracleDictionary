const data15 = [
  {
    Name: "AVG",
    Explanation: "주어진 열의 평균 값을 계산하여 반환합니다",
    Query: "AVG(column)",
    Details: "column은 평균 값을 계산하고자 하는 열 또는 숫자 표현식입니다.",
    EXQuery: "SELECT AVG(salary) AS average_salary\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 열의 평균 값을 계산하여 average_salary 열로 출력합니다.",
  },
  {
    Name: "COLLECT",
    Explanation: "여러 행의 값을 그룹화하여 컬렉션 데이터형으로 반환합니다.",
    Query: "COLLECT(expression)",
    Details: "expression은 그룹화된 값을 나타내는 열 또는 표현식입니다.",
    EXQuery:
      "SELECT DEPARTMENT_ID, COLLECT(EMPLOYEE_NAME) AS EMPLOYEE_NAMES\nFROM DEPARTMENT\nGROUP BY DEPARTMENT_ID;",
    EXExplanation:
      "DEPARTMENT 테이블의 EMPLOYEE_NAME 열을 DEPARTMENT_ID로 그룹화하고, COLLECT 함수를 사용하여 해당 그룹의 EMPLOYEE_NAME 값을 EMPLOYEE_NAMES 컬렉션으로 수집합니다. 그룹별로 EMPLOYEE_NAMES 컬렉션을 출력합니다.",
  },
  {
    Name: "COUNT",
    Explanation: "특정 열 또는 표현식이나 그룹의 행 수를 계산하여 반환합니다.",
    Query: "COUNT(expression)",
    Details:
      "expression은 개수를 세고자 하는 열 또는 표현식입니다. COUNT 함수는 NULL 값을 포함하여 모든 행의 개수를 반환합니다.",
    EXQuery: "SELECT COUNT(*) AS total_count \nFROM employees;",
    EXExplanation:
      "employees 테이블의 모든 행의 개수를 계산하여 total_count 열로 출력합니다.",
  },
  {
    Name: "COVAR_POP",
    Explanation:
      "두 개의 열 간의 모집단 공분산(population covariance)을 계산합니다. 공분산은 두 변수 간의 관계 강도와 방향성을 나타내는 통계적 측정 값입니다.",
    Query: "COVAR_POP(column1, column2)",
    Details: "column1과 column2는 공분산을 계산하려는 열입니다.",
    EXQuery:
      "SELECT COVAR_POP(salary, commission_pct) AS population_covariance\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 열과 commission_pct 열의 모집단 공분산을 계산하여 population_covariance 열로 출력합니다.",
  },
  {
    Name: "COVAR_SAMP",
    Explanation:
      "두 개의 열 간의 표본 공분산(sample covariance)을 계산합니다. 공분산은 두 변수 간의 관계 강도와 방향성을 나타내는 통계적 측정 값입니다.",
    Query: "COVAR_SAMP(column1, column2)",
    Details: "column1과 column2는 표본 공분산을 계산하려는 열입니다.",
    EXQuery:
      "SELECT COVAR_SAMP(salary, commission_pct) AS sample_covariance\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 열과 commission_pct 열의 표본 공분산을 계산하여 sample_covariance 열로 출력합니다.",
  },
  {
    Name: "CUME_DIST",
    Explanation:
      "주어진 열의 값이 정렬된 순서에서 얼마나 누적적으로 분포되는지를 계산합니다.",
    Query: "CUME_DIST() OVER (ORDER BY column)",
    Details:
      "column은 분포를 계산하고자 하는 열입니다. CUME_DIST 함수는 ORDER BY 절을 통해 열을 정렬하고, 해당 열을 기준으로 누적 분포를 계산합니다. 주로 PARTITION BY 절과 함께 사용하여 그룹별로 누적 분포를 계산할 수도 있습니다.",
    EXQuery:
      "SELECT salary, CUME_DIST() OVER (ORDER BY salary) AS cumulative_distribution\nFROM employees;",
    EXExplanation:
      " employees 테이블의 salary 열을 기준으로 정렬하고, 해당 열의 누적 분포를 계산하여 cumulative_distribution 열로 출력합니다.",
  },
  {
    Name: "DENSE_RANK",
    Explanation:
      "주어진 열의 값에 대해 밀집 순위(dense rank)를 계산합니다. 밀집 순위는 동일한 값들에 대해 중복 순위를 허용하며, 순위 값 사이를 비워두지 않고 연속적으로 할당합니다.",
    Query: "DENSE_RANK() OVER (ORDER BY column)",
    Details:
      "column은 순위를 계산하고자 하는 열입니다. DENSE_RANK 함수는 ORDER BY 절을 통해 열을 정렬하고, 해당 열을 기준으로 밀집 순위를 계산합니다. PARTITION BY 절과 함께 사용하여 그룹별로 밀집 순위를 계산할 수도 있습니다.",
    EXQuery:
      "SELECT salary, DENSE_RANK() OVER (ORDER BY salary) AS dense_rank\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 열을 기준으로 정렬하고, 해당 열의 밀집 순위를 계산하여 dense_rank 열로 출력합니다.",
  },
  {
    Name: "FIRST",
    Explanation: "그룹 내에서 첫 번째로 나타나는 값 하나를 선택합니다.",
    Query: "FIRST(column) WITHIN GROUP (ORDER BY expression)",
    Details:
      "column은 반환할 값을 나타내는 열이며, expression은 정렬 순서를 지정하는 표현식입니다.",
    EXQuery:
      "SELECT job_id, FIRST(last_name) WITHIN GROUP (ORDER BY hire_date) AS first_employee\nFROM employees\nGROUP BY job_id;",
    EXExplanation:
      "employees 테이블을 job_id로 그룹화하고, 각 그룹 내에서 hire_date를 기준으로 가장 먼저 입사한 직원의 last_name을 first_employee 열로 반환합니다.",
  },
  {
    Name: "GROUP_ID",
    Explanation:
      "그룹 내에서 각 행이 속하는 그룹의 고유한 식별자를 반환합니다.",
    Query: "GROUP_ID() OVER (ORDER BY expression)",
    Details:
      "expression은 그룹 식별자를 결정하는 기준이 되는 표현식입니다. 일반적으로 ORDER BY 절을 통해 그룹화 기준을 정렬하여 순서를 부여합니다.",
    EXQuery:
      "SELECT salary, GROUP_ID() OVER (ORDER BY salary) AS group_id\nFROM employees;",
    EXExplanation:
      "employees 테이블을 salary 열을 기준으로 그룹화하고, 각 그룹의 고유한 그룹 식별자를 group_id 열로 반환합니다. 그룹 식별자는 salary가 작은 그룹부터 큰 그룹까지 순서대로 할당됩니다.",
  },
  {
    Name: "GROUPING",
    Explanation:
      "그룹화된 결과에서 NULL 값을 나타내는 행 또는 컬럼에 대해 그룹화 마스킹 값을 반환합니다. ",
    Query: "GROUPING(column)",
    Details: "column은 NULL 값을 포함하는 그룹화된 열입니다.",
    EXQuery:
      "SELECT job_id, department_id, GROUPING(job_id) AS job_id_grouping, GROUPING(department_id) AS department_id_grouping\nFROM employees\nGROUP BY ROLLUP(job_id, department_id);",
    EXExplanation:
      "employees 테이블을 job_id와 department_id로 그룹화하고, 각 그룹화된 열에 대해 GROUPING 함수를 사용하여 마스킹 값을 생성합니다. 그룹화된 열이 NULL 값을 가지는 경우 해당 열에 대한 마스킹 값이 1로 설정됩니다.",
  },
  {
    Name: "GROUPING_ID",
    Explanation:
      "그룹화된 결과에서 여러 열에 대한 그룹화 마스킹 값을 반환합니다.",
    Query: "GROUPING_ID(column1, column2, ...)",
    Details: "column1, column2, ...은 그룹화된 열들입니다.",
    EXQuery:
      "SELECT job_id, department_id, GROUPING_ID(job_id, department_id) AS grouping_id\nFROM employees\nGROUP BY ROLLUP(job_id, department_id);",
    EXExplanation:
      "employees 테이블을 job_id와 department_id로 그룹화하고, GROUPING_ID 함수를 사용하여 각 그룹화된 열들의 마스킹 값을 생성합니다. 그룹화된 열이 NULL 값을 가지는 경우 해당 열에 대한 마스킹 값이 1로 설정되고, 그룹화되지 않은 열에 대해서는 마스킹 값이 2로 설정됩니다.",
  },
  {
    Name: "LAST",
    Explanation: "그룹 내에서 마지막으로 나타나는 값을 반환합니다.",
    Query: "LAST(expression) KEEP (DENSE_RANK LAST ORDER BY order_expression)",
    Details:
      "expression은 추출하고자 하는 값을 나타내는 표현식입니다. order_expression은 행의 순서를 결정하는 기준이 되는 표현식입니다.",
    EXQuery:
      "SELECT department_id, LAST(salary) KEEP (DENSE_RANK LAST ORDER BY salary) AS last_salary\nFROM employees\nGROUP BY department_id;",
    EXExplanation:
      " employees 테이블을 department_id로 그룹화하고, LAST 함수를 사용하여 각 그룹 내에서 salary가 가장 큰 마지막 행의 salary 값을 추출합니다. KEEP 절을 사용하여 마지막 값을 결정하는 기준을 지정하고, DENSE_RANK LAST를 사용하여 가장 큰 값을 선택합니다.",
  },
  {
    Name: "MAX",
    Explanation: "그룹 내에서 가장 큰 값을 반환합니다.",
    Query: "MAX(expression)",
    Details: "expression은 최댓값을 찾고자 하는 열 또는 표현식입니다.",
    EXQuery:
      "SELECT department_id, MAX(salary) AS max_salary\nFROM employees\nGROUP BY department_id;",
    EXExplanation:
      " employees 테이블을 department_id로 그룹화하고, MAX 함수를 사용하여 각 그룹 내에서 가장 높은 salary 값을 추출합니다. GROUP BY 절을 통해 그룹화를 정의하고, MAX 함수를 사용하여 각 그룹의 최댓값을 계산합니다.",
  },
  {
    Name: "MEDIAN",
    Explanation: "그룹 내에서 중간값(median)을 반환합니다.",
    Query: "MEDIAN(expression)",
    Details: "expression은 중간값을 계산하고자 하는 열 또는 표현식입니다.",
    EXQuery: "SELECT MEDIAN(salary) AS median_salary\nFROM employees;",
    EXExplanation:
      "employees 테이블의 모든 행에서 salary 열의 중간값을 계산하여 반환합니다. 중간값은 데이터가 정렬되지 않은 경우에도 정확히 계산됩니다.",
  },
  {
    Name: "MIN",
    Explanation: "그룹 내에서 가장 작은 값을 반환합니다.",
    Query: "MIN(expression)",
    Details: "expression은 최솟값을 찾고자 하는 열 또는 표현식입니다.",
    EXQuery:
      "SELECT department_id, MIN(salary) AS min_salary\nFROM employees\nGROUP BY department_id;",
    EXExplanation:
      "employees 테이블을 department_id로 그룹화하고, MIN 함수를 사용하여 각 그룹 내에서 가장 작은 salary 값을 추출합니다. GROUP BY 절을 통해 그룹화를 정의하고, MIN 함수를 사용하여 각 그룹의 최솟값을 계산합니다.",
  },
  {
    Name: "PERCENT_RANK",
    Explanation:
      "결과 집합 내에서 각 행의 백분위 순위를 계산합니다. PERCENT_RANK는 0부터 1 사이의 값을 반환하며, 값이 작을수록 순위가 낮고 값이 클수록 순위가 높습니다.",
    Query: "PERCENT_RANK() OVER (ORDER BY expression [ASC|DESC])",
    Details:
      "expression은 백분위 순위를 계산하고자 하는 열 또는 표현식입니다. ORDER BY 절을 통해 정렬 순서를 지정할 수 있으며, ASC(오름차순) 또는 DESC(내림차순)으로 지정할 수 있습니다.",
    EXQuery:
      "SELECT salary, PERCENT_RANK() OVER (ORDER BY salary) AS percent_rank\nFROM employees;",
    EXExplanation:
      " employees 테이블의 모든 행에 대해 salary 열의 백분위 순위를 계산하여 반환합니다. ORDER BY 절을 사용하여 salary를 기준으로 정렬하고, PERCENT_RANK 함수를 사용하여 각 행의 백분위 순위를 계산합니다.",
  },
  {
    Name: "PERCENTILE_CONT",
    Explanation:
      "지정된 백분위수에 해당하는 값(continuous value)을 계산합니다.",
    Query:
      "PERCENTILE_CONT(percentile) WITHIN GROUP (ORDER BY expression [ASC|DESC])",
    Details:
      "percentile은 원하는 백분위수를 나타내며, 0부터 1 사이의 값을 사용합니다. expression은 값을 계산하고자 하는 열 또는 표현식입니다.",
    EXQuery:
      "SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER () AS percentile_value\nFROM employees;",
    EXExplanation:
      " employees 테이블의 모든 행에 대해 salary 열의 50% 백분위수에 해당하는 값을 계산하여 반환합니다. ORDER BY 절을 사용하여 salary를 기준으로 정렬하고, PERCENTILE_CONT 함수를 사용하여 50% 백분위수에 해당하는 값을 계산합니다.",
  },
  {
    Name: "PERCENTILE_DISC",
    Explanation: "지정된 백분위수에 해당하는 값(discrete value)을 계산합니다",
    Query:
      "PERCENTILE_DISC(percentile) WITHIN GROUP (ORDER BY expression [ASC|DESC])",
    Details:
      "percentile은 원하는 백분위수를 나타내며, 0부터 1 사이의 값을 사용합니다. expression은 값을 계산하고자 하는 열 또는 표현식입니다.",
    EXQuery:
      "SELECT PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY salary) OVER () AS percentile_value\nFROM employees;",
    EXExplanation:
      "employees 테이블의 모든 행에 대해 salary 열의 50% 백분위수에 해당하는 값을 계산하여 반환합니다. ORDER BY 절을 사용하여 salary를 기준으로 정렬하고, PERCENTILE_DISC 함수를 사용하여 50% 백분위수에 해당하는 값을 계산합니다.",
  },
  {
    Name: "RANK",
    Explanation: "결과 집합 내에서 각 행의 순위를 계산합니다.",
    Query: "RANK() OVER (ORDER BY expression [ASC|DESC])",
    Details:
      "expression은 순위를 계산하고자 하는 열 또는 표현식입니다. ORDER BY 절을 통해 정렬 순서를 지정할 수 있으며, ASC(오름차순) 또는 DESC(내림차순)으로 지정할 수 있습니다.",
    EXQuery:
      "SELECT salary, RANK() OVER (ORDER BY salary DESC) AS rank\nFROM employees;",
    EXExplanation:
      "employees 테이블의 모든 행에 대해 salary 열을 기준으로 내림차순으로 정렬하여 순위를 계산합니다. RANK 함수를 사용하여 각 행의 순위를 반환합니다.",
  },
  {
    Name: "STATS_BINOMIAL_TEST",
    Explanation:
      "이항 분포의 통계적 가설 검정을 수행합니다. 이항 분포는 성공/실패 두 가지 결과를 가지는 이벤트를 다룰 때 사용되는 확률 분포입니다.",
    Query: "STATS_BINOMIAL_TEST(p, n, alpha, tail_type)",
    Details:
      "p: 성공 확률입니다.\nn: 시행 횟수입니다.\nalpha: 유의 수준입니다. 가설 검정의 임계값을 지정하는데 사용됩니다.\ntail_type: 귀무가설을 기각하는 방향을 지정합니다. 'B' (both), 'L' (lower), 'U' (upper) 중 하나를 선택할 수 있습니다.",
    EXQuery:
      "SELECT STATS_BINOMIAL_TEST(0.5, 100, 0.05, 'B') AS test_result\nFROM dual;",
    EXExplanation:
      "앞면이 나올 확률이 0.5인 동전을 100번 던지고, 유의 수준 0.05로 양측 검정을 수행합니다. STATS_BINOMIAL_TEST 함수는 가설 검정 결과를 반환합니다.",
  },
  {
    Name: "STATS_CROSSTAB",
    Explanation:
      "교차표(Cross Tabulation)을 생성하는데 사용됩니다. 교차표는 두 개 이상의 변수를 기준으로 데이터를 요약하여 표 형태로 나타내는 방법입니다.",
    Query: "STATS_CROSSTAB(expr, row_dim, column_dim)",
    Details:
      "expr: 교차표를 생성할 수식 또는 컬럼을 지정합니다.\nrow_dim: 행으로 사용할 변수를 지정합니다.\ncolumn_dim: 열로 사용할 변수를 지정합니다.",
    EXQuery:
      "SELECT *\nFROM TABLE(STATS_CROSSTAB(job_id, department_id, job_id)) AS crosstab_data;",
    EXExplanation:
      "job_id를 행으로, department_id를 열로 사용하여 교차표를 생성합니다. STATS_CROSSTAB 함수는 교차표의 결과를 테이블 형태로 반환합니다.",
  },
  {
    Name: "STATS_F_TEST",
    Explanation:
      " F-검정(F-Test)을 수행하여 두 개의 모집단이 같은 분산을 가지는지 여부를 검정합니다. F-검정은 두 개 이상의 집단 간 분산 차이를 비교하는 통계적 검정 방법입니다.",
    Query: "STATS_F_TEST(expr1, expr2)",
    Details:
      "expr1: 첫 번째 모집단을 나타내는 수식 또는 컬럼을 지정합니다.\nexpr2: 두 번째 모집단을 나타내는 수식 또는 컬럼을 지정합니다.",
    EXQuery:
      "SELECT STATS_F_TEST(salary, commission_pct) AS f_test_result\nFROM employees;",
    EXExplanation:
      "salary와 commission_pct 열을 비교하여 두 모집단의 분산 차이에 대한 F-검정을 수행합니다. STATS_F_TEST 함수는 F-검정의 결과를 반환합니다.",
  },
  {
    Name: "STATS_KS_TEST",
    Explanation:
      "두 개의 샘플이 동일한 분포를 따르는지 여부를 검정하는 Kolmogorov-Smirnov(KS) 검정을 수행합니다. KS 검정은 두 개의 분포를 비교하여 두 분포가 통계적으로 유의하게 다른지를 평가하는 비모수적인 검정 방법입니다.",
    Query: "STATS_KS_TEST(expr1, expr2)",
    Details:
      "expr1: 첫 번째 샘플을 나타내는 수식 또는 컬럼을 지정합니다.\nexpr2: 두 번째 샘플을 나타내는 수식 또는 컬럼을 지정합니다.",
    EXQuery:
      "SELECT STATS_KS_TEST(salary, commission_pct) AS ks_test_result\nFROM employees;",
    EXExplanation:
      "salary와 commission_pct 열의 분포를 비교하여 KS 검정을 수행합니다. STATS_KS_TEST 함수는 KS 검정의 결과를 반환합니다.",
  },
  {
    Name: "STATS_MODE",
    Explanation:
      "주어진 데이터 집합에서 가장 빈번하게 나타나는 값을 반환합니다. 즉, 최빈값(Mode)을 계산하는 데 사용됩니다.",
    Query: "STATS_MODE(expr)",
    Details: "expr: 최빈값을 계산할 수식 또는 컬럼을 지정합니다.",
    EXQuery: "SELECT STATS_MODE(job_id) AS mode_job_id\nFROM employees;",
    EXExplanation:
      "job_id 열의 값들 중에서 가장 빈번하게 등장하는 값을 계산하여 반환합니다. STATS_MODE 함수는 최빈값을 반환합니다.",
  },
  {
    Name: "STATS_MW_TEST",
    Explanation:
      " Mann-Whitney U 검정을 수행하여 두 개의 독립된 그룹 간의 위치 차이가 통계적으로 유의미한지를 평가합니다. Mann-Whitney U 검정은 비모수적인 검정 방법으로, 두 개의 그룹 간에 중앙값 차이가 있는지를 비교합니다.",
    Query: "STATS_MW_TEST(expr1, expr2)",
    Details:
      "expr1: 첫 번째 그룹을 나타내는 수식 또는 컬럼을 지정합니다.\nexpr2: 두 번째 그룹을 나타내는 수식 또는 컬럼을 지정합니다.",
    EXQuery:
      "SELECT STATS_MW_TEST(salary, 'A') AS mw_test_result\nFROM employees;",
    EXExplanation:
      "salary 열을 기준으로 'A' 그룹과 그 외 그룹으로 나눈 후, 두 그룹 간의 위치 차이에 대한 Mann-Whitney U 검정을 수행합니다. STATS_MW_TEST 함수는 검정 결과를 반환합니다.",
  },
  {
    Name: "STATS_ONE_WAY_ANOVA",
    Explanation:
      "일원 분산분석(One-Way ANOVA)을 수행하여 여러 그룹 간의 평균 차이가 통계적으로 유의미한지를 평가합니다. 일원 분산분석은 그룹 간의 차이가 있는지를 비교하기 위해 사용되는 통계적인 방법입니다.",
    Query: "STATS_ONE_WAY_ANOVA(expr, group)",
    Details:
      "expr: 분석할 수식 또는 컬럼을 지정합니다.\ngroup: 그룹을 식별하는 수식 또는 컬럼을 지정합니다.",
    EXQuery:
      "SELECT STATS_ONE_WAY_ANOVA(salary, job_id) AS anova_result\nFROM employees;",
    EXExplanation:
      "salary 열을 기준으로 job_id에 따른 여러 그룹으로 나눈 후, 그룹 간의 평균 차이에 대한 일원 분산분석을 수행합니다. STATS_ONE_WAY_ANOVA 함수는 분석 결과를 반환합니다.",
  },
  {
    Name: "STATS_WSR_TEST",
    Explanation:
      "Wilcoxon 서명-순위(Wilcoxon Signed-Rank) 검정을 수행하여 데이터 집합의 중앙값이 특정 값과 다른지를 평가합니다. Wilcoxon 서명-순위 검정은 비모수적인 검정 방법으로, 한 집단의 중앙값이 특정 값과 다른지를 비교합니다.",
    Query: "STATS_WSR_TEST(expr, ref_val)",
    Details:
      "expr: 검정할 수식 또는 컬럼을 지정합니다.\nref_val: 비교할 값(참조 값)을 지정합니다.",
    EXQuery:
      "SELECT STATS_WSR_TEST(salary, 3000) AS wsr_test_result\nFROM employees;",
    EXExplanation:
      "salary 열의 값과 3000이라는 특정 값과의 중앙값 차이에 대한 Wilcoxon 서명-순위 검정을 수행합니다. STATS_WSR_TEST 함수는 검정 결과를 반환합니다.",
  },
  {
    Name: "STDDEV",
    Explanation: "주어진 숫자 집합의 표준 편차를 계산하여 반환합니다.",
    Query: "STDDEV(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. STDDEV 함수는 주어진 숫자 집합의 표준 편차를 계산하여 반환합니다.",
    EXQuery: "SELECT STDDEV(salary) AS salary_stddev\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 표준 편차를 계산하여 반환합니다. STDDEV 함수는 계산된 표준 편차 값을 salary_stddev 컬럼으로 출력합니다.",
  },
  {
    Name: "STDDEV_POP",
    Explanation:
      "주어진 숫자 집합의 모집단 표준 편차를 계산하여 반환합니다. 모집단 표준 편차는 전체 모집단에 대한 표준 편차를 나타냅니다.",
    Query: "STDDEV_POP(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. STDDEV_POP 함수는 주어진 숫자 집합의 모집단 표준 편차를 계산하여 반환합니다.",
    EXQuery: "SELECT STDDEV_POP(salary) AS salary_stddev_pop\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 모집단 표준 편차를 계산하여 반환합니다. STDDEV_POP 함수는 계산된 모집단 표준 편차 값을 salary_stddev_pop 컬럼으로 출력합니다.",
  },
  {
    Name: "STDDEV_SAMP",
    Explanation: "주어진 숫자 집합의 표본 표준 편차를 계산하여 반환합니다.",
    Query: "STDDEV_SAMP(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. STDDEV_SAMP 함수는 주어진 숫자 집합의 표본 표준 편차를 계산하여 반환합니다.",
    EXQuery:
      "SELECT STDDEV_SAMP(salary) AS salary_stddev_samp\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 표본 표준 편차를 계산하여 반환합니다. STDDEV_SAMP 함수는 계산된 표본 표준 편차 값을 salary_stddev_samp 컬럼으로 출력합니다.",
  },
  {
    Name: "SUM",
    Explanation: "주어진 숫자 집합의 합계를 계산하여 반환합니다.",
    Query: "SUM(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. SUM 함수는 주어진 숫자 집합의 합계를 계산하여 반환합니다.",
    EXQuery: "SELECT SUM(salary) AS total_salary\nmFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 합계를 계산하여 반환합니다. SUM 함수는 계산된 합계 값을 total_salary 컬럼으로 출력합니다.",
  },
  {
    Name: "VAR_POP",
    Explanation: "주어진 숫자 집합의 모집단 분산을 계산하여 반환합니다.",
    Query: "VAR_POP(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. VAR_POP 함수는 주어진 숫자 집합의 모집단 분산을 계산하여 반환합니다.",
    EXQuery: "SELECT VAR_POP(salary) AS salary_var_pop\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 모집단 분산을 계산하여 반환합니다. VAR_POP 함수는 계산된 모집단 분산 값을 salary_var_pop 컬럼으로 출력합니다.",
  },
  {
    Name: "VAR_SAMP",
    Explanation: "주어진 숫자 집합의 표본 분산을 계산하여 반환합니다.",
    Query: "VAR_SAMP(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. VAR_SAMP 함수는 주어진 숫자 집합의 표본 분산을 계산하여 반환합니다.",
    EXQuery: "SELECT VAR_SAMP(salary) AS salary_var_samp\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 표본 분산을 계산하여 반환합니다. VAR_SAMP 함수는 계산된 표본 분산 값을 salary_var_samp 컬럼으로 출력합니다.",
  },
  {
    Name: "VARIANCE",
    Explanation: "주어진 숫자 집합의 분산을 계산하여 반환합니다.",
    Query: "VARIANCE(expr)",
    Details:
      "expr은 숫자 값을 나타내는 수식 또는 컬럼을 지정합니다. VARIANCE 함수는 주어진 숫자 집합의 분산을 계산하여 반환합니다.",
    EXQuery: "SELECT VARIANCE(salary) AS salary_variance\nFROM employees;",
    EXExplanation:
      "employees 테이블의 salary 컬럼 값들의 분산을 계산하여 반환합니다.",
  },
];

export default data15;
