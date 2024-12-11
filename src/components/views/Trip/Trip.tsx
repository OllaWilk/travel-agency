import React from 'react';
import parser from 'html-react-parser';
import { NotFound } from '../NotFound/NotFound';
import { Section } from '../../layout/Section/Section';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { SideImage } from '../../common/SideImage/SideImage';
import { DetailsBox } from '../../common/DetailsBox/DetailsBox';
import { DetailsImage } from '../../common/DetailsImage/DetailsImage';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';

import { Trip } from 'types/trip-types';
import { Currency } from 'types/country-types';
import styles from './Trip.scss';

type TripProps = {
  error: string;
  image: string;
  name: string;
  cost: string;
  days: number;
  description: string;
  country: {
    name: string;
    capital: string;
    population: number;
    code: string;
    currencies: Currency[];
    flag: string;
  };
  intro: string;
};

const Trip = ({
  error,
  name,
  image,
  cost,
  days,
  description,
  country,
  intro,
}: TripProps) => {
  if (error) return <NotFound />;
  else
    return (
      <Section>
        <PageTitle text={name} />

        <DetailsBox>
          <DetailsImage>
            <SideImage source={image} />
          </DetailsImage>

          <Row>
            <Col md={12} lg={4}>
              <div className={styles.intro}>{parser(intro)}</div>
              <List variant='light'>
                <ListItem
                  title={`<strong>Duration:</strong> ${days} days`}
                  icon='calendar-alt'
                />
                <ListItem
                  title={`<strong>Price:</strong> from ${cost}`}
                  icon='money-bill-wave'
                />
              </List>
            </Col>
          </Row>
        </DetailsBox>

        <Row>
          <Col xs={12}>
            <PageTitle text='Trip details' />
            {parser(description)}
          </Col>
        </Row>

        <PageTitle text={`About ${country.name}`} />

        <DetailsBox>
          <DetailsImage>
            <SideImage source={country.flag} />
          </DetailsImage>

          <Row>
            <Col md={12} lg={4}>
              <List variant='light'>
                <ListItem
                  title={`<strong>Capital:</strong> ${country.capital}`}
                  icon='city'
                />
                <ListItem
                  title={`<strong>Population:</strong> ${
                    country.population / 1000000
                  } millions`}
                  icon='users'
                />
                <ListItem
                  title={`<strong>Currency:</strong> ${country.currencies[0].symbol} (${country.currencies[0].name})`}
                  icon='money-bill-wave'
                />
              </List>
            </Col>
          </Row>
        </DetailsBox>
      </Section>
    );
};

export { Trip };
