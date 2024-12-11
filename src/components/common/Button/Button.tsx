import React from 'react';
import styles from './Button.scss';
import { ButtonProps } from 'types/base-types';

const Button = ({ variant = '', ...otherProps }: ButtonProps) => (
  <button
    {...otherProps}
    className={
      styles.component +
      variant
        .split(' ')
        .map((name) => ' ' + (styles[name] || name))
        .join('')
    }
  />
);

export { Button };
