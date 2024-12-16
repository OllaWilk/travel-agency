import { connect } from 'react-redux';
import { Country } from './Country';
import { getCountryByCode } from '../../../redux/selectors/countriesSelectors';
import { getTripsForCountry } from '../../../redux/selectors/tripsReducer';

const mapStateToProps = (state, props) => {
  const country = getCountryByCode(state, props.match.params.id);
  const trips = getTripsForCountry(state, country.alpha3Code);

  return {
    ...country,
    trips,
  };
};

export const ConnectedCountry = connect(mapStateToProps)(Country);
