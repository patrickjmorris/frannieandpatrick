import Box from 'components/box';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Events = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.eventsJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
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
    }
  }
`;
