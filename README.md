# Regexcellence
Regexcellence is a community driven educational tool for learning about regular expressions.

#Version 1.0.0

## About the app
Let's face it, learning the wacky syntax of regular expressions is tough. One good tutorial may give you enough to get started with being fluent in this subset of programming languages, but it sure won't make you an expert in it. Regular expressions aren't used that often in code, so when a use case does come about, most of us are left googling for a pre-packaged regex that does the job for us, without a good notion of what the heck it's doing.

Now enter Regexcellence.

Regexcellence is similar to many other coding challenge websites, like Codewars, Coderbyte, etc., except it purely focuses on regular expressions. It also takes inspiration from the excellent tutorial [Regexone.com](https://regexone.com/), where user input is immediately interpreted and matched against the provided test cases. In this way, Regexcellence cuts itself into a niche of the programming community, one where you can really test your steel in the land of regular expressions.

Regexcellence currently consists of a regex tutorial that walks the user through the basics of regular expressions, and a community platform for both attempting regular expression problems and contributing original problems.

## Install
For developing:
Make sure you have Eslint installed to run linter.
```
$ npm i -g eslint
```
Webpack for deploying and linting:
```
$ npm install webpack -g
```

# Our Tech Stack
## Frontend
* [React](https://facebook.github.io/react/)-[Redux](https://github.com/reactjs/redux) for rendering page views and maintaining state
* [Bootstrap](http://getbootstrap.com/)- a mobile first styling framework

## Backend
* [Node.js](https://nodejs.org/en/) with [Express](http://expressjs.com/) for serving pages and handling api requests
* [MongoDB](http://www.postgresql.org/) for database
* [Mongoose](http://mongoosejs.com/) for object modeling

## Testing
* [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* [Enzyme](https://github.com/airbnb/enzyme) for React component testing

## Dev/Build Tools
* [Webpack](https://webpack.github.io/) for scaffolding and [Babel](https://babeljs.io/) for transpiling


#Team
* [Troy Gibb](https://github.com/troygibb)
![alt text](https://avatars0.githubusercontent.com/u/18633748?v=3&s=75)
* [Dana Li](https://github.com/hellodanali)
![alt text](https://avatars3.githubusercontent.com/u/17036705?v=3&s=75)
* [Benjamin Tran](https://github.com/bbtran) ![alt text](https://avatars2.githubusercontent.com/u/13708462?v=3&s=75)
* [Lucy Wonsower](https://github.com/lwonsower) ![alt text](https://avatars0.githubusercontent.com/u/16870016?v=3&s=75)

##Folder and File Structure
    Regexcellence/
    |
    |--client/
    |   |--actions/
    |   |--challenge/
    |   |--login
    |   |--pages
    |   |--reducers
    |   |--tutorials
    |   |--user-posts
    |   |--user-profile
    |   |--user-challeges
    |   |--styles/
    |       |--SASS/SCSS
    |--server/
    |   |--db/
    |   |--auth/
    |   |--handlers
    |--Node/Express server
