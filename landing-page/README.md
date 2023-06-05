# First React Project

## Content

- [About](#about)
- [Guiding steps](#guiding-steps)
  - [Setting up a new project](#setting-up-a-new-project)
  - [Building the application](#building-the-application)
- [Resources](#resources)

## About

This is a basic repository for a React Project created with Vite. The entrypoint of the application is the [index.html](./index.html) file.
Vite start there and looks for any links (the script element in this instance) and looks through it for any **import** statements.
This continuous until all files and files linked through **import** statments have been traversed. The resulting collection of files
are what Vite serves for the development server. It is the same that will be used when building your application

## Guiding steps

### Setting up a new project

1. Open an empty folder in your terminal and run:
```sh
npm create vite@latest
```
This will generate a new project using the *latest* version of Vite

2. Answer the questions and follow the instructions printed to the terminal

3. You should now have VS Code open in the folder of your project. To start the development server run:
```sh
npm run dev
```

4. To make some changes start by editing the return value of the function in [App.jsx](./src/App.jsx)

5. To edit the title / favicon / link font types, do those edits inside [index.html](./index.html)


### Building the application

1. To build your application into a set of files ready to publish run:
```sh
npm run build
```
2. The result will be, by default, put into a new **dist/** folder

## Resources

- [API Link](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger)
- [ArticleCard Sketch](https://excalidraw.com/#json=ZgSA4gc66HUc3Ro5Heji4,47omrORbpF5FrHD5LsroVA)