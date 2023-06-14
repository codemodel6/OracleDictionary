const data17 = [
  {
    Name: "DEREF",
    Explanation:
      "참조 타입(Reference Type)을 역참조하여 해당 객체의 실제 값을 반환하는 함수입니다.",
    Query: "DEREF(reference)",
    Details: "reference는 역참조할 참조 타입 객체를 나타냅니다.",
    EXQuery: "",
    EXExplanation:
      "DEREF 함수는 reference로 전달된 참조 타입 객체를 역참조하여 해당 객체의 실제 값을 반환합니다. 반환되는 값은 참조 타입에 대응하는 실제 객체의 데이터입니다.",
  },
  {
    Name: "MAKE_REF",
    Explanation:
      "객체와 객체 식별자를 사용하여 참조 타입 객체를 생성하는 함수입니다. ",
    Query: "MAKE_REF(object_table, object_primary_key)",
    Details:
      "object_table은 참조할 객체가 저장된 테이블을 나타냅니다.\nobject_primary_key는 참조할 객체의 주 키(primary key) 값을 나타냅니다.",
    EXQuery: "",
    EXExplanation:
      "object_table과 object_primary_key를 사용하여 참조 타입 객체를 생성합니다. 생성된 참조 타입 객체는 참조할 객체의 실제 값을 가리키게 됩니다.",
  },
  {
    Name: "REF",
    Explanation:
      "객체에 대한 참조(Reference)를 생성하는 함수 및 연산자입니다. ",
    Query: "REF(object)",
    Details: "object는 참조할 객체를 나타냅니다.",
    EXQuery: "",
    EXExplanation: "",
  },
  {
    Name: "REFTOHEX",
    Explanation:
      " Oracle에서 객체에 대한 참조(Reference)를 16진수 문자열로 변환하는 함수입니다.",
    Query: "REFTOHEX(reference)",
    Details: "reference는 변환할 참조 타입 객체를 나타냅니다.",
    EXQuery: "",
    EXExplanation: "",
  },
  {
    Name: "VALUE",
    Explanation:
      "레코드 변수 또는 컬렉션 변수의 필드나 요소의 값을 반환합니다.",
    Query: "VALUE(record_variable.field_name)",
    Details:
      "record_variable은 레코드 변수를 나타냅니다.\nfield_name은 레코드 변수의 필드 이름을 나타냅니다",
    EXQuery: "",
    EXExplanation: "",
  },
];

export default data17;
