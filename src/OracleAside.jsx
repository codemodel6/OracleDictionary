import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainAside = styled.aside`
  background-color: yellow;
  width: 150px;
  height: 600px;
  position: fixed;

  ul {
    padding-top: 50px;
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      height: 100%;
      text-align: center;
      align-items: center;
      background-color: blue;

      .linkCSS {
        color: white;
        font-size: 20px;
      }
    }
  }
`;

const OracleHeader = () => {
  return (
    <MainAside>
      <ul>
        <li>
          <Link className="linkCSS" to="/hi">
            1. aside
          </Link>
        </li>
        <li>
          <Link className="linkCSS" to="/hi">
            2. aside
          </Link>
        </li>
        <li>
          <Link className="linkCSS" to="/hi">
            1.aside
          </Link>
        </li>
        <li>
          <Link className="linkCSS" to="/hi">
            1.aside
          </Link>
        </li>
        <li>
          <Link className="linkCSS" to="/hi">
            1.aside
          </Link>
        </li>
        <li>
          <Link className="linkCSS" to="/hi">
            1.aside
          </Link>
        </li>
        <li>
          <Link className="linkCSS" to="/hi">
            1.aside
          </Link>
        </li>
      </ul>
    </MainAside>
  );
};

export default OracleHeader;
