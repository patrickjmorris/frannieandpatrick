import Box from 'components/box';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const ActivityList = styled.div`
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
    padding: 1.5rem 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  p {
    line-height: 1.8rem;
  }
  strong {
    font-weight: bold;
  }
`;

const Activities = ({ data }) => (
  <Layout>
    <Box>
      <ActivityList
        dangerouslySetInnerHTML={{
          __html: data.activitiesJson.activities.childMarkdownRemark.html,
        }}
      />
    </Box>
    <div style={{ height: '50vh' }} />
  </Layout>
);

Activities.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Activities;

export const query = graphql`
  query ActivitiesQuery {
    activitiesJson {
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      activities {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
