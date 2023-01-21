import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

import "./index.css";

const Temp = () => {
    const [searchValue, setSearchValue] = useState("kathmandu");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1f4811f840fc9a605fad123f62ea27f2`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp,humidity,pressure} = data.main;
            const{main:weathermood} = data.weather[0];
            const{name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeather ={
                temp,humidity,pressure,weathermood,name,speed,country,sunset
            }
            setTempInfo(myNewWeather)
            setSearchValue("");
         
            
        } catch (error) {
            console.log(error);
            
        }

    }
    useEffect(()=>{
        getWeatherInfo();

    },[])
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="SearchTerm"
            onChange={(e)=>setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card */}
      <WeatherCard tempInfo={tempInfo} />
      
    </>
  );
};

export default Temp;
