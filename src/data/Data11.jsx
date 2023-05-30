const data11 = [
  {
    Name: "DEPTH",
    Explanation:
      "오라클에서 계층적인 데이터 구조에서 특정 노드의 깊이(깊이 수준)를 계산하는 함수입니다. ",
    Query: "DEPTH",
    Details:
      "현재 노드의 깊이를 반환합니다. CONNECT BY 절에서 사용되는 각 노드의 깊이에 대한 정보를 확인할 수 있습니다. 깊이는 루트 노드를 1로 시작하여 하위 레벨로 내려갈수록 증가합니다.",
    EXQuery:
      "SELECT EMPLOYEE_ID, EMPLOYEE_NAME, DEPTH\nFROM EMPLOYEE\nSTART WITH EMPLOYEE_ID = :employee_id\nCONNECT BY PRIOR EMPLOYEE_ID = MANAGER_ID;",
    EXExplanation:
      " EMPLOYEE_ID가 주어진 특정 직원의 깊이를 조회합니다. DEPTH 함수는 각 노드의 깊이를 반환하여 결과에 표시됩니다.",
  },
  {
    Name: "EXISTSNODE",
    Explanation:
      "특정 경로에 노드가 존재하는지 여부를 확인하는 함수입니다. 이 함수는 XMLType 데이터형과 함께 사용됩니다.",
    Query: "EXISTSNODE(xml_expression, xpath_expression, namespace)",
    Details:
      "xml_expression은 XML 데이터를 나타내는 XMLType 열이나 리터럴입니다.\nxpath_expression은 검사할 XPath 식입니다.\nnamespace는 옵션으로, XPath 식에서 사용되는 네임스페이스를 지정할 수 있습니다.",
    EXQuery:
      "SELECT EXISTSNODE(xmltype('<books><book>Book 1</book><book>Book 2</book></books>'),\n'/books/book') AS exists_node\nFROM dual;",
    EXExplanation:
      "XML 데이터에서 '/books/book' XPath 식에 해당하는 노드가 존재하는지 확인합니다. EXISTSNODE 함수는 결과로 1(true)을 반환합니다.",
  },
  {
    Name: "EXTRACT (XML)",
    Explanation: "XML 데이터형에서 특정 노드의 값을 추출하는 함수입니다.",
    Query: "EXTRACT(xml_expression, xpath_expression, namespace)",
    Details:
      "xml_expression은 XML 데이터를 나타내는 XMLType 열이나 리터럴입니다.\nxpath_expression은 추출할 XPath 식입니다.\nnamespace는 옵션으로, XPath 식에서 사용되는 네임스페이스를 지정할 수 있습니다.",
    EXQuery:
      "SELECT EXTRACT(xmltype('<book><title>Book 1</title><author>Author 1</author></book>'),\n'/book/author') AS extracted_value\nFROM dual;",
    EXExplanation:
      "XML 데이터에서 '/book/author' XPath 식에 해당하는 노드의 값을 추출합니다.",
  },
  {
    Name: "EXTRACTVALUE",
    Explanation:
      "XML 데이터형에서 특정 노드의 값을 추출하는 함수입니다. 이 함수는 XML 데이터를 문자열로 반환합니다.",
    Query: "EXTRACTVALUE(xml_expression, xpath_expression)",
    Details:
      "xml_expression은 XML 데이터를 나타내는 XMLType 열이나 리터럴입니다.\nxpath_expression은 추출할 XPath 식입니다.",
    EXQuery:
      "SELECT EXTRACTVALUE(xmltype('<book><title>Book 1</title><author>Author 1</author></book>'),\n'/book/author') AS extracted_value\nFROM dual;",
    EXExplanation:
      "XML 데이터에서 '/book/author' XPath 식에 해당하는 노드의 값을 추출합니다. EXTRACTVALUE 함수는 결과로 'Author 1'이라는 문자열 값을 반환합니다.",
  },
  {
    Name: "PATH",
    Explanation:
      "계층 구조 데이터를 쿼리할 때, 특정 노드의 경로를 반환하는 함수입니다. 이 함수는 WITH 절과 함께 사용되며, 각 노드의 경로 정보를 확인할 수 있습니다.",
    Query: "PATH(column) AS alias",
    Details:
      "column은 경로 정보를 추출할 열입니다.\nalias은 경로 정보를 담을 결과 열의 별칭입니다.",
    EXQuery:
      "WITH hierarchy AS (\nSELECT EMPLOYEE_ID, EMPLOYEE_NAME, MANAGER_ID, LEVEL\nFROM EMPLOYEE\nSTART WITH MANAGER_ID IS NULL\nCONNECT BY PRIOR EMPLOYEE_ID = MANAGER_ID\n)\nSELECT EMPLOYEE_ID, EMPLOYEE_NAME, LEVEL, PATH(EMPLOYEE_NAME) AS PATH\nFROM hierarchy;",
    EXExplanation:
      "EMPLOYEE 테이블을 계층적으로 조회하면서 각 노드의 경로 정보를 추출합니다. PATH 함수는 결과에 경로 정보를 담은 열을 추가하여 반환합니다.",
  },
  {
    Name: "SYS_DBURIGEN",
    Explanation:
      "Uniform Resource Identifier (URI)를 생성하는 데 사용됩니다. URI는 웹 리소스를 식별하는 데 사용되는 표준화된 문자열입니다.",
    Query: "SYS_DBURIGEN(base_string, sub_type)",
    Details:
      "base_string은 URI의 기본 문자열로, 일반적으로 웹 사이트 주소나 리소스 경로와 같은 문자열입니다.\nsub_type은 옵션으로, 생성할 URI의 하위 유형을 지정하는 문자열입니다.",
    EXQuery:
      "SELECT SYS_DBURIGEN('https://www.example.com') AS uri\nFROM dual;",
    EXExplanation:
      "'https://www.example.com'을 기반으로 URI를 생성하고, 결과로 해당 URI를 반환합니다.",
  },
  {
    Name: "SYS_XMLAGG",
    Explanation:
      "XML 데이터를 집계하는 데 사용되는 함수입니다. 이 함수는 XML 데이터형을 생성하여 여러 행의 데이터를 결합하는 데 유용합니다.",
    Query: "SYS_XMLAGG(expr)",
    Details: "expr은 XML 데이터형으로 변환할 열 또는 표현식입니다.",
    EXQuery:
      "SELECT DEPARTMENT_ID, SYS_XMLAGG(XMLELEMENT('Employee', XMLATTRIBUTES(EMPLOYEE_ID AS 'id'), EMPLOYEE_NAME)).getClobVal() AS xml_data\nFROM EMPLOYEE\nGROUP BY DEPARTMENT_ID;",
    EXExplanation:
      "EMPLOYEE 테이블을 DEPARTMENT_ID로 그룹화하고, 각 그룹의 EMPLOYEE_ID와 EMPLOYEE_NAME을 XML 데이터형으로 변환하여 집계합니다. SYS_XMLAGG 함수는 각 그룹의 XML 값을 결합하여 최종 결과를 반환합니다.",
  },
  {
    Name: "SYS_XMLGEN",
    Explanation:
      "XML 데이터를 생성하는 데 사용되는 함수입니다. 이 함수는 테이블의 데이터를 XML 형식으로 변환하여 반환하거나, SQL 쿼리의 결과를 XML 형태로 출력하는 데 유용합니다.",
    Query: "SYS_XMLGEN(query)",
    Details: "query는 XML로 변환할 데이터를 선택하는 SQL 쿼리입니다.",
    EXQuery:
      "SELECT SYS_XMLGEN(SELECT * FROM EMPLOYEE) AS xml_data\nFROM dual;",
    EXExplanation:
      "EMPLOYEE 테이블의 모든 데이터를 선택하여 SYS_XMLGEN 함수를 사용하여 XML 형식으로 변환합니다. 결과로 XML 데이터형의 값이 반환됩니다.",
  },
  {
    Name: "XMLAGG",
    Explanation:
      " XML 데이터를 집계하는 데 사용되는 함수입니다. 이 함수는 여러 행의 XML 데이터를 결합하여 하나의 XML 문서로 생성하는 데 유용합니다.",
    Query: "XMLAGG(expr) [WITHIN GROUP (ORDER BY order_expr)]",
    Details:
      "expr은 XML 데이터형으로 변환할 열 또는 표현식입니다.\norder_expr은 옵션으로, XML 문서 내에서 열 또는 표현식에 따라 순서를 지정하는 식입니다.",
    EXQuery:
      "SELECT DEPARTMENT_ID, XMLAGG(XMLELEMENT('Employee', XMLATTRIBUTES(EMPLOYEE_ID AS 'id'), EMPLOYEE_NAME)).getClobVal() AS xml_data\nFROM EMPLOYEE\nGROUP BY DEPARTMENT_ID;",
    EXExplanation:
      "EMPLOYEE 테이블을 DEPARTMENT_ID로 그룹화하고, 각 그룹의 EMPLOYEE_ID와 EMPLOYEE_NAME을 XML 데이터형으로 변환하여 집계합니다. XMLAGG 함수는 각 그룹의 XML 값을 결합하여 최종 결과를 반환합니다.",
  },
  {
    Name: "XMLCOLATTVAL",
    Explanation:
      "Oracle에서 XML 데이터형의 열에서 속성 값을 추출하는 함수입니다. 이 함수는 XML 열에서 특정 속성의 값을 가져올 때 사용됩니다.",
    Query: "XMLCOLATTVAL(xml_column, attribute_name)",
    Details:
      "xml_column은 XML 데이터형으로 저장된 열입니다.\nattribute_name은 추출할 속성의 이름입니다.",
    EXQuery:
      "SELECT XMLCOLATTVAL(xml_column, 'id') AS attribute_value\nFROM table_name;",
    EXExplanation:
      "xml_column은 XML 데이터형으로 저장된 열을 나타내며, 'id'는 추출할 속성의 이름입니다. XMLCOLATTVAL 함수는 각 행의 XML 열에서 'id' 속성의 값을 추출하여 결과를 반환합니다.",
  },
  {
    Name: "XMLCONCAT",
    Explanation:
      "XML 값을 결합하는 함수입니다. 이 함수는 여러 XML 값이나 XML 조각을 하나의 XML 문서로 결합하는 데 사용됩니다.",
    Query: "XMLCONCAT(xml_value1, xml_value2, ...)",
    Details: "xml_value1, xml_value2, ...은 결합할 XML 값이나 XML 조각입니다.",
    EXQuery:
      "SELECT XMLCONCAT(XMLELEMENT('Name', 'John'), XMLELEMENT('Age', 30), XMLELEMENT('City', 'New York')) AS xml_data\nFROM dual;",
    EXExplanation:
      " XMLELEMENT 함수를 사용하여 'Name', 'Age', 'City' 요소를 생성하고, XMLCONCAT 함수를 사용하여 이러한 요소들을 결합하여 하나의 XML 문서로 생성합니다. 결과로 XML 데이터형의 값이 반환됩니다.",
  },
  {
    Name: "XMLELEMENT",
    Explanation:
      "XML 요소를 생성하는 함수입니다. 이 함수를 사용하여 XML 문서에서 요소를 만들고 속성을 추가할 수 있습니다.",
    Query: "XMLELEMENT(element_name, [attribute_list], [content])",
    Details:
      "element_name은 생성할 XML 요소의 이름입니다.\nattribute_list는 옵션으로, 생성한 XML 요소에 추가할 속성 목록입니다.\ncontent는 옵션으로, 생성한 XML 요소에 포함할 내용입니다.",
    EXQuery:
      "SELECT XMLELEMENT('Person', XMLATTRIBUTES('John' AS 'name'), 'Some content') AS xml_data\nFROM dual;",
    EXExplanation:
      "XMLELEMENT 함수를 사용하여 'Person' 요소를 생성하고, 'name' 속성과 'Some content'를 추가합니다. 결과로 XML 데이터형의 값이 반환됩니다.",
  },
  {
    Name: "XMLFOREST",
    Explanation:
      "XML 요소를 생성하고 해당 요소에 속성과 값으로 구성된 컬럼 값을 매핑하는 함수입니다",
    Query: "XMLFOREST(column1 [AS alias1], column2 [AS alias2], ...)",
    Details:
      "column1, column2는 XML 요소로 매핑할 컬럼입니다.\nAS alias1, AS alias2는 컬럼에 대한 옵션 별칭입니다.",
    EXQuery:
      "SELECT XMLFOREST(employee_name AS 'Name', employee_age AS 'Age') AS xml_data\nFROM employee_table;",
    EXExplanation:
      "employee_table에서 employee_name을 'Name' 속성에, employee_age를 'Age' 속성에 매핑하여 'Person' 요소를 생성합니다. 결과로 XML 데이터형의 값이 반환됩니다.",
  },
  {
    Name: "XMLSEQUENCE",
    Explanation:
      "XML 컬럼이나 XML 타입의 값을 테이블 형태로 변환하는 함수입니다.",
    Query: "XMLSEQUENCE(xml_column)",
    Details: "xml_column은 XML 데이터형의 컬럼 또는 XML 값입니다.",
    EXQuery:
      "SELECT x.title\nFROM books b,\nXMLTABLE('/Library/Book' PASSING XMLSEQUENCE(b.xml_data)\nCOLUMNS title VARCHAR2(100) PATH '@title') x;",
    EXExplanation:
      "books 테이블에 있는 xml_data 컬럼의 값에서 'Book' 요소를 추출하고, 해당 요소의 'title' 속성 값을 반환합니다. XMLSEQUENCE 함수를 사용하여 XML 데이터를 테이블 형태로 변환한 후, XMLTABLE 함수를 사용하여 요소와 속성에 대한 쿼리를 수행합니다.",
  },
  {
    Name: "XMLTRANSFORM",
    Explanation: "XML 데이터를 변환하는 함수입니다",
    Query: "XMLTRANSFORM(xml_data, xsl_stylesheet)",
    Details:
      "xml_data는 변환할 XML 데이터입니다.\nxsl_stylesheet는 XSL 스타일시트입니다. 이 스타일시트는 XML 데이터를 변환하는 데 사용됩니다.",
    EXQuery:
      "SELECT XMLTRANSFORM(xml_data, xsl_stylesheet) AS transformed_xml\nFROM table_name;",
    EXExplanation:
      "table_name에서 가져온 xml_data에 xsl_stylesheet를 적용하여 XML 데이터를 변환합니다. 결과로 변환된 XML 데이터가 반환됩니다.",
  },
];

export default data11;
