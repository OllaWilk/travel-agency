import React from 'react';
import { ChildrenOnly } from 'types/base-types';
import styles from './Container.scss';

const Container = ({ children }: ChildrenOnly) => {
  return <div className={styles.container}>{children}</div>;
};

export { Container };
