import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import { Col } from '../Col/Col';
import { Container } from '../Container/Container';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <Col md={3} lg={2}>
            <Link to='/'>
              <div className={styles.logo}>
                <Icon name='compass' />
                <span className={styles.name}>Travel Agency</span>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <nav>
              <NavLink to='/trips' activeClassName='active'>
                Trips
              </NavLink>
              <NavLink to='/countries' activeClassName='active'>
                Countries
              </NavLink>
              <NavLink to='/regions' activeClassName='active'>
                Regions
              </NavLink>
              <NavLink to='/info' activeClassName='active'>
                Contact
              </NavLink>
            </nav>
          </Col>
          <Col md={3} lg={2}>
            <div className={styles.contact}>
              <Icon name='phone' />
              <span>678.243.8455</span>
            </div>
          </Col>
        </Container>
      </header>
    );
  }
}

export { Header };
