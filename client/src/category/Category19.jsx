import React, { useState, useEffect } from "react";
// import data19 from "../data/Data19";
import { ContentsWrapper, AddDiv } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";
import axios from "axios";

const Category19 = () => {
  const [data19, setData19] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [textData, setTextData] = useState({
    Name: "",
    Explanation: "",
    Query: "",
    Details: "",
    EXQuery: "",
    EXExplanation: "",
  });

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

  /** 추가하기 버튼과 input창을 구분 */
  const handleToggel = () => {
    setTextData({
      Name: "",
      Explanation: "",
      Query: "",
      Details: "",
      EXQuery: "",
      EXExplanation: "",
    });
    setToggle(!toggle);
  };

  /** input값 관리하는 함수 */
  const handleText = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };

  /** Post 요청 보내는 함수 */
  const handlePost = async () => {
    console.log("textData : ", textData);
    try {
      const response = await axios.post(
        "http://localhost:5000/post/19",
        textData
      );
      setData19(response.data);

      // 완료 후 에디터 닫음
      handleToggel();
    } catch (error) {
      console.error("post 오류", error);
    }
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
            <textarea
              className="addText"
              placeholder="이름"
              onChange={handleText}
              value={textData.Name}
              name="Name"
            ></textarea>
            <div className="textContent">설명</div>
            <textarea
              className="addText"
              placeholder="설명"
              onChange={handleText}
              value={textData.Explanation}
              name="Explanation"
            ></textarea>
            <div className="textContent">Query</div>
            <textarea
              className="addText"
              placeholder="Query"
              onChange={handleText}
              value={textData.Query}
              name="Query"
            ></textarea>
            <div className="textContent">Query 설명</div>
            <textarea
              className="addText"
              placeholder="Query 설명"
              onChange={handleText}
              value={textData.Details}
              name="Details"
            ></textarea>
            <div className="textContent">예시 Query</div>
            <textarea
              className="addText"
              placeholder="예시 Query"
              onChange={handleText}
              value={textData.EXQuery}
              name="EXQuery"
            ></textarea>
            <div className="textContent">예시 Query 설명</div>
            <textarea
              className="addText"
              placeholder="예시 Query 설명"
              onChange={handleText}
              value={textData.EXExplanation}
              name="EXExplanation"
            ></textarea>
            <div className="completeDiv">
              <button className="addComplete" onClick={handlePost}>
                완료
              </button>
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
