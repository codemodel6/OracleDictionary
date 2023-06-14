import React from "react";

const CategoryContents = ({ it, idx }) => {
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
      </div>
    </div>
  );
};

export default CategoryContents;
