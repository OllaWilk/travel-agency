import React from 'react';
import { CountrySummeryType } from 'types/country-types';
import { TripType } from 'types/trip-types';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { DetailsBox } from '../../common/DetailsBox/DetailsBox';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';
import { useSelector } from 'react-redux';
import { getAllTrips } from '../../../redux/selectors/tripsSelectors';

import styles from './CountrySummary.scss';

type CountrySummary = { trips?: TripType[] } & CountrySummeryType;

const CountrySummary = ({
  alpha3Code,
  name,
  region,
  subregion,
  languages,
  capital,
}: CountrySummary) => {
  const trips = useSelector(getAllTrips);

  return (
    <Col xs={12}>
      <Link to={`/country/${alpha3Code}`} className={styles.component}>
        <DetailsBox variant='small light'>
          <Row>
            <Col md={12} lg={8} xl={9}>
              <Row>
                <Col md={6}>
                  <h3 className={styles.name}>{name}</h3>
                  <h4 className={styles.region}>
                    {region} / {subregion}
                  </h4>
                  <List variant='light'>
                    <ListItem
                      title={`<strong>Available trips:</strong> ${
                        trips && trips.length
                      }`}
                      icon='arrow-circle-right'
                    />
                  </List>
                </Col>
                <Col md={5} xl={6}>
                  <div className={styles.details}>
                    <List variant='light'>
                      <ListItem
                        title={`<strong>Capital:</strong> ${capital}`}
                        icon='city'
                      />
                      <ListItem
                        title={`<strong>Languages:</strong> ${languages[0].name}`}
                        icon='globe'
                      />
                    </List>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </DetailsBox>
      </Link>
    </Col>
  );
};
export { CountrySummary };
