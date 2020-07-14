import React from "react";
// import {fever , lungs , cough, sorethroat} from '../../images'

export const Symtoms = () => {
  return (
    <div className="symtomsDiv">
      <div className="symtoms">
        <h1 className="symHeading">Symtoms</h1>
        <h1>Fever</h1>
        <h1>Dry Cough</h1>
        <h1>Shortness of Breath</h1>
        <h1>Sore Throat</h1>
      </div>
      <div className="news">
        <h1 className="symHeading">News <span>(Click to read)</span></h1>
        <h1><a href='https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html' target='_blank'>Corona Vaccine Tracker(Article)</a></h1>
        <h1><a href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html' target='_blank'>How to Protect Yourself & Others</a></h1>
        <h1><a href='https://www.bbc.com/news/business-51706225' target='_blank'>Corona Impact on Economies</a></h1>

      </div>
    </div>
  );
};
