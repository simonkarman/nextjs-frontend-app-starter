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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Introduction
Most of the time, when I am programming, I am working with algorithms, backends, or cloud infrastructures, however as a fullstack developer I am also opinionated about frontend development. During my holiday break in between Quintor and Binx.io, I decided to bundle my frontend expierence and best practicies into a modern frontend starter. The starter is an example of how, with my current knowledge and expierience, I would build a frontend web app for a portfolio website like simonkarman.nl.

> Disclaimer: In no way am I trying to advocate that this is the only or the best solution for a frontend project. Nor am I claiming the solution is usable for every frontend app. This solution is simply what I currently think is well suited for a static generated web app. I based this on my own expertise and knowledge and I hope that this starter gives you some takeaways for your own frontend projects. If you have any feedback or suggestions, please [let me know](https://simonkarman.nl/contact), I am always willing to learn more!

## Trying it out yourself
You can get started with this starter by copying the [source code](https://github.com/simonkarman/simonkarman-next), reading the README.md file to get started, and modifying it to your own needs. Feel free to use, modify, and copy it as you wish. Attribution is appreciated.

A live demo of the app can be found on [karman.dev/simonkarman-next](https://karman.dev/simonkarman-next/) and showcases the exported version (`yarn build`) on a static cdn.

If you're not yet ready to get your hands dirty and just want to read about my experiences and ideas, just keep on reading!

## History
During the corona pandemic in 2020, I rebuild my portfolio website using [VueJS, Nuxt, and Contentful](https://simonkarman.nl/projects/simonkarman-nuxt). After that, during my work at Tikkie I worked with React and React Native using Typescript and based on these experiences I have been pondering lately about all the improvements I could make to my personal portfolio website. However I feel rebuilding my website is currently not worth the time. Nonetheless, I still enjoy sharing my experiences, so that is why I decided that instead of rebuilding my website, I would write a minimalistic showcase of all the features I would use if I were to rebuild my website right now.

## Features
I build this starter with a few different features that I want to highlight. The starter was build using React with Next.js and TypeScript. The starter can be used to creating a website ready for use on a static cdn (Content Delivery Network). It achieves this by using Next.js export functionality. The content is created in Contentful, which is a CMS, and the type definition in the project are auto generated. The project also defines some commonly used custom written React Hooks, it employs styling using the Styled Components library, achieves linting of the source code by using ESLint, runs Unit Tests using Jest, and adds precommit hooks using Husky. That's quite a lot to digest, so lets go through each feature one by one.

### React with Next.js and TypeScript
I choose to go for React. Altough I am not against using Vue I feel like the current landscape (in at least the Netherlands) is more centered around React. With also technologies such as [React Native](https://reactnative.dev/) and my current professional expierence it felt like the logical choice.

The React framework I decided to work with is [Next.js](https://nextjs.org/), which also made sense since I used the very similar [Nuxt](https://nuxtjs.org) for my portfolio website. In short, Next.js is a React Framework for Production, it ensure that common things like creating multiple pages, links between those pages, prerendering pages, and more are ready to use.

Finally I choose to use TypeScript, this is a no brainer. From the moment that I started working with TypeScript, I completely stopped used plain JavaScript for all the projects I work on. The benefits that TypeScript provides are, in my opinion, a neccessity in a modern way of working. I don't want to dive into the details here, since there is a lot to talk about, but there are many great articles online on why you should be using TypeScript instead of JavaScript.

### Next Export
The [`next export` feature](https://nextjs.org/docs/advanced-features/static-html-export) allows you to export you app to static HTML, which can be run standalone without the need of a Node.js server. This is useful when you want to deploy your website to a static cdn.

To create a static export Next.js needs to know all the pages that it needs to generate. You can imagine that for the home page, about page, and other pages that the website has one of it is fairly easy. It simply looks at the pages you defined in the `/pages` directory and generates each an html equivalent for them. However when some of the pages are using dynamic routes, such as `simonkarman.nl/projects/karmannet`, where `karmannet` is the dynamic part of the route, it needs to know about all the different projects it needs to generate the html for. To achieve this you have to export a method called `getStaticPaths` which simply generates an array of all the different dynamic parameters you want to generated that page with.

This starter uses it in the `pages/projects/[name].tsx` file to generate a page for each project it can find at contentful.

### TypeScript Interfaces for Contentful
The projects that are on my website are stored in a Content Management System (CMS) called [Contentful](https://www.contentful.com/). In contentful you can create your own entity types and give these entity types properties. I created an entity type 'project', with properties such as a name, a title, an image, and so forth.

From within your code you can get all entities of a specific entity type. The only issues is that TypeScript doesn't know what kind of properties to expect on that type. This means you have to redefine a TypeScript interface of your contentful entity type. This definition can get out of sync with the actual type at contentful, which can make for some annoying and hard to debug bugs. Luckily a tool exists to extract an TypeScript interface from a contentful entity type, which is [contentful-typescript-codegen](https://github.com/intercom/contentful-typescript-codegen).

In the starter you can run `yarn contentful-typescript-codegen` to generate these TypeScript interfaces. You can find the resulting types in `@types/generated/contentful.d.ts`. You can look at the `contentful-typescript-codegen.sh` file to see more details. Make sure you create a `.env.local` property specifying the values as explained in the readme.md of the project to ensure you app can successfully connect to Contentful.

### Custom React Hooks
If you have used React for yourself you have probably written some custom React hooks too. In the starter I have provided some commonly used hooks that you might use on a regular basis. These can be found in the in the `hooks/common` directory.

One of theses is the `useAsync` hook. This hooks takes an async function, invokes it, and returns an array with information about the progress and execution of the function. This first element in the returning array is a boolean that indicates whether the async function is still in progress, the second element is the response of the async function when it resolved, and the third and last element is the error for when the async function was rejected.

The `useAsync` hook is used by the `hooks/projects/useProjects` hook to create a hook that will fetch all the projects. Usage of this hook can be found in the `pages/projects.tsx` file.

This also demonstrates the difference between the pregenerated list of projects and the dynamically rendered list of projects. The upside of pregenerating the list is that the page loads very fast and that the data is also part of Search Engine Optimalization (SEO), however you need to trigger an export of site again to show publish changes. The downsite of loading them dynamically as done with the `useProjects` hook is that the client side code also needs to be able to access the contentful data directly, meaning your (read-only) api key will ship to your clients.

In the live demo on at the [projects](https://karman.dev/simonkarman-next/projects/) page I left both the dynamic and pregenerated options in so you can see the difference. 

### Styling use Styled Components
Altough the starter is in no means a beautiful website, I did use a styling library to achieve consistent styling. The library used is [Styled Components](https://styled-components.com/). This nice thing about using styled components is that it really fits well into the component based idea of React. This makes it easy to use in React and also allows for easy creation of your own custom style library with lots of components such as buttons, texts, and cards in your own style.

Please note that there is also a downside to using styled components. Since your styles are generated during runtime they are relatively slow to load. Luckily when using a pregenerated html page in a next exported page, these styles are already pre generated, so it is less of an issue.

### Precommit Hooks with Husky
Lastly I use the Husky library to run some commands whenever you try to commit new code. These commands will build, test, and lint your code. Whenever one of these steps detects an issue, the commit will not go through and fail. This means you'll first need to fix your issues before commiting your code, which ensure all code pushed to the origin repository is valid.

The linting step is done using [ESLint](https://eslint.org/). ESLint statically analyzes your code to quickly find problems. Many problems ESLint finds can be automatically fixed. Only problems that cannot be automatically fixed have to be manually looked at. The rules and configuration of ESLint can be found in the `.eslintrc.js` file.

The unit testing step is done using [Jest](https://jestjs.io/). Jest runs all tests it can find in files that match the `*.test.ts` expression. The unit tests in the projects haven't been created yet, which is a topic for another time.

## Visual Studio Code
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

## Trying it out
That's all! I hope that this starter gives you some takeaways for your own frontend projects. If you have any feedback or suggestions, please [let me know](https://simonkarman.nl/contact), I am always willing to learn more!

You can get started with this starter by copying the [source code](https://github.com/simonkarman/simonkarman-next), reading the README.md file to get started, and modifying it to your own needs. Feel free to use, modify, and copy it as you wish. Attribution is appreciated.

A live demo of the app can be found on [karman.dev/simonkarman-next](https://karman.dev/simonkarman-next/) and showcases the exported version (`yarn build`) on a static cdn.
