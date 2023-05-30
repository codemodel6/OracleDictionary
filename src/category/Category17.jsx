import React from "react";
import data17 from "../data/Data17";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category17 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"17. Object 참조 함수"}</div>
      {data17.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category17;
