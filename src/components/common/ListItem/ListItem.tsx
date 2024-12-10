import React from 'react';
import parse from 'html-react-parser';
import Icon from '../Icon/Icon';
import styles from './ListItem.scss';

interface Props {
  icon: string;
  title: string;
}

function ListItem({ icon, title }: Props) {
  return (
    <div className={styles.component}>
      <Icon name={icon} />
      <span>{parse(title)}</span>
    </div>
  );
}

export default ListItem;
