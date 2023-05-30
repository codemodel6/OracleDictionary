import React from "react";
import data15 from "../data/Data15";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category15 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"15. 집계 함수"}</div>
      {data15.map((it, idx) => (
        <CategoryContents key={idx} it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category15;
