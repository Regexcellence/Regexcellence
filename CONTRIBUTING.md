
# Contributing to Regexellence

Hello team! Please follwing the following guidelines when contributing to the reop!

Our app will be deployed on the following 2 websites.
  * https://regexellence.[hostingSite].com
  * https://regexellencetest.[hostingSite].com

All changes will initially be deployed to our test domain before merging to the master.

All QA and UX/UI edits will be made on the "dev" branch.

Once the team reviews the test domain and the site remains functional, the "dev" branch will then be merged to the master.  

# Git Workflow

## Getting started
Make sure that you have properly forked the repo before cloning the repo into your local workstation.

1) Clone repository onto your local workstation
2) Upon cloning make sure to add the remote for your upstream repository.
```sh
$ git clone https://github.com/[insert_username]/Regexellence.git
$ git remote add upstream https://github.com/Regexellence/Regexellence.git
```
3) Checkout to the "dev" branch. This is where most of your edits will be made.
```sh
$ git checkout -b dev
```
### Pulling from upstream
1) Before pulling down from upstream, make sure that your edits have been staged by using ```git add``` or ```git stash``` (you can always return to your stashed changes).

2) Pull down using rebase
```sh
$ git pull upstream dev --rebase
```

### Pushing Code

1) Push to your "dev" branch. Thats all.
```sh
$ git push origin dev
```

## Pull Requests and Git Commit Messages

### Pull Requests
Be sure to LINT your files before submitting a pull request!
Pull Requests will be made from your feature branch and will be compared with the dev branch. Please double check that you are NOT submitting a pull request into the master branch.

### Git Commit Messages  
* Use the present tense ("Add feature..." not "Added feature...")
* Use the imperative mood ("...move cursor to..." not "...moves cursor to...")
* Limit the first line to 72 characters or less
* Delimit your key chages using "|" ("Edit feature | Add route | etc...")
* Consider starting the commit message with the following:
    * [CLEANUP] - when improving the format/structure of the code
    * [MEMO] - when writing docs
    * [BUGFIX] - when fixing a bug
    * [FIRE] - when removing code or files
    * [DEV] - when changing dependencies
    * [FEATURE] - when changing/adding features
* Commit frequently to avoid chaining together commits (Try not to do this: ```[ CLEANUP,BUGFIX,DEV ]``` )

### Multiline Commits
When implementing complex features make sure to provide a thorough descriptions of the feature within your commit message. Provide 2-3 sentences describing the feature, how to use it, and any outstanding issues on your feature.

    ```sh
        $ git add .
        $ git commit
        i
        [commit messages]
        esc
        $ :wq
    ```
