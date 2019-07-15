import Box from 'components/box';
import Head from 'components/head';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Hotels = ({ data }) => (
  <Layout>
    <Head pageTitle={data.hotelsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.hotelsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Hotels.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hotels;

export const query = graphql`
  query HotelsQuery {
    hotelsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
