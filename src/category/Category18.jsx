import React from "react";
import data18 from "../data/Data18";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category18 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"18. 모델 함수"}</div>
      {data18.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category18;
