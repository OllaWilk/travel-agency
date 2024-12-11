import React from 'react';
import { RowType } from 'types/base-types';
import styles from './Row.scss';

const Row = ({ children, style, className }: RowType) => (
  <div className={`${styles.row} ${className ? className : ''}`} style={style}>
    {children}
  </div>
);

export { Row };
