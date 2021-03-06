const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'christos paschalidis', // Navigation and Site Title
  siteTitleAlt: 'christos', // Alternative Site title for SEO
  siteTitleShort: 'christos', // short_name for manifest
  siteHeadline: 'this is where i show my work', // Headline for schema.org JSONLD
  siteUrl: 'https://christos.surge.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.jpg', // Used for SEO and manifest
  siteDescription: 'TODO',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@christos', // Twitter Username
  ogSiteName: 'christos', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
