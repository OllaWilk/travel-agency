import React from 'react';

import Row from '../../layout/Row/Row';
import Col from '../../layout/Col/Col';

import styles from './TripListOptions.scss';

interface TripListOptionsProps {
  tags: { [key: string]: boolean };
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

class TripListOptions extends React.Component<TripListOptionsProps> {
  handleTags(tag: string, checked: boolean) {
    if (checked) {
      console.log('Adding tag', tag);
      // TODO - use action dispatcher from props
    } else {
      console.log('Removing tag', tag);
      // TODO - use action dispatcher from props
    }
  }

  handleDuration(type: 'from' | 'to', value: number) {
    console.log('Changing duration', type, value);
    // TODO - use action dispatcher from props
  }

  handleSearch(phrase: string) {
    this.props.changeSearchPhrase(phrase);
  }

  render() {
    const { tags, filters } = this.props;

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
                  onChange={(event) =>
                    this.handleSearch(event.currentTarget.value)
                  }
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
                    this.handleDuration(
                      'from',
                      Number(event.currentTarget.value)
                    )
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
                    this.handleDuration('to', Number(event.currentTarget.value))
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
                        checked={filters.tags.indexOf(tag) > -1}
                        onChange={(event) =>
                          this.handleTags(tag, event.currentTarget.checked)
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
  }
}

export default TripListOptions;
