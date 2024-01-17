# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run format`

Runs formatting of the components using Prettier

### `npm run predeploy`

Creates a build directory with a production build of the app.
Makes app ready for deploy on server

### `npm run deploy`

Creates/replaces files at build folder and pushes changes to the branch `gh-pages`. You can see the deployed application via the following link:

https://zhivotenkoalex.github.io/bna/

# Documentation

## This app uses following libraries:

### `animate.css`

Provides special css classes for animation

### `dayjs`

Library for convenient work with dates

### `prettier`

A library for formatting components according to custom rules.

### `react-router-dom`

Declarative routing for React's "client side routing".

### `remixicon-react`

A library with a bunch of svg-icons

### `styled-components`

This a library that allows to write CSS in JS while building custom components in Reactjs

### `uuid`

Lightweight library for generating id's

## Brief Report

Before development I examined the layout and decided to implement mobile-first developing as, in my opinion,the best solution for such layout.
First I decided what types of libraries I would need, investigated and after installed them.
Once the layout was ready I prepared the mock file that simulated the data that should come from the API.
After the previous step was done, I implemented the react router.
In the end I fixed typing and double-checked styles, code and types.
The last step was set of the deployment on github pages.

Overall, the developing process passed without any problems.
During development I faced with following challenge:

- features of work of the client-side router with deployment on platforms such as git-hub pages. The issue was that root route consists of not only the host name but also repository name. So I fixed it a not entirely correct method (to save time) and added additional route with repository name and duplicated there the main page component, thereby I left opportunity to handle all other non-existed routes with 'notFound page'
