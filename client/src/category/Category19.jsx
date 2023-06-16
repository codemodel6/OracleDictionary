import React, { useState, useEffect } from "react";
// import data19 from "../data/Data19";
import { ContentsWrapper, AddDiv } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";
import axios from "axios";

const Category19 = () => {
  const [data19, setData19] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/19");
      setData19(response.data);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  };

  const handleToggel = () => {
    setToggle(!toggle);
  };

  return (
    <ContentsWrapper>
      <div className="title">{"19. 기타 단일행 함수"}</div>
      {data19.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
      <AddDiv>
        {toggle ? (
          <div className="addTextDiv">
            <div className="textContent">이름</div>
            <textarea className="addText" placeholder="이름"></textarea>
            <div className="textContent">Query</div>
            <textarea className="addText" placeholder="Query"></textarea>
            <div className="textContent">Query 설명</div>
            <textarea className="addText" placeholder="Query 설명"></textarea>
            <div className="textContent">예시 Query</div>
            <textarea className="addText" placeholder="예시 Query"></textarea>
            <div className="textContent">예시 Query 설명</div>
            <textarea
              className="addText"
              placeholder="예시 Query 설명"
            ></textarea>
            <div className="completeDiv">
              <button className="addComplete">완료</button>
              <button className="addComplete" onClick={handleToggel}>
                취소
              </button>
            </div>
          </div>
        ) : (
          <button className="addButton" onClick={handleToggel}>
            추가하기
          </button>
        )}
      </AddDiv>
    </ContentsWrapper>
  );
};

export default Category19;
