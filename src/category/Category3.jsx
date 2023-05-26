import React from "react";
import data3 from "../data/Data3";

const category3 = () => {
  return (
    <div>
      <div>
        {data3.map((it, idx) => (
          <div key={idx}>
            <div>{""}</div>
            <div>{it.Name}</div>
            <div>{it.Explanation}</div>
            <div>{it.Query}</div>
            <div>{it.EXQuery}</div>
            <div>{it.EXExplanation}</div>
            <div>
              <img src={it.image} alt=""></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default category3;
