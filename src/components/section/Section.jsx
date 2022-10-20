import React, { useState } from "react";
import "./Section.css";

const Section = ({ myData }) => {
  const [style, setStyle] = useState("first-page");
  const [style2, setStyle2] = useState("second-page");
  const change = (e) => {
    if (style === "first-page") {
      // console.log("clicked")
      e.target.className = "first-page-click";
      setStyle2("second-page-show");
    //   setStyle("first-page-click");
    } else if (style === "first-page-click") {
      // console.log("clicked again")
      e.target.className = "first-page";
      //   setStyle("first-page");
    }
  };

  return (
    <div className="container">
      <h1>Languages</h1>
      <div className="grid-container">
        {myData.map((eleman) => {
          return (
            <div className="card" onClick={change}>
              <div className={style}>
                <img src={eleman.img} alt="" />
                <p>{eleman.name}</p>
              </div>
              <div className={style2}>
                <ul>
                  <li>{eleman.options[0]}</li>
                  <li>{eleman.options[1]}</li>
                  <li>{eleman.options[2]}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
