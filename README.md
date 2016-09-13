TODO: Use eslint-plugin-react

# Regexellence

# Version 0.0.0

An application that provides the user with a variety of Regular Expression toy problems, provided in sequential difficulty. 

# Install
Make sure you have Eslint installed to run linter. 
	i.e. npm i -g eslint

# Style Guide

Function Declarations

Whitespace 
Tabs: 
Use soft tabs set to 2 spaces. eslint: indent jscs: validateIndentation
Blocks:
Space before leading brace. eslint: space-before-blocks jscs: requireSpaceBeforeBlockStatements


Function declarations: eslint: func-style jscs: requireFunctionDeclarations
````const x = function () {};
const y = function a() {};```
Expressions: eslint: space-infix-ops jscs: requireSpaceBeforeBinaryOperators, requireSpaceAfterBinaryOperators
Set off operators with spaces. 


React (ES6)
Component flow eslint: ???
e.g.
```export default class Comp extends React.Component({
	constructor() {

	}
	render() {

	}
	//...helper functions
})```

# Greenfield Notes
-Standards
	-style guide/linting before commits
	-readme - constant updates
	-standard JSON
-standups - peer review
-comments - why you did it
-mobile - React/CSS from beginning
-moment.js

# File Structure
-client/
	-components/
		-dummyComponents/
		-smartComponents/
	-app.jsx
	-styles/
		-main.css
-server/
-tests/
-bower.json
-node_modules/*
-index.js
-.eslintrc
-package.json
-README.md
-CONTRIBUTING.md
-LICENSE

