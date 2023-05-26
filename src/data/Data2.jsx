import two1 from "../../src/image/2/2-1.png"
import two3 from "../../src/image/2/2-3.png"
import two4 from "../../src/image/2/2-4.png"
import two5 from "../../src/image/2/2-5.png"
import two6 from "../../src/image/2/2-6.png"
import two7 from "../../src/image/2/2-7.png"
import two8 from "../../src/image/2/2-8.png"
import two9 from "../../src/image/2/2-9.png"
import two10 from "../../src/image/2/2-10.png"
import two11 from "../../src/image/2/2-11.png"
import two12 from "../../src/image/2/2-12.png"
import two13 from "../../src/image/2/2-13.png"
import two14 from "../../src/image/2/2-14.png"
import two15 from "../../src/image/2/2-15.png"
import two16 from "../../src/image/2/2-16.png"
import two17 from "../../src/image/2/2-17.png"
import two18 from "../../src/image/2/2-18.png"
import two20 from "../../src/image/2/2-20.png"
import two21 from "../../src/image/2/2-21.png"



let data2 = [
    {
        Name : "2-1. CHR",
        Explanation : "숫자로 표현된 ASCII 코드를 해당하는 문자로 변환하는 역할을 합니다.",
        Query : "CHR(n)",
        Details : "입력된 n에 해당하는 ASCII 코드를 해당하는 문자로 변환하여 반환합니다. 예를 들어, CHR(65)는 ASCII 코드 65에 해당하는 문자 'A'로 변환됩니다.",
        EXQuery : "SELECT CHR(65) AS Character_1, CHR(66) AS Character_2 FROM DUAL;",
        EXExplanation : "CHR 함수는 각각 ASCII 코드 65와 66을 해당하는 문자 'A'와 'B'로 변환합니다. 'Character_1' 컬럼에는 'A'가 출력되고, 'Character_2' 컬럼에는 'B'가 출력됩니다.",
        image : two1,
    },

    {
        Name : "2-2. CONCAT",
        Explanation : "두 개 이상의 문자열을 연결하여 하나의 문자열로 만드는 역할을 합니다.",
        Query : "CONCAT(string1, string2, ...)",
        Details : "string1, string2, ...은 연결하고자 하는 문자열입니다. 두 개 이상의 문자열을 연결할 수 있으며, 필요한 만큼 매개변수를 추가할 수 있습니다. CONCAT 함수는 입력된 문자열을 순서대로 연결하여 하나의 문자열로 반환합니다. ",
        EXQuery : "SELECT CONCAT('Hello', ' ', 'World') AS Result FROM DUAL;",
        EXExplanation : " CONCAT 함수는 'Hello'와 'World'를 연결하여 'Hello World'라는 문자열을 생성합니다. 'Result' 컬럼에는 'Hello World'가 출력됩니다.",
        image : "",
    },
    
    {
        Name : "2-3. INITCAP",
        Explanation : "문자열의 첫 글자를 대문자로, 나머지 글자를 소문자로 변환하는 역할을 합니다.",
        Query : "INITCAP(string)",
        Details : "string은 대소문자를 변환하고자 하는 문자열입니다.",
        EXQuery : "SELECT INITCAP('hello world') AS Result FROM DUAL;",
        EXExplanation : "INITCAP 함수는 'hello world'를 첫 글자 대문자, 나머지 글자 소문자로 변환하여 'Hello World'라는 문자열을 생성합니다. 'Result' 컬럼에는 'Hello World'가 출력됩니다.",
        image : two3,
    },
    
    {
        Name : "2-4. LOWER",
        Explanation : "주어진 문자열의 모든 문자를 소문자로 변환하는 역할을 합니다.",
        Query : "LOWER(string)",
        Details : "string은 소문자로 변환하고자 하는 문자열입니다.",
        EXQuery : "SELECT LOWER('Hello World') AS Result FROM DUAL;",
        EXExplanation : "LOWER 함수는 'Hello World'를 모두 소문자로 변환하여 'hello world'라는 문자열을 생성합니다. 'Result' 컬럼에는 'hello world'가 출력됩니다.",
        image : two4,
    },
    
    {
        Name : "2-5. LPAD",
        Explanation : "두 번째 인자의로 공간을 설정하고 첫 번째 인자를 작성한 후 남은 공간에 세 번째 인자를 오른쪽에서부터 채운다.",
        Query : "LPAD(string, length, fill_character)",
        Details : "string은 패딩을 적용할 원래 문자열입니다. \n length는 최종 문자열의 총 길이입니다. 만약 원래 문자열의 길이가 length보다 작다면, 패딩이 적용될 것입니다. \nfill_character는 패딩에 사용할 문자입니다. 기본값은 공백입니다.",
        EXQuery : "SELECT LPAD('123', 10, '0') AS Result FROM DUAL;",
        EXExplanation : "LPAD 함수는 '123'을 전체 길이가 10인 문자열로 패딩하며, 패딩에는 '0'이 사용됩니다. 'Result' 컬럼에는 '0000000123'이 출력됩니다.",
        image : two5,
    },
    
    {
        Name : "2-6. LTRIM",
        Explanation : "주어진 문자열에서 왼쪽(시작 부분)에 있는 공백을 제거하는 역할을 합니다.",
        Query : "LTRIM(string, trim_character)",
        Details : "string은 공백을 제거하고자 하는 원래 문자열입니다.\ntrim_character는 선택적으로 사용되며, 공백 이외의 다른 문자를 제거하고자 할 때 사용됩니다. 기본값은 공백입니다.",
        EXQuery : "SELECT LTRIM('xyxXxyLAST WORD','xy') 'LTRIM example' FROM DUAL;",
        EXExplanation : "왼쪽 xy 제거",
        image : two6,
    },
    
    {
        Name : "2-7. NCHR",
        Explanation : "NCHR 함수는 유니코드 문자를 반환한다.",
        Query : "LTRIM(string, trim_character)",
        Details : "SELECT LTRIM('   Hello World') AS Result FROM DUAL;",
        EXQuery : "SELECT NCHR(187) FROM DUAL;",
        EXExplanation : "187의 유니코드 반환",
        image : two7,
    },
    
    {
        Name : "2-8 NLS_INITCAP.",
        Explanation : "NLS_INITCAP함수는 각 단어의 처음 문자를 대문자로, 나머지 문자를 소문자로 변환하여 char를 반환한다",
        Query : "NLS_INITCAP(string, nlsparam)",
        Details : "string은 대소문자를 변환하고자 하는 원래 문자열입니다. \nnlsparam은 선택적으로 사용되며, 언어 및 지역 설정에 따라 대소문자 변환에 영향을 줄 수 있는 매개변수입니다. 기본값은 현재 세션의 NLS 설정입니다.",
        EXQuery : "SELECT NLS_INITCAP('ijsland') 'InitCap' FROM DUAL;",
        EXExplanation : "I를 대문자로 나머지는 소문자로 반환",
        image : two8,
    },
    
    {
        Name : "2-9. NLS_LOWER",
        Explanation : "모든 문자를 소문자로 변환하여 반환한다.",
        Query : "NLS_LOWER(string, nlsparam)",
        Details : "string은 소문자로 변환하고자 하는 원래 문자열입니다. \nnlsparam은 선택적으로 사용되며, 언어 및 지역 설정에 따라 소문자 변환에 영향을 줄 수 있는 매개변수입니다. 기본값은 현재 세션의 NLS 설정입니다.",
        EXQuery : "SELECT NLS_LOWER('CITTADASdsd') 'Lowercase' FROM DUAL;",
        EXExplanation : "모든 문자를 소문자로 변경",
        image : two9,
    },
    
    {
        Name : "2-10. NLS_UPPER",
        Explanation : "NLS_UPPER함수는 입력 문자열을 모두 대문자로 변환한 문자열을 반환한다.",
        Query : "NLS_LOWER(string, nlsparam)",
        Details : "string은 소문자로 변환하고자 하는 원래 문자열입니다.\nnlsparam은 선택적으로 사용되며, 언어 및 지역 설정에 따라 소문자 변환에 영향을 줄 수 있는 매개변수입니다. 기본값은 현재 세션의 NLS 설정입니다.",
        EXQuery : "SELECT NLS_UPPER ('grosDSASe') 'Uppercase' FROM DUAL;",
        EXExplanation : "입력값 모두 대문자로 변경",
        image : two10,
    },

    {
        Name : "2-11. REGEXP_REPLACE",
        Explanation : "REGEXP_REPLACE 함수는 정규 표현식을 활용하여 문자열에서 패턴을 찾아 다른 문자열로 대체하는 기능을 제공한다.",
        Query : "REGEXP_REPLACE(source_string, pattern, replacement, position, occurrence, match_param)",
        Details : "source_string은 대체를 수행할 원래 문자열입니다.\npattern은 정규 표현식 패턴입니다. 이 패턴과 일치하는 부분이 대체됩니다.\nreplacement은 대체될 문자열입니다. pattern과 일치하는 부분이 replacement으로 대체됩니다.\nposition은 선택적으로 사용되며, 대체를 시작할 위치를 지정합니다. 기본값은 1입니다.\noccurrence은 선택적으로 사용되며, 대체할 일치 항목의 순서를 지정합니다. 기본값은 0으로 모든 일치 항목이 대체됩니다.\nmatch_param은 선택적으로 사용되며, 일치 조건에 영향을 주는 매개변수입니다. 기본값은 'c'로 대소문자를 구분합니다.",
        EXQuery : "SELECT REGEXP_REPLACE('Hello123World456', '[0-9]', '') AS Result FROM DUAL;",
        EXExplanation : "문자열 'Hello123World456'에서 숫자([0-9])에 해당하는 모든 부분을 제거하고 빈 문자열로 대체하여 'HelloWorld'라는 결과를 반환",
        image : two11,
    },

    {
        Name : "2-12. REGEXP_SUBSTR",
        Explanation : "REGEXP_SUBSTR REGEXP_SUBSTR 함수는 정규 표현식을 사용하여 문자열에서 패턴과 일치하는 부분을 추출하는 기능이다.",
        Query : "REGEXP_SUBSTR(source_string, pattern, position, occurrence, match_parameter)",
        Details : "source_string은 대상 문자열, pattern은 찾을 패턴을 정의한 정규 표현식, position은 시작 위치, occurrence은 일치하는 항목의 순서, match_parameter는 일치 옵션입니다. REGEXP_SUBSTR 함수는 source_string에서 pattern에 해당하는 부분 중에서 position부터 occurrence번째 항목을 추출하여 반환합니다.",
        EXQuery : "SELECT REGEXP_SUBSTR('123Hello456World', '[0-9]+') AS Result FROM DUAL;",
        EXExplanation : "REGEXP_SUBSTR 함수는 문자열 '123Hello456World'에서 정규 표현식 [0-9]+에 해당하는 숫자로 시작하는 부분을 추출하여 '123'이라는 결과를 반환한다.",
        image : two12,
    },

    {
        Name : "2-13. REPLACE",
        Explanation : "REPLACE 함수는 첫 번째 인자값에서 두 번째 인자값을 세 번째 인자값으로 바꾼다.",
        Query : "REPLACE(source_string, search_string, replacement_string)",
        Details : "source_string은 대체를 수행할 원래 문자열입니다. \nsearch_string은 대체하고자 하는 특정 문자 또는 문자열입니다. \nreplacement_string은 search_string과 일치하는 부분이 대체될 문자열입니다.",
        EXQuery : "SELECT REPLACE('JACK and JUE','J','BL') 'Changes' FROM DUAL;",
        EXExplanation : "J를 BL로 변경한다.",
        image : two13,
    },
    
    {
        Name : "2-14. RPAD",
        Explanation : "RPAD 함수는 주어진 문자열을 특정 길이로 채워준다.",
        Query : "",
        Details : "RPAD(string, length, [pad_string])\n여기서 string은 대상 문자열, length는 최종 길이, pad_string은 선택적으로 지정할 수 있는 패딩 문자열입니다. RPAD 함수는 string을 length로 지정된 길이까지 확장하며, 필요한 경우 pad_string을 사용하여 오른쪽에 패딩 문자열을 추가합니다. 만약 pad_string을 생략하면 기본적으로 공백 문자가 사용됩니다.",
        EXQuery : "SELECT RPAD('Hello', 10) AS Padded_String FROM DUAL;",
        image : two14,
    },
    {
        Name : "2-15. RTRIM",
        Explanation : "문자열의 오른쪽 끝에 있는 공백을 제거합니다.",
        Query : "RTRIM(string, [trim_string])",
        Details : "여기서 string은 대상 문자열이며, trim_string은 선택적으로 지정할 수 있는 삭제할 문자열입니다. RTRIM 함수는 string의 오른쪽 끝에 위치한 trim_string을 제거하고 결과 문자열을 반환합니다. trim_string을 생략하면 기본적으로 공백 문자가 삭제됩니다.예를 들어, 문자열 'Hello '에서 오른쪽에 있는 공백을 제거하고 싶을 때 RTRIM 함수를 사용할 수 있습니다:",
        EXQuery : "SELECT RTRIM('Hello    ') AS Trimmed_String FROM DUAL;",
        EXExplanation : "위의 예시에서, RTRIM 함수는 'Hello ' 문자열의 오른쪽에 위치한 공백을 제거하고 'Hello'라는 결과를 반환합니다. 'Trimmed_String' 컬럼에는 'Hello'가 표시됩니다.RTRIM 함수는 데이터의 공백을 제거하거나 우측(trim)에 위치한 특정 문자열을 삭제하는 작업에 유용하게 사용될 수 있습니다. 문자열 처리 작업에서 필요에 따라 문자열의 끝에 있는 공백을 제거할 수 있습니다.",
        image : two15,
    },
    {
        Name : "2-16. SOUNDEX",
        Explanation : "문자열에 대해 SOUNDEX 알고리즘을 적용하여 해당 문자열의 사운드 값을 반환합니다.",
        Query : "SOUNDEX(string)",
        Details : "string은 대상 문자열입니다. SOUNDEX 함수는 주어진 string에 대해 SOUNDEX 알고리즘을 적용하고, 결과로 사운드 값을 반환합니다.\nSOUNDEX 함수는 문자열 비교나 검색 작업에서 주어진 문자열의 발음을 기반으로 유사한 단어를 찾는 데 사용될 수 있습니다. SOUNDEX 알고리즘은 단어의 발음 유사성을 고려하여 사운드 값을 생성하므로, 발음이 비슷한 단어들을 그룹화하거나 찾는 데 도움이 될 수 있습니다.",
        EXQuery : "SELECT SOUNDEX('Smith') AS Sound_Value FROM DUAL;",
        EXExplanation : "SOUNDEX 함수는 문자열 'Smith'에 대해 SOUNDEX 알고리즘을 적용하고 해당 문자열의 사운드 값을 반환합니다. 'Sound_Value' 컬럼에는 'S530'이 표시됩니다.",
        image : two16,
    },
    {
        Name : "2-17. SUBSTR",
        Explanation : "문자열에서 지정된 위치에서부터 지정된 길이만큼의 부분 문자열을 반환합니다",
        Query : "SUBSTR(string, start_position, [length])",
        Details : "string은 대상 문자열, start_position은 부분 문자열이 시작되는 위치를 나타내는 정수 값, length는 선택적으로 지정할 수 있는 부분 문자열의 길이를 나타내는 정수 값입니다. SUBSTR 함수는 string에서 start_position에서 시작하여 length만큼의 길이를 갖는 부분 문자열을 반환합니다. length를 생략하면 start_position에서부터 문자열의 끝까지의 모든 문자를 포함하는 부분 문자열이 반환됩니다.",
        EXQuery : "SELECT SUBSTR('Hello, World!', 8, 5) AS Substring FROM DUAL;",
        EXExplanation : "SUBSTR 함수는 문자열 'Hello, World!'에서 8번째 위치부터 시작하여 길이가 5인 부분 문자열인 'World'를 반환합니다. 'Substring' 컬럼에는 'World'가 표시됩니다.",
        image : two17,
    },

    {
        Name : "2-18. TRANSLATE",
        Explanation : "문자열에서 특정 문자나 문자열을 다른 문자나 문자열로 변환하는 작업을 수행합니다.",
        Query : "TRANSLATE(string, source_chars, destination_chars)",
        Details : "string은 대상 문자열, source_chars는 변환될 문자나 문자열을 지정하는 문자 집합, destination_chars는 대응하는 변환 결과로 대체될 문자나 문자열을 지정하는 문자 집합입니다. TRANSLATE 함수는 string의 각 문자를 source_chars에서 해당하는 위치의 문자로 변환하여 destination_chars의 문자나 문자열로 대체합니다. TRANSLATE 함수는 string 내의 문자를 왼쪽에서 오른쪽으로 순서대로 변환하며, 변환이 불가능한 문자는 그대로 유지됩니다. source_chars와 destination_chars의 길이는 동일해야 하며, 대응하는 위치의 문자들이 1:1로 매핑되어야 합니다.",
        EXQuery : "SELECT TRANSLATE('Hello, World!', ',', '!') AS Translated_String FROM DUAL;",
        EXExplanation : " TRANSLATE 함수는 문자열 'Hello, World!'에서 쉼표(,)를 찾아 느낌표(!)로 대체합니다. 'Translated_String' 컬럼에는 'Hello! World!'가 표시됩니다. TRANSLATE 함수는 문자열에서 특정 문자를 삭제하거나 다른 문자열로 대체하는 작업에 유용하게 사용될 수 있습니다. 문자열 처리 작업에서 특정 문자를 변환하거나 삭제해야 할 때 TRANSLATE 함수를 활용할 수 있습니다.",
        image : two18,
    },

    {
        Name : "2-19. TREAT",
        Explanation : "타입 변환을 수행하는 역할을 합니다.",
        Query : "TREAT(expression AS target_type)",
        Details : "expression은 변환할 객체를 나타내는 표현식이고, target_type은 변환하고자 하는 타겟 객체 타입입니다. TREAT 함수는 expression을 target_type으로 변환하며, 변환할 수 없는 경우 오류를 발생시킵니다. 변환된 결과는 target_type으로 사용할 수 있는 객체로 반환됩니다.",
        EXQuery : "SELECT TREAT(p AS Employee) AS emp FROM Person p;",
        EXExplanation : "Person 객체를 Employee 객체로 변환하기 위해 TREAT 함수를 사용합니다. p는 Person 객체를 나타내는 표현식입니다. 변환된 결과인 emp는 Employee 객체로 사용할 수 있는 타입입니다.",
        image : "",
    },
    {
        Name : "2-20. TRIM",
        Explanation : "문자열의 앞뒤에 있는 공백을 제거하는 함수입니다.",
        Query : "TRIM([LEADING | TRAILING | BOTH] trim_character FROM string)",
        Details : "여기서 LEADING, TRAILING, BOTH는 옵션으로, 어떤 위치의 공백을 제거할지를 지정합니다. trim_character는 제거할 공백을 지정하는 문자열 또는 문자입니다. string은 공백을 제거할 대상 문자열입니다. LEADING: 문자열의 시작 부분에 있는 공백을 제거합니다. TRAILING: 문자열의 끝 부분에 있는 공백을 제거합니다. BOTH: 문자열의 시작과 끝 부분에 있는 공백을 모두 제거합니다.",
        EXQuery : "SELECT TRIM(BOTH ' ' FROM '   Hello, World!   ') AS Trimmed_String FROM DUAL;",
        EXExplanation : "TRIM(BOTH ' ' FROM ' Hello, World! ')는 문자열 ' Hello, World! '에서 양쪽에 있는 공백을 제거합니다. 'Trimmed_String' 컬럼에는 'Hello, World!'가 출력됩니다.",
        image : two20,
    },
    {
        Name : "2-21. UPPER",
        Explanation : "문자열을 모두 대문자로 변환하는 역할을 합니다. ",
        Query : "UPPER(string)",
        Details : "string은 대문자로 변환하고자 하는 문자열입니다. UPPER 함수는 입력된 string 내의 모든 소문자를 해당하는 대문자로 변경하여 반환합니다. 입력된 문자열 내에 이미 대문자가 있는 경우에는 변화가 없습니다.",
        EXQuery : "SELECT UPPER('Hello, World!') AS Uppercase_String FROM DUAL;",
        EXExplanation : "UPPER 함수는 문자열 'Hello, World!'를 모두 대문자로 변환합니다. 'Uppercase_String' 컬럼에는 'HELLO, WORLD!'가 출력됩니다.",
        image : two21,
    },
    
];

export default data2;