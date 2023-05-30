import React from "react";
import styled from "styled-components";
import Category2 from "./category/Category2.jsx";

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  margin-left: 150px;
`;

const OracleContents = () => {
  return (
    <MainContents>
      <Category2 />
    </MainContents>
  );
};

export default OracleContents;
