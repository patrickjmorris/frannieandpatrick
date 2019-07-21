import Box from 'components/box';
import Gallery from 'components/gallery';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Hotels = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.hotelsJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.hotelsJson.gallery} />
    <div style={{ height: '50vh' }} />
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
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        link
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
