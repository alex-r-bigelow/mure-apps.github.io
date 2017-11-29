# mure-apps.github.io

The main page for the Mure ecosystem of applications

Setup:
======
_Recommended, but optional:_ Set up npm so that you don't have to use sudo for `npm link`:
    mkdir ~/.npmglobal
    echo "profile=/path/to/your/home/dir/.npmglobal" >> ~/.npmrc
    echo "PATH=/path/to/your/home/dir/.npmglobal/bin:$PATH" >> ~/.profile

Install the repository:
    git clone --recursive https://github.com/mure-apps/mure-apps.github.io.git

Install the libraries and link them (so that later npm installs point to your local version instead of the public version):
    cd mure-library
    npm install
    (sudo) npm link

    cd ../mure-ui
    npm install
    (sudo) npm link

Install the main and other apps:
    cd ..
    npm link mure
    npm link mure-ui
    npm install

    cd apps/data-binder
    npm link mure
    npm link mure-ui
    npm install

    cd ../encoding-manager
    npm link mure
    npm link mure-ui
    npm install

Running:
========

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
