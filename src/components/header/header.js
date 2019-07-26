import Nav from 'components/header/nav';
import Title from 'components/title';
import { Link } from 'gatsby';
import MEDIA from 'helpers/mediaTemplates';
import PropTypes from 'prop-types';
import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  ${MEDIA.PHONE`
  flex-direction: column;
  `};

  a {
    transition: color 0.2s ease;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #33444e;
    }
  }
`;

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
