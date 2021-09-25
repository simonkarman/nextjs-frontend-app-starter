import type { NextPage } from 'next';
import { LinkTo } from '../components/LinkTo';

const HomePage: NextPage = () => (
  <>
    <h1>Welcome!</h1>
    <p>
      I decided to bundle my frontend experience and best practices into a modern frontend starter.
      The starter is an example of how, with my current knowledge and experience,
      I would build a frontend web app for a portfolio website like simonkarman.nl.
    </p>
    <p>
      <LinkTo href="/projects">
        Projects can be found here
      </LinkTo>
    </p>
  </>
);

export default HomePage;
