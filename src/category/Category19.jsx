import React from "react";
import data19 from "../data/Data19";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category19 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"19. 기타 단일행 함수"}</div>
      {data19.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category19;
