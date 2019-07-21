import Box from 'components/box';
import Head from 'components/head';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Activities = ({ data }) => (
  <Layout>
    <Head pageTitle={data.activitiesJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.activitiesJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
  </Layout>
);

Activities.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Activities;

export const query = graphql`
  query ActivitiesQuery {
    activitiesJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
