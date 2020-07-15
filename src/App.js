import React, { useState, useEffect } from "react";

// Components //
import { Cards, ChartsData, CountryPicker, Symtoms , MapContainer } from "./components";

import "./App.css";
import { fetchData, fetchCountrydata } from "./api";
import { symtoms } from "./components/symtoms/Symtoms";

const App = () => {
  // ** States ** //
  const [data, setData] = useState();
  const [countryHandler, setCountryHandler] = useState([]);

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

  const handleChangeCountry = async (country) => {
    const result = await fetchCountrydata(country);
    setData(result);

    setCountryHandler(await country);
  };

  return (
    <div className="mainCont">
      <CountryPicker handleOnChange={handleChangeCountry} />
      <div className="chartsCards">
        <Cards response={data} />
        <Symtoms />

        <ChartsData />
        <MapContainer />
      </div>
    </div>
  );
};

export default App;
