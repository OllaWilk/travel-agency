import React from 'react';
import Section from '../../layout/Section/Section';
import CountrySummary from '../../features/CountrySummary/CountrySummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import Row from '../../layout/Row/Row';
import { CountriesRecord, CountryType } from 'types/country-types';

export type Countries = {
  [key: string]: CountryType;
};

const Countries = ({ countries }: { countries: CountriesRecord }) => (
  <Section>
    <PageTitle text='All countries' />
    <Row>
      {Object.keys(countries).map((code) => (
        <CountrySummary key={code} {...countries[code]} trips={[]} />
      ))}
    </Row>
  </Section>
);

export default Countries;
