import React from "react";
import data11 from "../data/Data11";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category11 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"11. XML 함수"}</div>
      {data11.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category11;
