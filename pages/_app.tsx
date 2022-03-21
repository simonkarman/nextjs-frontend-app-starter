import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.div`
  background-color: #082447;
  border-bottom: 1px solid black;
  padding: 1em;
  color: white;
`;

const Container = styled.div`
  padding: 1em;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>Next.js Portfolio</title>
      </head>
      <Link href="/">
        <Header>
          <h1>Portfolio starter</h1>
          <p>by Simon Karman</p>
        </Header>
      </Link>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
export default MyApp;
