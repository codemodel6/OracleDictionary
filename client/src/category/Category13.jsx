import React from "react";
import data13 from "../data/Data13";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category13 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"13. NULL 함수"}</div>
      {data13.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category13;
