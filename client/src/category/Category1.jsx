import React, { useEffect } from "react";
import data1 from "../data/Data1";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";
import { useState } from "react";
import axios from "axios";

const Category1 = () => {
  const [data11, setData11] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/1");
    console.log(response);
  };
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
