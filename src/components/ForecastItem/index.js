import React from 'react';
import { PropTypes } from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';


const ForecastItem = ({weekDay, hour,data}) => {
    return (
        <div className="forecastItemContainer">
            <div>{weekDay} - {hour} hs</div>
            <WeatherData data={data}></WeatherData>
        </div>
    );
}


ForecastItem.propTypes = {
    weekDay :PropTypes.string.isRequired,
    hour :PropTypes.number.isRequired,
    data :PropTypes.any.isRequired
}
export default ForecastItem;