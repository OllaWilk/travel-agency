import React from 'react';
import { Link } from 'react-router-dom';
import { TripSummaryType } from 'types/trip-types';
import { Col } from 'react-bootstrap';

import styles from './TripSummary.scss';

const TripSummary = ({
  id,
  image,
  name,
  cost,
  days,
  tags,
}: TripSummaryType) => (
  <Col xs={12} sm={6} lg={4}>
    <Link to={`/trip/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>{days} days</span>
          <span>from {cost}</span>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tag.toString()}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  </Col>
);

export { TripSummary };
