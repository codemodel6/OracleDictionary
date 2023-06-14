import React from "react";
import data8 from "../data/Data8";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category8 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"8. LARGE OBJECT(LOB) 함수"}</div>
      {data8.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category8;
