import { blue } from 'constants/theme';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

const NavLink = styled(Link)`
  &.current-page {
    border-bottom: 2px solid ${blue};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Nav = () => (
  <Container>
    <ul>
      <li>
        <NavLink to="/events" activeClassName="current-page">
          Events
        </NavLink>
      </li>
      <li>
        <NavLink to="/activities" activeClassName="current-page">
          Activities
        </NavLink>
      </li>
      <li>
        <NavLink to="/hotels" activeClassName="current-page">
          Hotels
        </NavLink>
      </li>
    </ul>
  </Container>
);

export default Nav;
