import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryContents = ({ it, idx, setData19 }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editData, setEditData] = useState({
    Name: it.Name,
    Explanation: "",
    Query: "",
    Details: "",
    EXQuery: "",
    EXExplanation: "",
  });

  /** Toggle 다루기 */
  const handleEditToggle = () => {
    setEditToggle(!editToggle);
  };

  /** input 값 수정 */
  const handleEditData = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  /** 완료 버튼 */
  const handleEditComplete = async (e) => {
    console.log(editData);
    try {
      const response = await axios.patch(
        "http://localhost:5000/patch/19",
        editData
      );
      setData19(response.data);
      setEditToggle(!editToggle);
      window.scroll(0, 0);
    } catch (error) {
      console.error("post 오류 : ", error);
    }
  };

  /** 취소 버튼 */
  const handleEditCancel = () => {
    setEditData({
      Explanation: "",
      Query: "",
      Details: "",
      EXQuery: "",
      EXExplanation: "",
    });
    setEditToggle(!editToggle);
  };

  /** 삭제 확인 메세지 */
  const handleDeleteConfirm = (Name) => {
    if (window.confirm("삭제 하시겠습니까?") === true) {
      handleDelete(Name);
    }
  };

  /** 삭제 기능 */
  const handleDelete = async (Name) => {
    try {
      const response = await axios.delete("http://localhost:5000/delete/19", {
        data: { Name },
      });
      setData19(response.data);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("delete 오류 ", error);
    }
  };

  return (
    <div key={idx}>
      <div className="name">{it.Name}</div>
      <div className="contentWrapper">
        {editToggle ? (
          <input
            className="Explanation"
            placeholder="설명"
            onChange={handleEditData}
            value={editData.Explanation}
            name="Explanation"
          ></input>
        ) : (
          <div className="Explanation">{it.Explanation}</div>
        )}
        <div className="sutTitle">Query</div>
        <div className="QueryWrapper">
          {editToggle ? (
            <input
              className="Query"
              placeholder="Query"
              onChange={handleEditData}
              value={editData.Query}
              name="Query"
            ></input>
          ) : (
            <div className="Query">{it.Query}</div>
          )}
        </div>
        {editToggle ? (
          <input
            className="QurryExplanation"
            placeholder="Query 설명"
            onChange={handleEditData}
            value={editData.Details}
            name="Details"
          ></input>
        ) : (
          <div className="QurryExplanation">{it.Details}</div>
        )}
        <div className="sutTitle">예시</div>
        <div className="QueryWrapper">
          {editToggle ? (
            <input
              className="ExQuery"
              placeholder="ExQuery"
              onChange={handleEditData}
              value={editData.ExQuery}
              name="ExQuery"
            ></input>
          ) : (
            <div className="ExQuery">{it.EXQuery}</div>
          )}
        </div>
        {editToggle ? (
          <input
            className="Explanation"
            placeholder="ExQuery 설명"
            onChange={handleEditData}
            value={editData.EXExplanation}
            name="EXExplanation"
          ></input>
        ) : (
          <div className="Explanation">{it.EXExplanation}</div>
        )}
        <div>
          <div className="ImageDiv">
            <img className="ExImage" src={it.image} alt="준비중.."></img>
          </div>
        </div>
        {editToggle ? (
          <div className="UpDeDiv">
            <button className="UpdateButton" onClick={handleEditComplete}>
              완료
            </button>
            <button className="DeleteButton" onClick={handleEditCancel}>
              취소
            </button>
          </div>
        ) : (
          <div className="UpDeDiv">
            <button className="UpdateButton" onClick={handleEditToggle}>
              수정
            </button>
            <button
              className="DeleteButton"
              onClick={() => handleDeleteConfirm(it.Name)}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryContents;
