import React, { useMemo } from 'react';
import parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';
import { Section } from '../../layout/Section/Section';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { SideImage } from '../../common/SideImage/SideImage';
import { DetailsBox } from '../../common/DetailsBox/DetailsBox';
import { DetailsImage } from '../../common/DetailsImage/DetailsImage';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Trip.scss';
import { useSelector } from 'react-redux';
import { getTripAndCountry } from '../../../redux/selectors/tripsSelectors';

const Trip = () => {
  const { id } = useParams<{ id: string }>();

  const selectTripAndCountry = useMemo(() => getTripAndCountry(id || ''), [id]);

  const { trip, country } = useSelector(selectTripAndCountry);

  if (!trip) {
    return <NotFound />;
  }

  return (
    <Section>
      <Container>
        <PageTitle text={trip.name} />

        <DetailsBox>
          <DetailsImage>
            <SideImage source={trip.image} />
          </DetailsImage>

          <Row>
            <Col md={12} lg={6} className='px-5'>
              <div className={styles.intro}>{parser(trip.intro)}</div>
              <List variant='light'>
                <ListItem
                  title={`<strong>Duration:</strong> ${trip.days} days`}
                  icon='calendar-alt'
                />
                <ListItem
                  title={`<strong>Price:</strong> from ${trip.cost}`}
                  icon='money-bill-wave'
                />
              </List>
            </Col>
          </Row>
        </DetailsBox>

        <Row>
          <Col xs={12}>
            <PageTitle text='Trip details' />
            {parser(trip.description)}
          </Col>
        </Row>

        <PageTitle text={`About ${country.name}`} />

        <DetailsBox>
          <Row>
            <Col md={12} lg={4}>
              <List variant='light'>
                <ListItem
                  title={`<strong>Capital:</strong> ${country.capital}`}
                  icon='city'
                />
                <ListItem
                  title={`<strong>Population:</strong> ${
                    country.population! / 1000000
                  } millions`}
                  icon='users'
                />
                <ListItem
                  title={`<strong>Currency:</strong> ${
                    country.currencies![0].symbol
                  } (${country.currencies![0].name})`}
                  icon='money-bill-wave'
                />
              </List>
            </Col>
          </Row>
        </DetailsBox>
      </Container>
    </Section>
  );
};

export { Trip };
