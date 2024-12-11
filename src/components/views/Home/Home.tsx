import React from 'react';
import { Section } from '../../layout/Section/Section';
import { Hero } from '../../layout/Hero/Hero';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';
import { Row } from '../../layout/Row/Row';
import { Col } from '../../layout/Col/Col';
import { Container } from '../../layout/Container/Container';
import './Home.scss';

const Home = () => (
  <Section variant='has-hero'>
    <Hero
      titleText="Let's explore."
      imageSrc='http://uploads.kodilla.com/bootcamp/fer/13.router/image-1.jpg'
    />
    <Container>
      <Row>
        <Col md={6}>
          <h1 className={'title'}>Open up to the world.</h1>
          <p className={'intro'}>
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
