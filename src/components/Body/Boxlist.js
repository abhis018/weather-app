import React from 'react';
import './Body.css';


const Boxlist =({onChange})=>{
    return (
        <div >
            <div className="container">
                <h2>{onChange && onChange.name ? onChange.name : 'City Name'}</h2>
                <div className="box first-box" >
                    <h3>Temperature :</h3>
                    <h3>{onChange && onChange.main && onChange.main.temp ? onChange.main.temp : 0} &#176;C</h3>
                </div>
                <div className="box">
                    <h3>Pressure :</h3>
                    <h3>{onChange && onChange.main && onChange.main.pressure ? onChange.main.pressure : 0} hPa</h3>
                </div>
                <div className="box">
                    <h3>Wind :</h3>
                    <h3>{onChange && onChange.wind && onChange.wind.speed ? onChange.wind.speed : 0} m/s</h3>
                </div>
                <div className="box last-box">
                    <h3>Humidity :</h3>
                    <h3>{onChange && onChange.main && onChange.main.humidity ?  onChange.main.humidity : 0} &#37;</h3>
                </div>
            </div>
        </div>
    );
}

export default Boxlist;