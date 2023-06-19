# React와 Node.js를 이용한 Oracle 함수 사전

## 배포 주소
https://dainty-starburst-30635d.netlify.app/


## 사용 기술
## FRONT
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

## BACK
<img src="https://img.shields.io/badge/nodedotjs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"><img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white">

## 개발 과정
오라클의 모든 함수를 정리한 웹 페이지를 만들었다. 모든 오라클 함수들을 정리한 사이트에서 모든 오라클 함수들을 찾아내었다. 이후 Chat GPT에게 함수를 설명해 달라 하고 그 내용을 참조하였다. 
실행문은 DBeaver에 실행하여 실행 결과를 확인하였다. 오라클의 모든 함수를 챕터별로 더미데이터로 만들었으며 이것을 map을 통해 전부 돌린 간단한 웹 사이트이다.

이후 node.js를 이용해 Oracle DB와 연결하였으며 Client와 Server가 통신하는 CRUD 기능을 모두 구현하였다.

## 배포
배포는 Netlify 를 이용해 배포하였다.
Netlify는 github에 있는 나의 코드를 웹 사이트 처럼 배포해주는 사이트이다. 매우 간편하게 사이트를 배포할 수 있는 장점이 있다.

## 설명
### 화면 구조

|Main|Contents|
|---|---|
|<img src="https://velog.velcdn.com/images/codemodel6/post/9c13b97e-4e3f-48c7-8c54-311b50bfdbaf/image.png" width="500" height="300">|<img src="https://velog.velcdn.com/images/codemodel6/post/b18cd3df-74d1-444f-bc24-9640f368bbe0/image.png" width="500" height="300">|


<br/><br/><br/>

### CREATE
|CLIENT START|CLIENT END|
|---|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/36997669-4687-4b67-a49a-4d42b3ebc3f2" width="500" height="300">|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/1fe7223b-55b5-4c6e-a9d4-c2b0c425650d" width="500" height="300">|

|DB START|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/122c8ab3-ebc6-411c-9e8e-767bf997dd87" width="1000" height="80">|

|DB END|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/e79775be-6ab3-4dbc-a518-0bc9e0bbc884" width="1000" height="80">|

<br/><br/><br/>

### UPDATE
|CLIENT 1, 3|CLIENT 2, 4|
|---|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/38aac077-430d-41a4-a2fa-94755fb84cfa" width="500" height="300">|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/3f1230e2-cc21-491e-9751-b2aea6625315" width="500" height="300">|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/e44fe888-8500-425e-af7a-e8e85698f122" width="500" height="300">|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/3ae87b4e-f560-4fda-850e-55a2bfad0c9c" width="500" height="300">|

|DB START|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/528a57a1-f87a-4245-86df-a9f54186020f" width="1000" height="80">|

|DB END|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/576e3415-5df5-435b-8f9a-6d2f31a8cc9f" width="1000" height="80">|

<br/><br/><br/>

### DELETE
|CLIENT START|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/d559db53-1d3a-43bd-a3e6-88571c2b9556" width="500" height="300">|

|DB START|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/0ad3907d-e52f-48dd-b150-e8b625667df0" width="1000" height="80">|

|DB END|
|---|
|<img src="https://github.com/codemodel6/OracleDictionary/assets/110915850/7ef6e532-9c8e-4560-afea-20bb99005cd3" width="1000" height="80">|

