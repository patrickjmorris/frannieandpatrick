import Box from 'components/box';
import Gallery from 'components/gallery';
import Head from 'components/head';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Gifts = ({ data }) => (
  <Layout>
    <Head pageTitle={data.giftsJson.title} />
    <Box>
      <Title as="h1" size="large">
        {data.giftsJson.title}
      </Title>
      <Title as="h2">
        {data.giftsJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.giftsJson.gallery} />
    <div style={{ height: '50vh' }} />
  </Layout>
);

Gifts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Gifts;

export const query = graphql`
  query GiftsQuery {
    giftsJson {
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
            fluid(maxHeight: 400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
