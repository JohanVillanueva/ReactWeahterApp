import React  from 'react';
import WeatherLocation from './WeatherLocation';
import { PropTypes } from 'prop-types';
import './styles.css';



const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    }
    const getWeatherLocationComponent = cities => (
        cities.map(city =>{
            return <WeatherLocation 
                    key={city.key} 
                    city={city.name}
                    data={city.data}
                    onWeatherLocationClick={()=>handleWeatherLocationClick(city.name)}>
                    </WeatherLocation>
        })
    );
    return (
    <div className="locationListContainer">
        { getWeatherLocationComponent(cities) }
    </div>
    );
};

LocationList.proptypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;