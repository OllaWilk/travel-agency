import { connect } from 'react-redux';
import { Country } from './Country';
import { getCountryByCode } from '../../../redux/countriesRedux';
import { getTripsForCountry } from '../../../redux/tripsReducer';

const mapStateToProps = (state, props) => {
  const country = getCountryByCode(state, props.match.params.id);
  const trips = getTripsForCountry(state, country.alpha3Code);

  return {
    ...country,
    trips,
  };
};

export const ConnectedCountry = connect(mapStateToProps)(Country);
