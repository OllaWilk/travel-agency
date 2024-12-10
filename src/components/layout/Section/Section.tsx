import React from 'react';
import styles from './Section.scss';
import { VariantAndChildren } from 'types/base-types';

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

export default Section;
