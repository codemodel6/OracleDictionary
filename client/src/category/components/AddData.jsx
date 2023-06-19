import React, { useState } from "react";
import axios from "axios";
import { AddDiv } from "../CategoryStyle";

const AddData = ({ setData19 }) => {
  const [toggle, setToggle] = useState(false);
  const [textData, setTextData] = useState({
    Name: "",
    Explanation: "",
    Query: "",
    Details: "",
    EXQuery: "",
    EXExplanation: "",
  });
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
    try {
      const response = await axios.post(
        "http://localhost:5000/post/19",
        textData
      );
      setData19(response.data);

      // 완료 후 에디터 닫음
      handleToggel();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("post 오류 ", error);
    }
  };
  return (
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
  );
};

export default AddData;
