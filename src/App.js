import React, { useState, useEffect } from "react";

// Components //
import { Cards, ChartsData, CountryPicker } from "./components";

import "./App.css";
import { fetchData } from "./api";

const App = () => {
  // ** States ** //
  const [data, setData] = useState();

  // data from fetching api in index.js //

  const handleFetchData = async () => {
    try {
      const res = await fetchData();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="mainCont">
      <CountryPicker />
      <div className="chartsCards">
        <Cards response={data} />

        <ChartsData />
      </div>
    </div>
  );
};

export default App;
