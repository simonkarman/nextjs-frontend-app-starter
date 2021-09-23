/* eslint-disable no-process-env */
import { createClient } from 'contentful';

export const contentful = () => {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) {
    throw new Error('Environment variables CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are required.');
  }
  return createClient({ space, accessToken });
};
