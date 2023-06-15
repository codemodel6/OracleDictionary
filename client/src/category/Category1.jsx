import React, { useEffect } from "react";
import data1 from "../data/Data1";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";
import { useState } from "react";

const Category1 = () => {
  // const [data1, setData1] = useState([]);

  // useEffect(() => {});
  return (
    <ContentsWrapper>
      <div className="title">{"1. 수차함수"}</div>
      {data1.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category1;
