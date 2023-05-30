import ehight1 from "../../src/image/8/8-1.png";

const data8 = [
  {
    Name: "BFILENAME",
    Explanation:
      "BFILE 데이터 형식의 파일을 가리키는 외부 BFILE 위치를 생성하는 데 사용됩니다. BFILE은 Oracle 데이터베이스 외부에 저장된 이진 파일을 나타내는 데이터 형식입니다. ",
    Query: "BFILENAME(directory, filename)",
    Details:
      "directory는 외부 파일이 저장된 디렉터리 객체의 이름이며, filename은 BFILE의 파일 이름입니다. BFILENAME 함수는 주어진 디렉터리와 파일 이름을 조합하여 BFILE 위치를 생성합니다.",
    EXQuery: "SELECT BFILENAME('MY_DIR', 'myfile.txt') FROM DUAL;",
    EXExplanation:
      "디렉터리 'MY_DIR'의 'myfile.txt' 파일을 가리키는 BFILE 위치를 생성하여 반환합니다.",
    image: ehight1,
  },
  {
    Name: "EMPTY_BLOB, EMPTY_CLOB",
    Explanation:
      "데이터 형식의 비어 있는 값(Empty Value)을 생성하는 데 사용되는 상수입니다. 이들 상수를 사용하여 비어 있는 BLOB 및 CLOB 값을 생성하고, 해당 값을 데이터베이스에 삽입하거나 변수에 할당할 수 있습니다.",
    Query: "",
    Details:
      "EMPTY_BLOB은 비어 있는 BLOB 값을 생성하는 상수이며, EMPTY_CLOB은 비어 있는 CLOB 값을 생성하는 상수입니다.",
    EXQuery: "INSERT INTO my_table (blob_column) VALUES (EMPTY_BLOB());",
    EXExplanation:
      " 'my_table' 테이블의 'blob_column' 컬럼에 비어 있는 BLOB 값을 삽입합니다.",
    image: "",
  },
];

export default data8;
