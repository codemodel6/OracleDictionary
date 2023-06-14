import React from "react";
import data6 from "../data/Data6";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category6 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"일반적인 비교 함수"}</div>
      {data6.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category6;
