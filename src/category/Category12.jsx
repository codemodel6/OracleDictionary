import React from "react";
import data12 from "../data/Data12";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category12 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"12. 인코딩 함수와 디코딩 함수"}</div>
      {data12.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category12;
