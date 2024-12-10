import React from 'react';
import { VariantAndChildren } from 'types/base-types';
import styles from './DetailsImage.scss';

const DetailsImage = ({
  variant = '',
  children,
  ...otherProps
}: VariantAndChildren) => (
  <div
    {...otherProps}
    className={
      styles.component +
      variant
        .split(' ')
        .map((name) => ' ' + (styles[name] || name))
        .join('')
    }
  >
    {children}
  </div>
);

export default DetailsImage;
