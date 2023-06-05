# Modul D

## Content

- [About](#about)
- [Submodules](#submodules)
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
  - [Week 4](#week-4)
- [Resources](#resources)

## About

Repository with steps for going from Vanilla JavaScript to learning how to create a basic React project.
This is using the Vite Build System.

## Submodules

### Week #1

#### [Node Basics](./node-basics/)

Setting up a node package, and running some basic JavaScript.
[Tutorial Link](https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi)

#### [Creating a page with Vite and React](./landing-page/)

Creating a single page and basic introduction to components.

#### [Dynamic Components](./landing-page/)

Component properties, children

#### [Properties and Listing out data](./landing-page/)

Creating components from data and loading the data.


### Week #2

#### [Keeping things styled and organized](./stateful/)

CSS Modules and alternative ways of styling.

#### [React rendering and useState](./stateful/)

When does React decide to rerender components?

#### [Asynchronous Code in React with useEffect](./stateful/)

Introduce useEffect.
[Link to API documentation](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger)

#### [Handling errors](./stateful/)

Implement paths for every possible error when using the FetchAPI.


### Week #3

#### SPA routing

Introduce routing on the Frontend. Provide a setup for a multiple pages.

#### Lifting state up

Introduce useContext.

#### Authenticating and Authorization

Storing secret tokens and using them for authentication or authorization.

#### First dive into third party libraries


### Week #4

#### Recap

Get feedback and repeat difficult portions.

#### Testing

Up until now you have written code and tested it until it passes some internal judgment of your that it is good enough.
This approch can work in tiny projects, where little changes over time. For large and enduring projects. This is not viable. Hence the comming of Automated Testing. First to learn among them is Unit testing.

This have you break down components of your application into simple functions that have to pass some form of specification testing to be deemed valid. Most 

<details>
  <summary>Unit Testing Example</summary>

  ```js
    import { sortList } from './sortList.js'

    describe('sortList', () => {
      it('should sort the list in ascending order', () => {
        const unsortedList = [3, 1, 4, 2, 5];
        const expectedSortedList = [1, 2, 3, 4, 5];
        const sortedList = sortList(unsortedList);
        expect(sortedList).toEqual(expectedSortedList);
      });

      it('should return an empty array if the input list is empty', () => {
        const unsortedList = [];
        const expectedSortedList = [];
        const sortedList = sortList(unsortedList);
        expect(sortedList).toEqual(expectedSortedList);
      });

      it('should not modify the original list', () => {
        const unsortedList = [3, 1, 4, 2, 5];
        const sortedList = sortList(unsortedList);
        expect(unsortedList).not.toEqual(sortedList);
      });
    });
  ```
</details>
<br>

#### Complex State Managment

Introduces tools for managing complex state in a React application [React Redux](https://react-redux.js.org/) and [Zustand](https://github.com/pmndrs/zustand)

#### Rendering Strategies

There are currently a coupl of ways we can create Web Applications / Sites.

- Upload a set of **Static** files to a web server, this includes Vanilla HTML, CSS and JS files.
- Create a minimal HTML and send along enough JavaScript to generate the page on the **Client**.
- Start a program on a **Server** and have it modify the page based on the incomming request.
- Any combination of the previous three ways

To avoid going through the myriad of tools created for any or all of the strategy, we will look at one here.

[NextJS](https://nextjs.org/) is the selfnamed *React Framework for the Web*. Among some of the functionality it provides is a relative simple way to decide when the React Components are going to be run. This allows for less hassle when deciding between [Client Side Rendering, Server Side Rendering or Static Site Generation](https://pagepro.co/blog/ssr-csr-ssg/).


## Resources

### Important links

- [Node Documentation](https://nodejs.org/en)
- [Node Package Manager Documentation](https://docs.npmjs.com/)
  <br> These two are alternatives package managers to NPM
  - [Yarn Package Manager](https://classic.yarnpkg.com/lang/en/docs/)
  - [pnPM](https://pnpm.io/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)

- [Learning Roadmaps](https://roadmap.sh/react)
  <br> If you don't know what to learn next have a look here and pick something you do not understand.

### 3rd party libraries

- [React Icons](https://react-icons.github.io/react-icons/)
<br> A collection of icons

- [Radix UI](https://www.radix-ui.com/)
<br> Headless component library

- [Headless UI](https://headlessui.com/)
<br> Headless component library

- [React Aria](https://react-spectrum.adobe.com/react-aria/)
<br> Headless component library

- [Framer Motion](https://www.framer.com/motion/)
<br> Library for animations

- [React use](https://github.com/streamich/react-use)
<br> An extension to the basic React hooks

- [TanStack Query / React Query](https://tanstack.com/query/latest/docs/react/overview)
<br> Library for fetching data. Handles caching and simplifies errors.

- [SWR](https://swr.vercel.app/)
<br> Library for fetching data. Handles caching and simplifies errors. Follows the **S**tale **W**hile **R**evalidate (SWR) caching strategy.

- [Zustand](https://github.com/pmndrs/zustand)
<br> Library for complex state management, a concrete example is the shopping cart for an e-commerce site.

- [React Redux](https://react-redux.js.org/)
<br> Library for complex state management, a concrete example is the shopping cart for an e-commerce site.