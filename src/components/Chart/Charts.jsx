import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line} from "react-chartjs-2";

export const ChartsData = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      let data = await fetchDailyData();
      setDailyData(data);
    };

  fetchApi();
  });

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#598EA5",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#DEB887",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

 

  return (
    <div>

  <div className="lineChart">{LineChart}</div>
    </div>
  )
};
