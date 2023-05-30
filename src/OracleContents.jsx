import React from "react";
import styled from "styled-components";
import Home from "./Home.jsx";
import Category0 from "./category/Category0.jsx";
import Category1 from "./category/Category1.jsx";
import Category2 from "./category/Category2.jsx";
import Category3 from "./category/Category3.jsx";
import Category4 from "./category/Category4.jsx";
import Category5 from "./category/Category5.jsx";
import Category6 from "./category/Category6.jsx";
import Category7 from "./category/Category7.jsx";
import Category8 from "./category/Category8.jsx";
import Category9 from "./category/Category9.jsx";
import Category10 from "./category/Category10.jsx";
import Category11 from "./category/Category11.jsx";
import Category12 from "./category/Category12.jsx";
import Category13 from "./category/Category13.jsx";
import Category14 from "./category/Category14.jsx";
import Category15 from "./category/Category15.jsx";
import Category16 from "./category/Category16.jsx";
import Category17 from "./category/Category17.jsx";
import Category18 from "./category/Category18.jsx";
import Category19 from "./category/Category19.jsx";
import { Route, Routes } from "react-router-dom";

const MainContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  margin-left: 200px;
`;

const OracleContents = () => {
  return (
    <MainContents>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/0" Component={Category0} />
        <Route path="/1" Component={Category1} />
        <Route path="/2" Component={Category2} />
        <Route path="/3" Component={Category3} />
        <Route path="/4" Component={Category4} />
        <Route path="/5" Component={Category5} />
        <Route path="/6" Component={Category6} />
        <Route path="/7" Component={Category7} />
        <Route path="/8" Component={Category8} />
        <Route path="/9" Component={Category9} />
        <Route path="/10" Component={Category10} />
        <Route path="/11" Component={Category11} />
        <Route path="/12" Component={Category12} />
        <Route path="/13" Component={Category13} />
        <Route path="/14" Component={Category14} />
        <Route path="/15" Component={Category15} />
        <Route path="/16" Component={Category16} />
        <Route path="/17" Component={Category17} />
        <Route path="/18" Component={Category18} />
        <Route path="/19" Component={Category19} />
      </Routes>
    </MainContents>
  );
};

export default OracleContents;
