import React from 'react';
import { VariantAndChildren } from 'types/base-types';
import styles from './Section.scss';

const Section = ({
  variant = '',
  children,
  ...otherProps
}: VariantAndChildren) => (
  <section
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
  </section>
);

export { Section };
