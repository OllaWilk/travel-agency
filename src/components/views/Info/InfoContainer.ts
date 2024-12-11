import { connect } from 'react-redux';
import { Info } from './Info';

const mapStateToProps = (state) => ({
  title: state.app.title,
});

export const ConnectInfo = connect(mapStateToProps)(Info);
