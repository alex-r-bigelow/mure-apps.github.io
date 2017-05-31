# mure-apps.github.io

The main page for the Mure ecosystem of applications

Setup:
======
    git clone --recursive https://github.com/mure-apps/mure-apps.github.io.git
    npm install

Development:
============

To just test out the main page:

    webpack-dev-server

To run all the apps (not just the main page):

    node all-apps-dev-server.js

Deployment:
===========
    webpack
Bundles the main page into `docs/` for use with Github pages

Creating a new app:
===================
If you already have the app in a repository on github (if you don't, try forking the [boilerplate](https://github.com/alex-r-bigelow/my-es6-boilerplate/tree/mure-boilerplate)):

    cd apps
    git submodule add https://github.com/your-username/your-repository.git

Once this is done, `all-apps-dev-server` should automatically recognize and build your app from its `webpack.config.js` file. If you don't want to use webpack, please file an issue... a simpler development process is important motivation for this project, and I could really use your ideas / use case(s).
