import type { NextPage } from 'next';
import { LinkTo } from '../components/LinkTo';

const HomePage: NextPage = () => (
  <>
    <h1>Welcome!</h1>
    <p>
      My name is Simon Karman. I am a professional Software Engineer and hobbyist Game Developer and a former student at the Utrecht University. I
      currently work at Tikkie (part of ABN AMRO) via Quintor, where I am an AWS Cloud Engineer.
    </p>
    <p>
      I love to take the lead in the architecture and development of new products and features. While doing so, I believe that developers should all
      apply a modern way of working. In this the development culture is key. This includes building, improving, and sharing of the things you do.
    </p>
    <p>
      This website showcases most of the projects that I worked on. This includes both professional projects and projects I worked on in my free
      time. Feel free to look around and give me feedback on whatever you find.
    </p>
    <p>
      <LinkTo href="/projects">
        Projects can be found here
      </LinkTo>
    </p>
  </>
);

export default HomePage;
