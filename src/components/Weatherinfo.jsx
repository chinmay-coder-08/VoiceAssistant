import React from 'react'
import "../css/weatherinfo.css"

const Weatherinfo = ({ temp, name, country }) => {
    return (
        <>
            <div className="weather-main">
                <h4>{name}, {country}</h4>
                <h1>{temp} °C</h1>
            </div>
        </>
    )
}

export default Weatherinfo
