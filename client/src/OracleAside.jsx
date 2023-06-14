import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MainAside = styled.aside`
  width: 200px;
  height: 600px;
  position: fixed;
  height: 750px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      height: 100%;
      text-align: center;
      align-items: center;
      margin-bottom: 15px;

      .linkCSS {
        color: white;
        font-size: 18px;
      }

      .selectLinkCss {
        color: red;
        font-size: 18px;
      }
    }
  }
`;

const OracleAside = () => {
  const { pathname } = useLocation();
  return (
    <MainAside>
      <ul>
        <li>
          <div className="linkCSS">--------스크롤--------</div>
        </li>
        <li>
          <Link
            className={pathname === "/0" ? "selectLinkCss" : "linkCSS"}
            to="/0"
          >
            0. SQL문
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/1" ? "selectLinkCss" : "linkCSS"}
            to="/1"
          >
            1. 수치함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/2" ? "selectLinkCss" : "linkCSS"}
            to="/2"
          >
            2. 문자값을 반환하는 문자 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/3" ? "selectLinkCss" : "linkCSS"}
            to="/3"
          >
            3. NLS 문자 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/4" ? "selectLinkCss" : "linkCSS"}
            to="/4"
          >
            4. 수치값을 반환하는 문자함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/5" ? "selectLinkCss" : "linkCSS"}
            to="/5"
          >
            5. 일시 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/6" ? "selectLinkCss" : "linkCSS"}
            to="/6"
          >
            6. 일반적인 비교 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/7" ? "selectLinkCss" : "linkCSS"}
            to="/7"
          >
            7. 변환 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/8" ? "selectLinkCss" : "linkCSS"}
            to="/8"
          >
            8. LARGE OBJECT(LOB) 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/9" ? "selectLinkCss" : "linkCSS"}
            to="/9"
          >
            9. 수집 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/10" ? "selectLinkCss" : "linkCSS"}
            to="/10"
          >
            10. 계층 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/11" ? "selectLinkCss" : "linkCSS"}
            to="/11"
          >
            11. XML 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/12" ? "selectLinkCss" : "linkCSS"}
            to="/12"
          >
            12. 인코딩 함수와 디코딩 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/13" ? "selectLinkCss" : "linkCSS"}
            to="/13"
          >
            13. NULL 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/14" ? "selectLinkCss" : "linkCSS"}
            to="/14"
          >
            14. 환경 함수 와 식별자 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/15" ? "selectLinkCss" : "linkCSS"}
            to="/15"
          >
            15. 집계 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/16" ? "selectLinkCss" : "linkCSS"}
            to="/16"
          >
            16. 분석 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/17" ? "selectLinkCss" : "linkCSS"}
            to="/17"
          >
            17. Object 참조 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/18" ? "selectLinkCss" : "linkCSS"}
            to="/18"
          >
            18. 모델 함수
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/19" ? "selectLinkCss" : "linkCSS"}
            to="/19"
          >
            19. 기타 단일행 함수
          </Link>
        </li>
        <li>
          <div className="linkCSS">------------------------</div>
        </li>
      </ul>
    </MainAside>
  );
};

export default OracleAside;
