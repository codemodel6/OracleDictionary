import React from "react";
import data7 from "../data/Data7";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category7 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"7. 변환 함수"}</div>
      {data7.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category7;
