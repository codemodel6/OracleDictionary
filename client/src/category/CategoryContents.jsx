import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryContents = ({ it, idx, setData19 }) => {
  const handleDelete = async (Name) => {
    console.log(Name);
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
        <div className="Explanation">{it.Explanation}</div>
        <div className="sutTitle">Query</div>
        <div className="QueryWrapper">
          <div className="Query">{it.Query}</div>
        </div>
        <div className="QurryExplanation">{it.Details}</div>
        <div className="sutTitle">예시</div>
        <div className="QueryWrapper">
          <div className="ExQuery">{it.EXQuery}</div>
        </div>

        <div className="Explanation">{it.EXExplanation}</div>
        <div>
          <div className="ImageDiv">
            <img className="ExImage" src={it.image} alt="준비중.."></img>
          </div>
        </div>
        <div className="UpDeDiv">
          <button className="UpdateButton">수정</button>
          <button
            className="DeleteButton"
            onClick={() => handleDelete(it.Name)}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryContents;
