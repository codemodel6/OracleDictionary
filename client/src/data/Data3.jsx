import three1 from "../../src/image/3/3-1.png"
import three2 from "../../src/image/3/3-2.png"


let data3 = [{
    Name : "3-1. NLS_CHARSET_DECL_LEN",
    Explanation : "문자 집합(Character Set)의 선언 길이를 나타내는 매개변수입니다.",
    Query : "LS_CHARSET_DECL_LEN()",
    Details : "값은 문자 집합에 따라 다를 수 있으며, 선언된 문자열의 길이를 결정하는 데 영향을 준다",
    EXQuery : "SELECT NLS_CHARSET_DECL_LEN(200, nls_charset_id('ja16eucfixed')) FROM DUAL; ",
    EXExplanation : "SELECT NLS_CHARSET_DECL_LEN(200, nls_charset_id('ja16eucfixed')) FROM DUAL; ",
    image : three1,
},
{
    Name : "3-2. NLS_CHARSET_ID",
    Explanation : "오라클 데이터베이스에서 사용 가능한 문자 집합(Character Set)의 식별자를 반환하는 함수입니다.",
    Query : "NLS_CHARSET_ID(character_set_name)",
    Details : "character_set_name은 문자 집합의 이름을 나타내는 매개변수입니다.",
    EXQuery : "SELECT NLS_CHARSET_ID('ja16euc') FROM DUAL; ",
    EXExplanation : "ja16euc의 문자 세트 ID 반환",
    image : three2,
},

{
    Name : "3-3. NLS_CHARSET_NAME",
    Explanation : "사용 중인 문자 집합(Character Set)의 이름을 반환하는 함수입니다.",
    Query : "NLS_CHARSET_NAME()",
    Details : "매개변수를 사용하지 않고 호출됩니다. 호출 결과로 현재 데이터베이스에서 사용 중인 문자 집합의 이름이 반환됩니다.",
    EXQuery : "SELECT NLS_CHARSET_NAME() AS CharacterSet FROM DUAL;",
    EXExplanation : "'CharacterSet' 컬럼에 현재 데이터베이스에서 사용 중인 문자 집합의 이름이 출력됩니다.",
    image : "",
},
]

export default data3