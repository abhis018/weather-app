import React, { Component } from 'react';
import './Body.css';
import Boxlist from './Boxlist';

const Body = ({onInputChange, onSubmit, weatherData}) => {
        return (
            <div className='body'>
                <h1>Weather app</h1>
                <input className="inp i" type="text" placeholder=" Search for cities" onChange={onInputChange}/>
                <button className="but grow i" onClick={onSubmit}>Search</button>
                <Boxlist onChange={weatherData}/>
            </div>
        )
    }


export default Body;