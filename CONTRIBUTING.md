
# Contributing to Regexellence

Hello team! Please follwing the following guidelines when contributing to the reop!

Our app will be deployed on the following 2 websites.
  * https://regexellence.[hostingSite].com
  * https://regexellencetest.[hostingSite].com

All changes will initially be deployed to our test domain before merging to the master.

All QA and UX/UI edits will be made on the dev branch.

Once the team reviews the test domain and the site remains functional, the dev branch will then be merged to the master.  

# Git Workflow

## Before Moving Forward
Make sure that you have properly forked the repo before cloning the repo into your local workstation.

Upon cloning make sure to add the remote for your upstream repository...
```sh
$ git clone https://github.com/[insert_username]/Regexellence.git
$ git remote add upstream https://github.com/Regexellence/Regexellence.git
```

Checkout and do all of your development branch on your dev branch...
```sh
$ git checkout -b dev
```

When adding features create a new branch before development...
```sh
$ git checkout -b [newFeature]
```

## Pull Requests and Git Commit Messages

### Pull Requests
Be sure to LINT your files before submitting a pull request!
Pull Requests will be made from your feature branch and will be compared with the dev branch. Please double check that you are NOT submitting a pull request into the master branch.

### Git Commit Messages  
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Consider starting the commit message with the following:
    * [ CLEANUP ] - when improving the format/structure of the code
    * [ MEMO ] - when writing docs
    * [ BUGFIX ] - when fixing a bug
    * [ FIRE ] - when removing code or files
    * [ DEV ] - when changing dependencies
    * [ FEATURE ] - when changing/adding features
