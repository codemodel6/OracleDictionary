import React from "react";
import data3 from "../data/Data3";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category3 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"4. 수치값을 반환하는 문자함수"}</div>
      {data3.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category3;
