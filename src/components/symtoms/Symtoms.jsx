import React from "react";
import lungs from "./../../images/lungs.png";
import cough from "./../../images/cough.png";
import fever from "./../../images/fever.png";
import sorethorat from "./../../images/sorethroat.png";

export const Symtoms = () => {
  return (
    <div className="symtomsDiv">
      <div className="symtoms">
        <h1 className="symHeading">Symtoms</h1>
        <h1>
          <span>
            <img src={fever} className="imgsym" alt='fever' />
          </span>
          Fever
        </h1>
        <h1>
          <img src={cough} className="imgsym" alt='cough'  />
          Dry Cough
        </h1>
        <h1>
          <img src={lungs} className="imgsym" alt='lungs' />
          Shortness of Breath
        </h1>
        <h1>
          <img src={sorethorat} className="imgsym" alt='sore thraot' />
          Sore Throat
        </h1>
      </div>
      <div className="news">
        <h1 className="symHeading">
          News <span>(Click to read)</span>
        </h1>
        <h1>
          <a
            href="https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html"
            target="_blank" rel="noopener noreferrer"
          >
            Corona Vaccine Tracker(Article)
          </a>
        </h1>
        <h1>
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            target="_blank" rel="noopener noreferrer"
          >
            How to Protect Yourself & Others
          </a>
        </h1>
        <h1>
          <a href="https://www.bbc.com/news/business-51706225" target="_blank" rel="noopener noreferrer">
            Corona Impact on Economies
          </a>
        </h1>
      </div>
    </div>
  );
};
