
import React from 'react';
import { PropTypes } from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';

const renderForecastitemDays = (forecastData) => {
     return forecastData.map(({weekDay,hour,data},index) => 
        <ForecastItem 
        key={`${weekDay}${hour}`} 
        weekDay={weekDay} 
        hour={hour} 
        data={data}>
        </ForecastItem>)
}


const renderProgress = (forecastData) => (
    <h3>Cargando...</h3>
);

const ForecastComponent = ({city,forecastData}) => (
    
    <div className="forecastContainer">
        <h2 className="forecastTitle">Pronóstico Extendido para {city}</h2>
        {
            forecastData? renderForecastitemDays(forecastData):
            renderProgress(forecastData)
        }
    </div>
     
);
ForecastComponent.propTypes={
    city: PropTypes.string.isRequired,
    forecastData : PropTypes.array
}
export default ForecastComponent;