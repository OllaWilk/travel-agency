import React from 'react';
import { Trip, TripsType } from 'types/trip-types';

import TripSummary from '../../features/TripSummary/TripSummary';
import TripListOptions from '../../features/TripListOptions/TripListOptions';
import Section from '../../layout/Section/Section';
import Row from '../../layout/Row/Row';
import Col from '../../layout/Col/Col';
import PageTitle from '../../common/PageTitle/PageTitle';

const Trips = ({ trips }: TripsType) => (
  <Section>
    <Row>
      <Col xs={12}>
        <PageTitle text='All trips' />
        <TripListOptions />
        <Row>
          {trips.length ? (
            trips.map((trip: Trip) => <TripSummary key={trip.id} {...trip} />)
          ) : (
            <p>Sorry, no results found. Try adjusting the filters.</p>
          )}
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Trips;
