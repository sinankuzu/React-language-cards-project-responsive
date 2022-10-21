import React, { useState, useEffect } from "react";
import Card from "../card/Card";

import "./Section.css";

const Section = ({ languages }) => {
  return (
    <div className="container">
      <h1>Languages</h1>
      <div className="grid-container">
        {languages.map((eleman, index) => {
          return <Card eleman={eleman} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
