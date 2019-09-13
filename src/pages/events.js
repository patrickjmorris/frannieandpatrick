import Box from 'components/box';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const EventList = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: bold;
    padding: 1rem 0;
    &:first-of-type {
      font-size: 6rem;
      padding: 1.2rem 0;
    }
  }
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  p {
    line-height: 1.8rem;
  }
  strong {
    font-weight: bold;
  }
  ul {
    margin-bottom: 2rem;
  }
`;

const Events = ({ data }) => (
  <Layout>
    <Box>
      <EventList
        dangerouslySetInnerHTML={{
          __html: data.eventsJson.events.childMarkdownRemark.html,
        }}
      />
    </Box>
    <div style={{ height: '50vh' }} />
  </Layout>
);

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;

export const query = graphql`
  query EventsQuery {
    eventsJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      events {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
