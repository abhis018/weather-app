import React from 'react';

const Body = () => {
    function getData () {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "9661106f08mshb33efb64511b9fbp12c5eejsn9982663db56f",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => {
	    console.log(response);
        })
        .catch(err => {
	    console.error(err);
        });
    }
    return (
        <div>
            <h1>weather app</h1>
        </div>
    )
}

export default Body;