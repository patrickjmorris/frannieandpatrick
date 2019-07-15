import { Link } from 'gatsby';
import React from 'react';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/activities">Activities</Link>
      </li>
      <li>
        <Link to="/hotels">Hotels</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
