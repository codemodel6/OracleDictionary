import React from "react";
import data9 from "../data/Data9";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category9 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"9. 수집 함수"}</div>
      {data9.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category9;
