import React, { useEffect, useState } from "react";
import "./css/style.css";
import Kasto from "./Kasto";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kathmandu");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1f4811f840fc9a605fad123f62ea27f2`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
      setCondition(resjson.weather[0]);
    };

    fetchApi();
  }, [search]);
  const inputEvent = (e) => {
    setSearch(e.target.value);
  };

  
  

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            id="searchCity"
            className="inputFeild"
            onChange={inputEvent}
            value={search}
          />
        </div>

       
       

        {!city ? (
          <div className="noCity">
            <h1 className="emo"> 😞 </h1>
            <h2 className="err">Ooups, City not found</h2>
            <p className="para">Please enter valid city name</p>
          </div>
        ) : 
          <>

              <Kasto desc={condition} />
         


            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}&deg;C</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        }
      </div>
    </>
  );

  
};

export default Tempapp;
