import React from 'react';

import { Hero } from '../../layout/Hero/Hero';
import { Section } from '../../layout/Section/Section';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { SideImage } from '../../common/SideImage/SideImage';
import { DetailsBox } from '../../common/DetailsBox/DetailsBox';
import { DetailsImage } from '../../common/DetailsImage/DetailsImage';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';
import { TripSummary } from '../../features/TripSummary/TripSummary';

import { CountryType } from 'types/country-types';
import { Col, Row } from 'react-bootstrap';

type CountryTypeProp = CountryType;

const Country = ({
  name,
  capital,
  region,
  subregion,
  currencies,
  population,
  trips,
}: CountryTypeProp) => (
  <Section variant='has-hero'>
    <Hero
      variant='small'
      titleText={`${name}`}
      imageSrc={`https://loremflickr.com/1000/600/${name},landscape/all`}
    />
    <PageTitle text={`About ${name}`} />
    <DetailsBox>
      <DetailsImage>
        <SideImage
          source={`https://loremflickr.com/800/600/${name},landscape/all`}
        />
      </DetailsImage>

      <Row>
        <Col md={12} lg={4}>
          <List variant='light'>
            <ListItem
              title={`<strong>Region:</strong> ${region} / ${subregion}`}
              icon='map'
            />
            <ListItem
              title={`<strong>Capital:</strong> ${capital}`}
              icon='city'
            />
            {population && (
              <ListItem
                title={`<strong>Population:</strong> ${
                  population / 1000000
                } millions`}
                icon='users'
              />
            )}
            {currencies && (
              <ListItem
                title={`<strong>Currency:</strong> ${currencies[0].name} (${currencies[0].code})`}
                icon='money-bill-wave'
              />
            )}
          </List>
        </Col>
      </Row>
    </DetailsBox>

    <Row>
      <Col xs={12}>
        <PageTitle text={`Trips to ${name}`} />
      </Col>
      {trips.map((trip) => (
        <TripSummary key={trip.id} {...trip} />
      ))}
    </Row>
  </Section>
);

export { Country };
