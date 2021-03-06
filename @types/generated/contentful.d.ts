// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';

export interface IProjectFields {
  /** name */
  name: string;

  /** title */
  title: string;

  /** date */
  date: string;

  /** contributors */
  contributors: string;

  /** description */
  description: string;

  /** tags */
  tags?: string[] | undefined;

  /** image */
  image: Asset;

  /** content */
  content: string;

  /** repository */
  repository?: string | undefined;

  /** download */
  download?: Asset | undefined;

  /** documentation */
  documentation?: Asset | undefined;

  /** demo */
  demo?: Asset | undefined;
}

/** A project entry for the simonkarman.nl website */

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'project';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'project';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
