import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCountries } from '../../../redux/selectors/countriesSelectors';
import { Row, Container } from 'react-bootstrap';
import { Section } from '../../layout/Section/Section';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { CountrySummary } from '../../features/CountrySummary/CountrySummary';

const Countries = () => {
  const countries = useSelector(getAllCountries);

  console.log(countries);
  return (
    <Section>
      <Container>
        <PageTitle text='All countries' />
        <Row>
          {Object.keys(countries).map((code) => (
            <div key={code}>
              <CountrySummary key={code} {...countries[Number(code)]} />
              <p>{code}</p>
            </div>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export { Countries };
