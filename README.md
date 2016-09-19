TODO: Use eslint-plugin-react
TODO: Use webpack --watch => watches for changes?

# Regexcellence
Regexcellence is an thorough educational tool for learning about and implementing
Regular Expressions.

# Version 0.0.0

An application that provides the user with a variety of Regular Expression toy problems, provided in sequential difficulty. 

# Install
For developing: 
Make sure you have Eslint installed to run linter. 
$ npm i -g eslint
Webpack for deploying and linting: 
$ npm install webpack -g

# Technology
* Frontend: React & Redux
* Backend: Express, Node, MongoDB, & Mongoose
* Testing: Mocha, Chai, & Enzyme
* Build Tools: Webpack

#Team
* [This link](https://github.com/troygibb)Troy Gibb
* [This link](https://github.com/hellodanali)Dana Li
* [This link](https://github.com/bbtran)Benjamin Tran
* [This link](https://github.com/lwonsower)Lucy Wonsower

# Style Guide

Uses Airbnb Style Guide

If you want to escape the linter: 
  // For everything:
  /* eslint-disable */
  ...
  /* eslint-enable */
  // For specific rule:
  /* eslint-disable no-unused-vars */
  ...
  /* eslint-enable no-unused-vars */
  // For tweaking a rule:
  /* eslint no-comma-dangle:1 */
  // To disable rule per line:
  alert('foo'); // eslint-disable-line no-alert
  //For the entire file: 
  /*eslint-env node, mocha */

React (ES6)
Component flow eslint: ???
e.g.

```sh
export default class Comp extends React.Component({
  constructor() {

  }
  render() {

  }
  //...helper functions
})
```

# Greenfield Notes
* Standards
  * style guide/linting before commits
  * readme - constant updates
  * standard JSON
* standups - peer review
* comments - why you did it
* mobile - React/CSS from beginning
* moment.js

# File Structure
+--client/
| +--components/
|   +--dummyComponents/
|   +--smartComponents/
| +--containers/
| +--reducers/
| +--app.jsx
| +--styles/
|   +--main.css
| +--index.html
+--build/
+--libs/
| +--parts.js
+--server/
+--tests/
+--bower.json
+--node_modules/*
+--index.js
+--.eslintrc
+--package.json
+--README.md
+--CONTRIBUTING.md
+--LICENSE

