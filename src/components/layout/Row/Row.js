import React from 'react';
import PropTypes from 'prop-types';
import './Row.scss';

const Row = ({ children, className, style }) => (
  <div className={`row ${className || ''}`} style={style}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Row;
