// from https://gist.github.com/zackdotcomputer/d7af9901e7db87364aad7fbfadb5c99b
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type PropTypes = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
export const LinkTo = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}: PropsWithChildren<PropTypes>) => (
  <Link {...{
    href, as, replace, scroll, shallow, prefetch, locale,
  }}
  >
    <a {...anchorProps}>{children}</a>
  </Link>
);
