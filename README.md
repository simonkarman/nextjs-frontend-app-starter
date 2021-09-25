# simonkarman-next
This is a [Next.js](https://nextjs.org/) with TypeScript starter for a portfolio website sucah as the [simonkarman.nl](https://www.simonkarman.nl) website.

More information can be found on the [Next.js Frontend App Starter](https://www.simonkarman.nl/projects/nextjs-frontend-app-starter)

## Features
- Next.js using React with TypeScript 
- Next Export for Static CDN
- Generating TypeScript Interfaces for Contentful
- Custom React Hooks
- "Styled" with Styled Components
- Precommit Hooks with Husky
- Linting with ESLint
- Unit Testing using Jest

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

Open [http://localhost:3000/http://localhost:3000/simonkarman-next/](http://localhost:3000/http://localhost:3000/simonkarman-next/) with your browser to see the result.

# Introduction
Most of the time, when I am programming, I am working with algorithms, backends, or cloud infrastructures, however as a fullstack developer I am also opinionated about frontend development. During my holiday break in between Quintor and Binx.io, I decided to bundle my frontend experience and best practices into a modern frontend starter. The starter is an example of how, with my current knowledge and experience, I would build a frontend web app for a portfolio website like simonkarman.nl.

> Disclaimer: In no way am I trying to advocate that this is the only or the best solution for a frontend project. Nor am I claiming the solution is usable for every frontend app. This solution is simply what I currently think is well suited for a static generated web app. I based this on my own expertise and knowledge and I hope that this starter gives you some takeaways for your own frontend projects. If you have any feedback or suggestions, please [let me know](https://simonkarman.nl/contact), I am always willing to learn more!

# Trying it out yourself
You can try out this starter by copying the [source code](https://github.com/simonkarman/simonkarman-next), reading the Getting Started section in the README.md file, and then modifying the projects to suite your own needs. If you do, attribution is appreciated.

A live demo of the app can be found on [karman.dev/simonkarman-next](https://karman.dev/simonkarman-next/) and showcases the exported version (`yarn build`) on a static cdn.

# History
During the corona pandemic in 2020, I rebuilt my portfolio website using [VueJS, Nuxt, and Contentful](https://simonkarman.nl/projects/simonkarman-nuxt). After that, during my work at Tikkie I worked with React and React Native using Typescript and based on these experiences I have been pondering lately about all the improvements I could make to my personal portfolio website. However I feel rebuilding my website is currently not worth the time. Nonetheless, I still enjoy sharing my experiences, so that is why I decided that instead of rebuilding my website, I would write a minimalistic showcase of all the features I would use if I were to rebuild my website right now.

# Features
I build this starter with a few different features that I want to highlight. The starter was built using React with Next.js and TypeScript. The starter can be used to creating a website ready for use on a static cdn (Content Delivery Network). It achieves this by using Next.js export functionality. The content is created in Contentful, which is a CMS, and the type definition in the project are auto generated. The project also defines some commonly used custom written React Hooks, it employs styling using the Styled Components library, achieves linting of the source code by using ESLint, runs Unit Tests using Jest, and adds precommit hooks using Husky. That's quite a lot to digest, so let's go through each feature one by one.

## React with Next.js and TypeScript
I choose to go for React. Although I am not against using Vue I feel like the current landscape (in at least the Netherlands) is more centered around React. With technologies such as [React Native](https://reactnative.dev/) and my current professional experience it felt like the logical choice.

The React framework I decided to work with is [Next.js](https://nextjs.org/), which also made sense since I used the very similar [Nuxt](https://nuxtjs.org) for my portfolio website. In short, Next.js is a React Framework for Production, it ensures that common things like creating multiple pages, links between those pages, prerendering pages, and more are ready to use.

Finally I choose to use TypeScript, this is a no brainer. From the moment that I started working with TypeScript, I completely stopped using plain JavaScript for all the projects I work on. The benefits that TypeScript provides are, in my opinion, a necessity in a modern way of working. I don't want to dive into the details here, since there is a lot to talk about, but there are many great articles online on why you should be using TypeScript instead of JavaScript.

```ts
// Example of a the HomePage in Next.js using TypeScript
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
```

## TypeScript Interfaces for Contentful
The projects that are on my website are stored in a Content Management System (CMS) called [Contentful](https://www.contentful.com/). In contentful you can create your own entity types and give these entity types properties. I created an entity type 'project', with properties such as a name, a title, an image, and so forth.

From within your code you can get all entities of a specific entity type. The issue is that TypeScript doesn't know what kind of properties to expect on that type. This means you have to redefine a TypeScript interface of your contentful entity type. This definition can get out of sync with the actual type at contentful, which can make for some annoying and hard to debug bugs. Luckily a tool exists to extract a TypeScript interface from a contentful entity type, which is [contentful-typescript-codegen](https://github.com/intercom/contentful-typescript-codegen).

An example of the interface that generated by the project is shown below.
```ts
// part of '@types/generated/contentful.d.ts'
export interface IProjectFields {
  /** name */
  name: string;

  /** title */
  title: string;

  /** description */
  description: string;

  /** tags */
  tags?: string[] | undefined;

  /** image */
  image: Asset;

  /** and more ... */
}
```

In the starter you can run `yarn contentful-typescript-codegen` to generate these TypeScript interfaces. You can find the resulting types in [@types/generated/contentful.d.ts](https://github.com/simonkarman/simonkarman-next/blob/main/%40types/generated/contentful.d.ts). You can look at the `contentful-typescript-codegen.sh` file to see more details. Make sure you create a `.env.local` property specifying the values as explained in the README.md of the project to ensure you app can successfully connect to Contentful.

## Next Export
The [`next export` feature](https://nextjs.org/docs/advanced-features/static-html-export) allows you to export you app to static HTML, which can be run standalone without the need of a Node.js server. This is useful when you want to deploy your website to a static cdn.

To create a static export Next.js needs to know all the pages that it needs to generate. You can imagine that for the home page, about page, and other pages that the website has one of it is fairly easy. It simply looks at the pages you defined in the `/pages` directory and generates a html file for them. However when some of the pages are using dynamic routes, such as `simonkarman.nl/projects/karmannet`, where `karmannet` is the dynamic part of the route, it needs to know about all the different projects it needs to generate the html for. To achieve this you have to export a method called `getStaticPaths` which simply generates an array of all the different dynamic parameters you want to generate that page with.

This starter uses this structure in the [`pages/projects/[name].tsx`](https://github.com/simonkarman/simonkarman-next/blob/main/pages/projects/%5Bname%5D.tsx) file to generate a page for each project it can find at contentful.

```ts
// part of 'pages/projects/[name].tsx'
export const getStaticPaths: GetStaticPaths = async () => {
  // First get all the projects from contentful
  const projects = (await contentful().getEntries<IProjectFields>('project')).items
    .map((project) => project.fields);

  // Then create a path for each project based on the project name
  return {
    paths: projects.map((project) => ({ params: { name: project.name } })),
    fallback: false,
  };
};
```

## Custom React Hooks
If you have used React for yourself you have probably written some custom React hooks too. In the starter I have provided some commonly used hooks that you might use on a regular basis. These can be found in the `hooks/common` directory.

- [useArray](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/common/useArray.ts) - This hooks makes it easy to work with arrays in React by providing methods form updating the array.
- [useAsync](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/common/useAsync.ts) - This hook takes an async function, invokes it, and returns an array with information about the progress and execution of the function. This first element in the returning array is a boolean that indicates whether the async function is still in progress, the second element is the response of the async function when it is resolved, and the third and last element is the error for when the async function was rejected. 
- [usePrevious](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/common/usePrevious.ts) - This hook makes it possible to use a previous value of some other state.
- [useStateWithHistory](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/common/useStateWithHistory.ts) - This hook keeps track of all the changes to a variable and makes it possible to go back and forward in this history.
- [useStorage](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/common/useStorage.ts) - These hooks (`useSessionStorage` and `useLocalStorages`) make it easy to store variables in either session or local storage in the browser.
- [useTimeout](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/common/useTimeout.ts) - This hook lets you execute a method after a specified timeout.

> These hooks are inspired by [Web Dev Simplified](https://www.youtube.com/watch?v=vrIxu-kfAUo&ab_channel=WebDevSimplified) and have been rewritten in TypeScript by me.

These hooks can then be used in more complex instances. For example, the `useAsync` hook is used by the [`hooks/projects/useProjects`](https://github.com/simonkarman/simonkarman-next/blob/main/hooks/projects/useProjects.ts) hook to create a hook that will fetch all the projects. Usage of this hook can be found in the [`pages/projects.tsx`](https://github.com/simonkarman/simonkarman-next/blob/main/ages/projects.tsx) file.

## Pregeneration vs Dynamic Loading
With the `getStaticPaths` we have seen how data can be pregenerated at build time, while with the `useProjects` custom react hook we have seen how you can dynamically load new data at run time in the browser of the client.

These two patterns are demonstrated on the [projects page](https://karman.dev/simonkarman-next/projects/). This page demonstrates the difference between the pregenerated list of projects and the dynamically rendered list of projects. Both options have up and downsides.

The upside of pregenerating the list is that the page loads very fast and that the data is also part of Search Engine Optimization (SEO), however you need to run an export to show publish changes, if your content changes often, that might not be the best option. You can therefor also dynamically load your content, however the downside of loading them dynamically, as done with the `useProjects` hook, is that the client side code also needs to be able to access the contentful data directly, meaning your (read-only) api key will ship to your clients.

## Styling using Styled Components
Although the starter is in no means a beautiful website, I did use a styling library to achieve consistent styling. The library used is [Styled Components](https://styled-components.com/). This nice thing about using styled components is that it really fits well into the component based idea of React. This makes it easy to use in React and also allows for easy creation of your own custom style library with lots of components such as buttons, texts, and cards in your own style.

```ts
// Define a Box with shadow, which is a div
const Box = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);;
  border: 1px solid gray;
  margin: 0.5em;
  padding: 0.5em;
`;

// Then you can use the Box in your Page just like it is a component
const Page = () => (
  <>
    <Box>
      <h1>Title</h1>
      <p>Text</p>
    </Box>
  </>
);
```

For next.js to be able to understand that styled-components is used it is important to also add the `styled-components` plugin the the `.babelrc` file.

```json5
# in '.babelrc'
{
  ...
  "plugins": [
    ...
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    ...
  ]
}
```

Please note that there is also a downside to using styled components. Since your styles are generated during runtime they are relatively slow to load. Luckily when using a pregenerated html page in a next exported page, these styles are already pre generated, so it is less of an issue.

## Precommit Hooks with Husky
I used the Husky library to run commands whenever you try to commit new code. These commands will build, test, and lint your code. Whenever one of these steps detects an issue, the commit will not go through and fail. This means you'll first need to fix your issues before commiting your code, which ensures all code pushed to the origin repository is valid.

The linting step is done using [ESLint](https://eslint.org/). ESLint statically analyzes your code to quickly find problems. Many problems ESLint finds can be automatically fixed. Only problems that cannot be automatically fixed have to be manually looked at. The rules and configuration of ESLint can be found in the [`.eslintrc.js`](https://github.com/simonkarman/simonkarman-next/blob/main/.eslintrc.js) file.

The unit testing step is done using [Jest](https://jestjs.io/). Jest runs all tests it can find in files that match the `*.test.ts` expression.

> Please note that the unit tests in this projects haven't been created yet. Writing tests for React Hooks and React Components is a topic for another time.

# Visual Studio Code
While building this starter I used Visual Studio Code as IDE. Some plugins that are useful to enable while working with the above mention technologies and features are:
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

You can also enable fixing linting errors everytime you save a file in VSCode by adding the following to your VSCode settings file (`.vscode/settings.json`):
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

# Trying it out
That's all! I hope that this starter gives you some takeaways for your own frontend projects. If you have any feedback or suggestions, please [let me know](https://simonkarman.nl/contact), I am always willing to learn more!

You can try out this starter by copying the [source code](https://github.com/simonkarman/simonkarman-next), reading the Getting Started section in the README.md file, and then modifying the projects to suite your own needs. If you do, attribution is appreciated.

A live demo of the app can be found on [karman.dev/simonkarman-next](https://karman.dev/simonkarman-next/) and showcases the exported version (`yarn build`) on a static cdn.