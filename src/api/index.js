import axios from "axios";

const base_url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(base_url);

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchCountrydata = async (country_name) => {
  try {
    const { data } = await axios.get(`${base_url}/countries/${country_name}`);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${base_url}/daily`);

    const modifiedDailyData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedDailyData;
  } catch (error) {
    console.error(error);
  }
};

// fetchDailyData();

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${base_url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("error", error);
  }
};

fetchCountries();
