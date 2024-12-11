import React from 'react';
import { VariantAndChildren } from 'types/base-types';
import styles from './DetailsBox.scss';

const DetailsBox = ({
  variant = '',
  children,
  ...otherProps
}: VariantAndChildren) => (
  <article
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
  </article>
);

export { DetailsBox };
