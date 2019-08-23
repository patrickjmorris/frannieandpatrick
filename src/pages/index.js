import Box from 'components/box';
import HomeGallery from 'components/gallery/home_gallery';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="medium">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <HomeGallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
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
