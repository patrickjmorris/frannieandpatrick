import Box from 'components/box';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const EventList = styled.div`
  h1 {
    font-size: 6rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  h2 {
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem 0;
  }
`;

const Events = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.eventsJson.title}
      </Title>
    </Box>
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
      gallery {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
