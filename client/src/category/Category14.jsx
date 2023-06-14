import React from "react";
import data14 from "../data/Data14";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category14 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"14. 환경 함수 와 식별자 함수"}</div>
      {data14.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category14;
