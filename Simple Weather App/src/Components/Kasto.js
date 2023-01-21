import React from 'react';
import Snow from './Snow';
import Clear from './Clear';
import Thuderstorm from './Thuderstorm';
import Clouds from './Clouds';
import Rain from './Rain';
import Haze from './Haze';
import Smoke from './Smoke';


const Kasto = (props) => {

 

  return (
    <>
         <div id="con">
          {props.desc.main === "Haze" && <Haze /> }
          {props.desc.main === "Snow" && <Snow /> }
          {props.desc.main === "Rain" && <Rain /> }
          {props.desc.main === "Clear" && <Clear /> }
          {props.desc.main === "Clouds" && <Clouds /> }
          {props.desc.main === "Thunderstorm" && <Thuderstorm /> }
          {props.desc.main === "Smoke" && <Smoke /> }
         </div>
        <div className="weather_description">
            <p>{props.desc.description}</p>
        </div>
       
       
      
    </>
  )
}

export default Kasto
