import React from 'react';
import { useSelector } from 'react-redux';
import { TripType } from '../../../types/trip-types';

import { Col, Container, Row } from 'react-bootstrap';
import { TripSummary } from '../../features/TripSummary/TripSummary';
import { TripListOptions } from '../../features/TripListOptions/TripListOptions';
import { Section } from '../../layout/Section/Section';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { getAllTrips } from '../../../redux/selectors/tripsSelectors';

const Trips = () => {
  const trips = useSelector(getAllTrips);

  const tags = Array.from(new Set(trips.flatMap((trip) => trip.tags)));
  /* TO DO */
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
        <Row className='align-items-center justify-content-evenly'>
          <Col md={12}>
            <PageTitle text='All trips' />
            <TripListOptions
              tags={tags}
              filters={filters}
              changeSearchPhrase={changeSearchPhrase}
            />
            <Row>
              {trips.length ? (
                trips.map((trip: TripType) => (
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
