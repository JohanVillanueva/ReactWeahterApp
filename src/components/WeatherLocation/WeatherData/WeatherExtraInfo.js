import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.css';
const WeatherExtraInfo = ({humidity,wind}) => {
    return (
        <div className="weatherExtraInfoContainer">
            <span className="extraInfo"><strong>{`Humedad: `}</strong>{`${humidity}% `}</span>
            <span className="extraInfo"><strong>{`Viento: `}</strong>{`${wind}`}</span>
        </div> 
    );
} 

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;