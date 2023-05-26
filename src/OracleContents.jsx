import React from "react";
import styled from "styled-components";
import Category2 from "./category/Category2";

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 50px;
  padding-left: 50px;
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
