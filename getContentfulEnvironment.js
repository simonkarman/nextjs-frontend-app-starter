/* eslint-disable no-process-env */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv-flow').config();
const contentfulManagement = require('contentful-management');

module.exports = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });
  const space = await contentfulClient.getSpace(process.env.CONTENTFUL_SPACE_ID);
  return space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);
};
