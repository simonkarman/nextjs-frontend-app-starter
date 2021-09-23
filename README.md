# simonkarman-next
This is a [Next.js](https://nextjs.org/) implementation of the [simonkarman.nl](https://www.simonkarman.nl) website.

## Features
- Next.js using React with TypeScript 
- Next Export for Static CDN
- Generating TypeScript Interfaces for Contentful
- Custom React Hooks
- "Styled" with Styled Components
- Linting with ESLint
- Unit Testing using Jest
- Precommit Hooks with Husky

## Getting Started

First, create a file called `.env.local` with the following variables.
```
CONTENTFUL_ENVIRONMENT=master

CONTENTFUL_SPACE_ID=abc
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=abc

CONTENTFUL_ACCESS_TOKEN=def
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=def

CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN=ghi
```

> Replace `abc`, `def`, and `ghi` with the actual values of the tokens. You can find them in your contentful dashboard.

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
