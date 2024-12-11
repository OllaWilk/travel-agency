import { connect } from 'react-redux';
import { Trip } from './Trip';
import { getTripById } from '../../../redux/tripsReducer';
import { getCountryByCode } from '../../../redux/countriesRedux';

const mapStateToProps = (state, props) => {
  const trip = getTripById(state, props.match.params.id);
  const country = getCountryByCode(state, trip.country.code);

  return {
    ...trip,
    country,
  };
};

export const ConnectTrip = connect(mapStateToProps)(Trip);
