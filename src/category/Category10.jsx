import React from "react";
import data10 from "../data/Data10";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category10 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"10. 계층 함수"}</div>
      {data10.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category10;
