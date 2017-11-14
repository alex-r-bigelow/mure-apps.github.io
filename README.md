# mure-apps.github.io

The main page for the Mure ecosystem of applications

Setup:
======
    git clone --recursive https://github.com/mure-apps/mure-apps.github.io.git
    npm install
    cd mure-library
    npm install
    cd ../mure-ui
    npm install
    cd ../apps/data-binder
    npm install
    cd ../encoding-manager
    npm install
    cd ../..

If you want to work on `mure-library` or `mure-ui`, follow these steps:
    cd mure-library
    npm link
    cd ..
    npm link mure

    cd mure-ui
    npm link
    cd ..
    npm link mure-ui

Development:
============

To just test out the main page:

    webpack-dev-server

To run all the apps (not just the main page):

    ./all-apps-dev-server.js

Deployment:
===========
    webpack
Bundles the main page into `docs/` for use with Github pages

Creating a new app:
===================
If you already have the app in a repository on github (if you don't, try forking the [boilerplate](https://github.com/alex-r-bigelow/my-es6-boilerplate/tree/mure-boilerplate)):

    cd apps
    git submodule add https://github.com/your-username/your-repository.git

Adding a new app to mure:
=========================
To get your app to show up in the main mure interface (and have other tools aware of its existence), you need to:
1. Add an entry to `./mure-library/src/appList.json` (if you're using webpack in your app, you can do this automatically by running `./mure-library/util/generate-app-list.js`).
2. `cd mure-library` and `npm run build`
3. Commit and push to your fork of the `mure-library` submodule
4. Update the `package.json` for every app that you want to be aware of your app (probably just the main `./package.json`) to point to your updated fork of `mure-library` instead of the published npm library, and run `npm install`
