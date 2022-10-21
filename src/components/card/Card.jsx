import React, { useState } from "react";

const Card = ({eleman}) => {

    console.log(eleman)
    const [style, setStyle] = useState("first-page");
    const [style2, setStyle2] = useState("second-page");
    const [cardStyle, setCardStyle] = useState("card")

    const Change = (e) => {
      if (style === "first-page") {
        // console.log("clicked");
        // e.target.style = "first-page-click";
        setStyle("first-page-click");
        setStyle2("second-page-click");
        // setCardStyle("card-flip")
       
        
      } else if (style === "first-page-click") {
        // console.log("clicked again");
        // e.target.style = "first-page";
         setStyle("first-page");
        setStyle2("second-page");
        //  setCardStyle("card");
      }
    };


  return (
    <div>
      <div className={cardStyle} onClick={Change}>
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
    </div>
  );
}

export default Card