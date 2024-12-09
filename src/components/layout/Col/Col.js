import React from 'react';
import PropTypes from 'prop-types';
import './Col.scss';

const Col = ({
  children,
  xs,
  md,
  lg,
  xl,
  offsetLg,
  offsetXl,
  className,
  style,
}) => {
  const classes = [
    'col',
    xs && `col-xs-${xs}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`,
    offsetLg && `col-lg-offset-${offsetLg}`,
    offsetXl && `col-xl-offset-${offsetXl}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  offsetLg: PropTypes.number,
  offsetXl: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Col;
