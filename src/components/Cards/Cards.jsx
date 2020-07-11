import React from "react";
import CountUp from "react-countup";

const Cards = ({ response }) => {
  return (
    <div>
      <div className='mainBorder'>
        <div>
          <h2 className="lastUpdate">Last Updated on:</h2>
        </div>
        {response ? (
          <div className="borderCont">
            <div className="borderBox confirmed">
              <h3>Total Confirmed</h3>
              <h1>
                <CountUp
                  start={0}
                  end={response.confirmed.value}
                  duration={1}
                  separator=","
                />
              </h1>
            </div>
            <div className="borderBox recovered">
              <h3>Recovered</h3>
              <h1>
                <CountUp
                  start={0}
                  end={response.recovered.value}
                  duration={1}
                  separator=","
                />
              </h1>
            </div>
            <div className="borderBox deaths">
              <h3>Total Deaths</h3>
              <h1>
                <CountUp
                  start={0}
                  end={response.deaths.value}
                  duration={1}
                  separator=","
                />
              </h1>
            </div>
          </div>
        ) : (
          "..loading"
        )}
      </div>
    </div>
  );
};

export default Cards;
