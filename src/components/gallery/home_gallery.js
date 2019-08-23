import Item from 'components/gallery/item';
import { Link } from 'gatsby';
import MEDIA from 'helpers/mediaTemplates';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
  a {
    text-decoration: none;
  }
`;

const HomeGallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Link to={item.link} key={i}>
        <Item {...item} />
      </Link>
    ))}
  </Container>
);

HomeGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeGallery;
