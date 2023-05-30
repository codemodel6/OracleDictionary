import React from "react";
import data2 from "../data/Data2";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category2 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"2. 문자값을 반환하는 문자 함수"}</div>
      {data2.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category2;
