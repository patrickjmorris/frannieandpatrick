const path = require('path');

module.exports = {
  siteTitle: 'Frannie and Patrick',

  siteTitleShort: 'Frannie and Patrick',
  siteDescription:
    // eslint-disable-next-line quotes
    "Frannie and Patrick are getting married! We're so excited to have you join us in Brooklyn on September 14th at Pioneer Works",
  siteUrl: 'https://www.frannieandpatrick.com',
  themeColor: '#c9ae91',
  backgroundColor: '#efe3d7',
  pathPrefix: null,
  imageUrl: path.resolve(__dirname, 'src/images/frannie_patrick.jpg'),
  logo: path.resolve(__dirname, 'src/images/frannie_patrick.jpg'),
  social: {
    twitter: '',
    fbAppId: '',
  },
};
