import { connect } from 'react-redux';
import { Regions } from './Regions';
import { getAllRegions } from '../../../redux/selectors/regionsRedux';
import { getAllSubregions } from '../../../redux/subregionsRedux';
import { getAllCountries } from '../../../redux/selectors/countriesSelectors';

const mapStateToProps = (state) => ({
  regions: getAllRegions(state),
  subregions: getAllSubregions(state),
  countries: getAllCountries(state),
});

export const ConnectRegions = connect(mapStateToProps)(Regions);
