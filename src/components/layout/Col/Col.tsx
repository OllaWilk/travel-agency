import React from 'react';
import { ColProps } from 'types/base-types';
import './Col.scss';

const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  offsetLg,
  offsetXl,
  className,
  style,
}: ColProps) => {
  const classes = [
    'col',
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
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

export { Col };
