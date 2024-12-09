import React from 'react';
import PropTypes from 'prop-types';

import TripSummary from '../../features/TripSummary/TripSummary';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';

import Row from '../../layout/Row/Row';
import Col from '../../layout/Col/Col';
import TripListOptions from '../../features/TripListOptions/TripListOptionsContainer';

const Trips = ({ trips }) => (
  <Section>
    <Row>
      <Col xs={12}>
        <PageTitle text='All trips' />
        <TripListOptions />
        <Row>
          {trips.length ? (
            trips.map((trip) => <TripSummary key={trip.id} {...trip} />)
          ) : (
            <p>Sorry, no results found. Try adjusting the filters.</p>
          )}
        </Row>
      </Col>
    </Row>
  </Section>
);

Trips.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object),
};

export default Trips;
