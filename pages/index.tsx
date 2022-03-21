import type { NextPage } from 'next';
import { LinkTo } from '../components/LinkTo';

const HomePage: NextPage = () => (
  <>
    <h1>Welcome!</h1>
    <ul>
      <li>Next.js using React with TypeScript </li>
      <li>Next Export for Static CDN</li>
      <li>Generating TypeScript Interfaces for Contentful</li>
      <li>Custom React Hooks</li>
      <li>&quot;Styled&quot; with Styled Components</li>
      <li>Precommit Hooks with Husky</li>
      <li>Linting with ESLint</li>
      <li>Unit Testing using Jest</li>
    </ul>
    <p>
      <LinkTo href="/projects">
        Projects can be found here
      </LinkTo>
    </p>
    <p>
      Created by Simon Karman. More information:
      {' '}
      <a href="https://www.simonkarman.nl/projects/nextjs-frontend-app-starter">here</a>
      .
    </p>
  </>
);

export default HomePage;
