# Blog Builder

**Use [this repository](https://github.com/alchemycodelab/react-blog-builder/) as a template for your deliverable**

### Learning Objectives

- Use attributes in parent components to pass data down to child components as props
- Use useState hook to create and update simple (primitive) component state
- Use arrow function properties to define event handlers
- Destructure props and state in functional components

### Description

The objective of this application is to create a mini "Blog Builder" that contains an editing panel and a preview panel. When the attributes in the editing panel are updated, their new values are reflected in the preview.

You have been provided with `<Home/>` component, an `<Editor>` component, and an completely empty `<Preview> component. Your job is to add state to the `<Home>` component which will then be passed down to the `<Editor>` and `<Preview>` components.

_Note: The rubric expects a commit for every variable. Start with a single prop and do the following:_

- Define as state variable in Main.js
- Pass variable and setter to Editor.js
- Update Editor.js to change state when input changes
- Pass variable to Preview.js and display using JSX

### Rubric

_Please remember to deploy your main branch on Netlify and open a PR for a preview deploy even though its not part of the Rubric_

| Looking for...                                                   | Points |
| ---------------------------------------------------------------- | ------ |
| One commit per state variable (work one at a time)               | 2      |
| State variables and setters defined in Home.js                   | 2      |
| State variables are setters are passed as props to Editor.js     | 2      |
| Editor correctly updates state variables when each input changes | 2      |
| Preview correctly displays updated state                         | 2      |
