import React from 'react';
import './Row.scss';
import { RowType } from 'types/base-types';

const Row = ({ children, className, style }: RowType) => (
  <div className={`row ${className || ''}`} style={style}>
    {children}
  </div>
);

export default Row;
