import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <Row className='align-items-center justify-content-between flex-column flex-md-row'>
            <Col xs={6} className='mb-3'>
              <Link to='/'>
                <div className={styles.logo}>
                  <Icon name='compass' />
                  <span className={styles.name}>Travel Agency</span>
                </div>
              </Link>
            </Col>
            <Col md={12} className='mb-3'>
              <nav>
                <NavLink
                  to='/trips'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Trips
                </NavLink>
                <NavLink
                  to='/countries'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Countries
                </NavLink>
                <NavLink
                  to='/regions'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Regions
                </NavLink>
                <NavLink
                  to='/info'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Contact
                </NavLink>
              </nav>
            </Col>
            <Col xs={6} md={12} lg={12} className='text-md-end'>
              <div className={styles.contact}>
                <Icon name='phone' />
                <span>+48 678 243 8455</span>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export { Header };
