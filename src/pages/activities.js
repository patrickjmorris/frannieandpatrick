import Head from 'components/head';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Activities = ({ data }) => (
  <Layout>
    <Head pageTitle={data.activitiesJson.title} />
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
        }
      }
    }
  }
`;
