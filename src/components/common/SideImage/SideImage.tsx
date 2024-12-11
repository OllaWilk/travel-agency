import React from 'react';
import styles from './SideImage.scss';

interface Props {
  source: string;
}

const SideImage = ({ source }: Props) => (
  <img className={styles.component} src={`${source}`} />
);

export { SideImage };
