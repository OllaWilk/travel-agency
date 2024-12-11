import React from 'react';
import styles from './PageTitle.scss';

interface Props {
  text: string;
}

const PageTitle = ({ text }: Props) => <h2 className={styles.title}>{text}</h2>;

export { PageTitle };
