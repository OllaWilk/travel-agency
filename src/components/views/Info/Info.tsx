import React from 'react';
import { Section } from '../../layout/Section/Section';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { List } from '../../common/List/List';
import { ListItem } from '../../common/ListItem/ListItem';

import styles from './Info.scss';
import { Col, Container, Row } from 'react-bootstrap';

class Info extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <PageTitle text='Contact us' />
              <p className={styles.intro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pretium elementum lectus, eu laoreet sapien tristique sed.
                Aliquam dapibus pharetra dictum. Nunc condimentum sodales nisl
                eget cursus. Cras est lacus, congue quis purus at, consectetur
                euismod metus. Curabitur ut lobortis arcu. Nunc faucibus
                ultrices eros, id efficitur arcu volutpat vitae. Sed at bibendum
                mauris, id facilisis quam.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <List variant='light'>
                <ListItem title='Support Agent: Linda Blair' icon='headset' />
                <ListItem title='678.243.8455' icon='phone' />
                <ListItem title='support@example.com' icon='envelope' />
                <ListItem
                  title='1591 Stanton Road, Boston, MA 02127'
                  icon='map-marker-alt'
                />
              </List>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
export { Info };
