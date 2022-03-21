// from https://gist.github.com/zackdotcomputer/d7af9901e7db87364aad7fbfadb5c99b
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

const A = styled.a`
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 0.25em;
  background-color: #08244710;
`;

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
    <A {...anchorProps}>{children}</A>
  </Link>
);
