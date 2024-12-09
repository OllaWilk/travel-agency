import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import CountrySummary from '../../features/CountrySummary/CountrySummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import Row from '../../layout/Row/Row';

const Countries = ({ countries }) => (
  <Section>
    <PageTitle text='All countries' />
    <Row>
      {Object.keys(countries).map((code) => (
        <CountrySummary key={code} {...countries[code]} />
      ))}
    </Row>
  </Section>
);

Countries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object),
};

export default Countries;
