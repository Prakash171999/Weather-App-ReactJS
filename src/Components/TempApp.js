import React, {useState, useEffect} from "react";
import helpers from './Helpers';

const api = {
  key: helpers.API_KEY,
  base: helpers.BASE_URL,
}

const TempApp = () => {

  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState(null);

  //fetching data from openweather api
  useEffect(() => {
    const fetchApi =  async () => {
      const url = `${api.base}weather?q=${query}&appid=${api.key}`
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setWeather(resJson);

    }
    fetchApi();
  })

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="inputField" onChange={(e) => {}} />
        </div>

        <div className="info">
          <h2 className="location">
            {/* {weather.name} */}
          </h2>
          <h1 className="temp">5.25 C</h1>
          <h3 className="tempmin_max">Min : 5.25Cel | Max : 5.25 Cel </h3>
        </div>

        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
      </div>
    </>
  );
};

export default TempApp;
