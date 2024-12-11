import React from 'react';

import { Row } from '../../layout/Row/Row';
import { Col } from '../../layout/Col/Col';

import styles from './TripListOptions.scss';

interface TripListOptionsProps {
  tags: string[]; // Tablica stringów dla tagów
  filters: {
    phrase: string;
    duration: {
      from: number;
      to: number;
    };
    tags: string[];
  };
  changeSearchPhrase: (phrase: string) => void;
}
const TripListOptions = ({ tags, filters }: TripListOptionsProps) => {
  const handleTags = (tag: string, checked: boolean) => {
    if (checked) {
      console.log('Adding tag', tag);
      // TODO - use action dispatcher from props
    } else {
      console.log('Removing tag', tag);
      // TODO - use action dispatcher from props
    }
  };

  const handleDuration = (type: 'from' | 'to', value: number) => {
    console.log('Changing duration', type, value);
    // TODO - use action dispatcher from props
  };

  const handleSearch = (phrase: string) => {
    //  changeSearchPhrase(phrase);
    console.log(phrase);
  };

  return (
    <div className={styles.component}>
      <Row>
        <Col lg={4}>
          <div className={styles.filter}>
            <label>
              <input
                className={`${styles.input} ${styles.search}`}
                type='text'
                placeholder='Search...'
                value={filters.phrase}
                onChange={(event) => handleSearch(event.currentTarget.value)}
              />
            </label>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.filter}>
            <label>
              Duration from:
              <input
                className={`${styles.input} ${styles.number}`}
                type='number'
                value={filters.duration.from}
                min='1'
                max='14'
                onChange={(event) =>
                  handleDuration('from', Number(event.currentTarget.value))
                }
              />
            </label>
            <label>
              to:
              <input
                className={`${styles.input} ${styles.number}`}
                type='number'
                value={filters.duration.to}
                min='1'
                max='14'
                onChange={(event) =>
                  handleDuration('to', Number(event.currentTarget.value))
                }
              />
            </label>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.filter}>
            <details>
              <summary className={styles.toggle}>Filter by tags</summary>
              <div className={styles.dropdown}>
                {Object.keys(tags).map((tag) => (
                  <label key={tag} className={styles.option}>
                    <input
                      type='checkbox'
                      checked={tags.indexOf(tag) > -1}
                      onChange={(event) =>
                        handleTags(tag, event.currentTarget.checked)
                      }
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </details>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export { TripListOptions };
