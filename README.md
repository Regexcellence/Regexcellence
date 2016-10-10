# Regexcellence
Regexcellence is a community driven educational tool for learning about regular expressions.

#Version 1.0.0

## About the app
Let's face it, learning the wacky syntax of regular expressions is tough. One good tutorial may give you enough to get started with being fluent in this subset of programming languages, but it sure won't make you an expert in it. Regular expressions aren't used that often in code, so when a use case does come about, most of us are left googling for a pre-packaged regex that does the job for us, without a good notion of what the heck it's doing.

Now enter Regexcellence.

Regexcellence is similar to many other coding challenge websites, like Codewars, Coderbyte, etc., except it purely focuses on regular expressions. It also takes inspiration from the excellent tutorial [Regexone.com](https://regexone.com/), where user input is immediately interpreted and matched against the provided test cases. In this way, Regexcellence cuts itself into a niche of the programming community, one where you can really test your steel in the land of regular expressions.

Regexcellence currently consists of a regex tutorial that walks the user through the basics of regular expressions, and a community platform for both attempting regular expression problems and contributing original problems.

## Team
* ![alt text](https://avatars0.githubusercontent.com/u/18633748?v=3&s=75) [Troy Gibb](https://github.com/troygibb)
* ![alt text](https://avatars3.githubusercontent.com/u/17036705?v=3&s=75) [Dana Li](https://github.com/hellodanali)
* ![alt text](https://avatars2.githubusercontent.com/u/13708462?v=3&s=75) [Benjamin Tran](https://github.com/bbtran)
* ![alt text](https://avatars0.githubusercontent.com/u/16870016?v=3&s=75) [Lucy Wonsower](https://github.com/lwonsower)


##
##
# Our Tech Stack

## Frontend
* [React](https://facebook.github.io/react/)-[Redux](https://github.com/reactjs/redux) for rendering page views and maintaining state
* [Bootstrap](http://getbootstrap.com/) - a mobile first styling framework
* [XRegexP](http://xregexp.com/) - a Javascript Regular Expressio  

## Backend
* [Node.js](https://nodejs.org/en/) with [Express](http://expressjs.com/) for serving pages and handling api requests
* [MongoDB](http://www.postgresql.org/) for database
* [Mongoose](http://mongoosejs.com/) for object modeling

## Testing
* [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* [Enzyme](https://github.com/airbnb/enzyme) for React component testing
* [Shouldjs](https://shouldjs.github.io/) and [Supertest](https://github.com/visionmedia/supertest) for API testing

## Dev/Build Tools
* [Webpack](https://webpack.github.io/) for scaffolding and [Babel](https://babeljs.io/) for transpiling

##Folder and File Structure
    Regexcellence/
    |
    |--client/
    |   |--actions/
    |   |--challenge/
    |   |--login/
    |   |--pages/
    |   |--reducers/
    |   |--tutorials/
    |   |--user-posts/
    |   |--user-profile/
    |   |--userChalleges/
    |   |--styles/
    |       |--SASS/SCSS
    |--server/
    |   |--db/
    |   |--auth/
    |   |--handlers
    |   |
    |--spec/
    |   |--tests
    |   |
    |--Node/Express server

## Install

#### Global Installs
For developing: Eslint installed to run linter

```
$ npm install eslint -g
```

For testing: Mocha

```
$ npm install mocha -g
```

For building and deploying: Webpack

```
$ npm install webpack -g
```

For database access: Mongo

```
$ npm install mongodb -g
```

#### Local Install

Download all dependencies listed under package.json

```
$ npm install
```

#### To Run the Application
Initiate both Development and Production servers by running ```$ npm run devStart``` and ```$ npm run production``` in separate terminal windows

Fronend development changes are reflected immediately on ```http://localhost:8080```
Server side API requests are routed through the webpack-dev-server proxy to ```http://localhost:3000```

## Testing
Before testing make sure to have both servers running then run ```npm run test```

## Contributing

We are happy to review and merge pull requests. Please see [CONTRIBUTING](CONTRIBUTING.md) if you'd like to add to our amazing project.

## License 

MIT
