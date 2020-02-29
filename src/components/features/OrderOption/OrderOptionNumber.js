import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type="number"
      value={currentValue}
      min={limits.min}
      mix={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}

    >
    </input>
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
