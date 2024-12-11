import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Section } from '../../layout/Section/Section';
import { Hero } from '../../layout/Hero/Hero';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';

import styles from './Home.scss';

const Home = () => (
  <Section variant='has-hero'>
    <Hero
      titleText="Let's explore."
      imageSrc='https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg'
    />
    <Container className='py-5'>
      <Row className='align-items-center justify-content-evenly'>
        <Col md={6} className='mb-4 mb-md-0'>
          <h1 className={styles.title}>Open up to the world.</h1>
          <p className={styles.intro}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultricies eros eu nisl vestibulum iaculis. Maecenas dapibus lorem
            quis ex ornare dignissim. Donec lobortis commodo augue, vel accumsan
            nunc facilisis vitae. Suspendisse bibendum congue sapien ut
            elementum. Nunc pellentesque, tortor et dignissim fermentum, purus
            mi sagittis neque, ut iaculis arcu lorem nec tellus. Integer in
            viverra lectus, vitae sollicitudin nulla. Sed mollis at odio eu
            pretium. Donec porta ligula sed diam pulvinar viverra.
          </p>
        </Col>
        <Col md={5} xl={3}>
          <List variant='solid'>
            <ListItem title='Hand-picked destinations' icon='map-marker-alt' />
            <ListItem title='Best facilities' icon='hotel' />
            <ListItem title='All-inclusive trips' icon='glass-martini-alt' />
            <ListItem title='24/7 Support' icon='headset' />
          </List>
        </Col>
      </Row>
    </Container>
  </Section>
);

export { Home };
