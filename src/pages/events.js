import Head from 'components/head';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Events = ({ data }) => (
  <Layout>
    <Head pageTitle={data.eventsJson.title} />
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
        }
      }
    }
  }
`;
