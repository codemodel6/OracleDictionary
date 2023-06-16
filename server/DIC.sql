CREATE TABLESPACE DICT_TABLESPACE DATAFILE 'dic_tablespace.dbf' SIZE 100M AUTOEXTEND ON;

GRANT CREATE SESSION TO DIC;

GRANT CREATE TABLE TO DIC;

GRANT ALTER ANY TABLE TO DIC;

GRANT DROP ANY TABLE TO DIC;

GRANT SELECT ANY TABLE TO DIC;
GRANT INSERT ANY TABLE TO DIC;
GRANT UPDATE  ANY TABLE TO DIC;
GRANT DELETE  ANY TABLE TO DIC;

GRANT UNLIMITED TABLESPACE TO DIC;

CREATE TABLE DATA1 (
	name VARCHAR2(256)
);

ALTER TABLE DATA1 ADD (Explanation VARCHAR2(256), Query VARCHAR2(256), Details VARCHAR2(256));

ALTER TABLE DATA1 MODIFY (Explanation VARCHAR2(400));

ALTER TABLE DATA1 MODIFY (DETAILS VARCHAR2(300));

ALTER TABLE DATA1 ADD (EXQuery VARCHAR2(256), EXExplanation VARCHAR2(300));



SELECT table_name
FROM all_tables
WHERE owner = 'DIC';

SELECT INITCAP(*) FROM DATA1 ORDER BY
TO_NUMBER(REPLACE(SUBSTR(NAME, 3, 2),'.',''))

SELECT INITCAP(NAME), INITCAP(EXPLANATION), INITCAP(QUERY), INITCAP(DETAILS)
FROM DATA1
ORDER BY TO_NUMBER(REPLACE(SUBSTR(NAME, 3, 2), '.', ''));

SELECT *
FROM (
  SELECT *
  FROM DATA1
  ORDER BY TO_NUMBER(REPLACE(SUBSTR(DATA1, 3, 2), '.', ''))
);


SELECT TO_NUMBER(REPLACE(SUBSTR('1-1. as', 3, 2),'.','')) FROM dual;

SELECT SUBSTR('1-12. as', 3, 2) FROM dual;



INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('','','','')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-1. ABS','ABS는 숫자를 받으면 그 숫자를 절대값으로 바꿔주는 함수이다.','SELECT ABS(-15) "절대값" FROM DUAL;','DUAL은 Oracle 데이터베이스에서 사용되는 특수한 테이블이다. 실제 테이블에 엑세스 하지 않고 단일 값의 계산이나 검색이 필요한 경우 SQL 쿼리에서 사용된다. 한 개의 행과 한 개의 열만 갖는다는 특징이 있다.')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-2. ACOLS','ACOS는 받은 숫자의 역코사인값을 반환한다.','SELECT ACOS(.4)"역코싸인" FROM DUAL;','역코사인값을 반환');

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-3. ASING','ASING(n)은 n의 역사인값을 반환한다.','SELECT ASIN(.3) "역싸인" FROM DUAL;','역사인값을 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-4. ATAN2','ATAN2(n,m)은 n/m의 역탄젠트 값을 반환한다.','SELECT ATAN2(.3, .2) "Arc_Tangent2" FROM DUAL;','');

UPDATE DATA1 SET EXQuery = NULL WHERE NAME = '1-1. ABS';

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-5. BITAND','BITAND 함수는 인수1과 인수2의 대해 AND 연산을 수행하여 정수를 반환한다.','SELECT BITAND(5, 3) AS Result FROM DUAL;','AND 연산\n5 = 101\n3 = 011\n--------\n    001 -> 1')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-6. CEIL','CEIL 함수는 인수를 올림하여 정수를 구하는 함수이다.','SELECT CEIL(15.7) "Ceiling" FROM DUAL;','인수를 올림')






INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-7. COS','COS는 n의 값의 코사인값을 반환한다.','SELECT COS(180 * 3.14159265359/180) "Cosine" FROM DUAL;','코사인값을 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-8. COSH','COSH는 n의 쌍곡 코사인값을 반환한다.','SELECT COSH(0) "Hyperbolic cosine" FROM DUAL;','쌍곡 코사인값을 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-9. EXP','EXP는 e의 n제곱 값을 반환한다','SELECT EXP(4) "e의 4제곱" FROM DUAL;','n제곱 값을 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-10. FLOOR','FLOOR 함수는 인수를 내림하여 정수로 나타낸다.','SELECT FLOOR(15.7) "Floor" FROM DUAL;','인수를 내림')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-11. LN','LN함수는 입력값의 자연 로그값을 반환한다.','SELECT LN(95) "Natural log of 95" FROM DUAL;','자연 로그값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-12. LOG','LOG(m,n)은 밑을 m으로 한 n의 로그값을 반환한다.','SELECT LOG(10,100) "Log base 10 of 100" FROM DUAL;','로그값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-13. MOD','MOD(m,n)은 m을 n으로 나눈나머지 값을 반환한다.','SELECT MOD(11,4) "Modulus" FROM DUAL;','나머지 값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-14. NANVL','NANVL 함수는 NULL 값을 다른 값으로 대체하는 기능을 제공한다.','SELECT NANVL(Salary, 0) AS NewSalary FROM Employees;','SALARY 값이 NULL 이라면 NANVL 함수는 0을 반환하고 NULL이 아니라면 Salary 값을 그대로 반환한다.')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-15. POWER','POWER(m,n)는 m의 n승 값을 반환한다.','SELECT POWER(3,2) "Raised" FROM DUAL;','m의 n승 값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-16. REMAINDER','REMAINDER(m,n) 함수는 m을 n으로 나눈 나머지를 반환한다.','SELECT REMAINDER(13, 4) AS Result FROM DUAL;','나머지 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-17. ROUND','ROUND 함수는 입력값을 소수점 이하를 두 번째 인자값 기준으로 반올림하여 반환한다. 만약 두 번째 인자값을 생략하면 입력값의 소수점을 반올림한다. 소수점 왼쪽의 정수부를 반올림하기 위해 음수값을 지정할수 있다.','SELECT ROUND(15.193,1) "Round" FROM DUAL;','반올림하여 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-18. SIGN','SIGN 함수는 입력값의 부호를 반환한다. 정수면 1 음수면 –1 0이면 0을 반환한다.','SELECT SIGN(-15) "Sign" FROM DUAL;','부호를 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-19. SIN','SIN 함수는 입력값의 사인값을 반환한다.','SELECT SIN(30 * 3.14159265359/180) "Sine of 30 degrees" FROM DUAL;','사인값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-20. SQRT','SQRT 함수는 입력값의 제곱근을 반환한다.','SELECT SQRT(4) "Square root" FROM DUAL;','제곱근 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-21. TAN','TAN 함수는 입력값의 탄젠트값을 반환한다','SELECT TAN(135 * 3.14159265359/180) "Tangent of 135 degrees" FROM DUAL;','탄젠트값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-22. TANH','TANH함수는 입력값의 쌍곡선 탄젠트(hyperbolic tangent)를 반환한다','SELECT TANH(.5) "Hyperbolic tangent of .5"  FROM DUAL;','쌍곡선 탄젠트값 반환')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-23. TRUNC','TRUNC(n1,n2)함수는 인수 n1을 n2 이하를 절삭한다.','SELECT TRUNC(15.79,1) "Truncate" FROM DUAL;','만약 인수 n2를 지정하는 않는 경우, 인수 n1의 소수점 이하를 절삭한다. 만약 인수 n2가 음수인 경우는, 소수점 왼쪽의 n2자리(정수부분)에서 절삭한다.')

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS) VALUES ('1-24. WIDTH_BUCKET','WIDTH_BUCKET함수는 주어진 값의 범위 내에서 구간을 지정하는 기능을 제공한다.','SELECT WIDTH_BUCKET(7, 0, 10, 5) AS BucketNumber FROM DUAL;','0부터 10까지의 범위를 5개의 구간으로 나눈 경우 값 7이 어디있는지 알려줌')

DELETE FROM DATA1 WHERE NAME IS NULL;



CREATE TABLE DATA19 (
	name VARCHAR2(256),
	Explanation VARCHAR2(256), 
	Query VARCHAR2(256), 
	Details VARCHAR2(256),
	EXQuery VARCHAR2(256),
	EXExplanation VARCHAR2(300)
);

SELECT * FROM DATA19;

INSERT INTO DATA1 (NAME, EXPLANATION, QUERY, DETAILS, EXQuery, EXExplanation) VALUES ('','','','','','')

INSERT INTO DATA19 (NAME, EXPLANATION, QUERY, DETAILS, EXQuery, EXExplanation) VALUES ('SYS_EXTRACT_UTC','주어진 타임스탬프(날짜와 시간) 값을 협정 세계시(UTC, Coordinated Universal Time)로 변환하여 반환합니다.','SYS_EXTRACT_UTC(timestamp_value)','timestamp_value는 변환하고자 하는 타임스탬프 값입니다.','SELECT SYS_EXTRACT_UTC(SYSTIMESTAMP) AS utc_timestamp\nFROM DUAL;','SYSTIMESTAMP 함수를 사용하여 현재 타임스탬프를 가져온 다음, SYS_EXTRACT_UTC 함수를 사용하여 해당 타임스탬프를 협정 세계시(UTC)로 변환하여 출력합니다.')

INSERT INTO DATA19 (NAME, EXPLANATION, QUERY, DETAILS, EXQuery, EXExplanation) VALUES ('UPDATEXML','XML 데이터를 업데이트하는 함수입니다.','UPDATEXML(xml_data, xpath_expression, new_value)','xml_data는 업데이트할 XML 데이터입니다.\nxpath_expression은 업데이트할 XML 노드를 지정하는 XPath 표현식입니다.\nnew_value는 새로운 값을 나타내는 XML 데이터입니다.','SELECT UPDATEXML(xml_data, "/root/element", "New Value") AS updated_xml\nFROM my_table;','my_table 테이블에서 xml_data 열의 XML 데이터를 조회합니다.');
