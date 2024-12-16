import { connect } from 'react-redux';
import { TripListOptions } from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
} from '../../../redux/selectors/tagsSelectors';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
});

export const ConnetedTrips = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripListOptions);
