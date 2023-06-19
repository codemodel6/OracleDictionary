import React, { useState, useEffect } from "react";
// import data19 from "../data/Data19";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";
import axios from "axios";
import AddData from "./components/AddData";

const Category19 = () => {
  const [data19, setData19] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  /** get요청을 하는 함수 */
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/19");
      setData19(response.data);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  };

  return (
    <ContentsWrapper>
      <div className="title">{"19. 기타 단일행 함수"}</div>
      {data19.map((it, idx) => (
        <CategoryContents it={it} idx={idx} setData19={setData19} />
      ))}
      <AddData setData19={setData19} />
    </ContentsWrapper>
  );
};

export default Category19;
