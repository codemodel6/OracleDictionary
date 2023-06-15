import React, { useEffect, useState } from "react";
// import data1 from "../data/Data1";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";
import axios from "axios";

const Category1 = () => {
  const [data11, setData11] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/1");
      setData11(response.data);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  };

  return (
    <ContentsWrapper>
      <div className="title">{"1. 수차함수"}</div>
      {data11.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category1;
