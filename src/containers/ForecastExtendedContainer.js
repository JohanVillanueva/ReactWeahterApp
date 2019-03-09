import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastComponent from './../components/ForecastExtended';
import { getCity, getForecastDataFromCities } from './../reducers/index';
class ForecastExtendedContainer extends PureComponent {

    render() {
        const {city, forecastData} = this.props;
        return (
            city &&
            <ForecastComponent city={city} forecastData={forecastData}> </ForecastComponent> 
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

const mapStateToProps = state => ({
    city: getCity(state),
    forecastData: getForecastDataFromCities(state)
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
