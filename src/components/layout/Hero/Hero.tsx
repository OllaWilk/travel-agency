import React from 'react';
import styles from './Hero.scss';

interface Props {
  variant?: string;
  titleText: string;
  imageSrc?: string;
}
const Hero = ({ variant = '', titleText, imageSrc, ...otherProps }: Props) => (
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
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc} />
  </div>
);

export default Hero;
