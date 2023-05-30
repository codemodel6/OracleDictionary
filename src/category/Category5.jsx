import React from "react";
import data5 from "../data/Data5";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category5 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"5. 일시 함수"}</div>
      {data5.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category5;
