import React from "react";
import data16 from "../data/Data16";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category16 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"16. 분석 함수"}</div>
      {data16.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category16;
