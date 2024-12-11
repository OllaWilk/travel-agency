import React from 'react';
import { Trip } from 'types/trip-types';
import { TripSummary } from '../../features/TripSummary/TripSummary';
import { TripListOptions } from '../../features/TripListOptions/TripListOptions';
import { Section } from '../../layout/Section/Section';
import { Row } from '../../layout/Row/Row';
import { Col } from '../../layout/Col/Col';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFilteredTrips } from '../../../redux/tripsReducer';
import { Container } from '../../layout/Container/Container';

const Trips = () => {
  const trips = useSelector(getFilteredTrips);

  const tags = Array.from(new Set(trips.flatMap((trip) => trip.tags)));
  const filters = {
    phrase: '',
    duration: { from: 0, to: 14 },
    tags: [],
  };

  const changeSearchPhrase = (phrase: string) => {
    console.log('Search phrase:', phrase);
  };

  return (
    <Section>
      <Container>
        <Row>
          <Col md={6}>
            <PageTitle text='All trips' />
            <TripListOptions
              tags={tags}
              filters={filters}
              changeSearchPhrase={changeSearchPhrase}
            />
            <Row>
              {trips.length ? (
                trips.map((trip: Trip) => (
                  <TripSummary key={trip.id} {...trip} />
                ))
              ) : (
                <p>Sorry, no results found. Try adjusting the filters.</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export { Trips };
