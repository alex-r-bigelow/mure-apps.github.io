# mure-apps.github.io

The main page for the Mure ecosystem of applications

Setup:
======
    npm install

Development:
============

To just test out the main page:
    webpack-dev-server --progress

To run all the apps, clone each repository in the parent directory containing this one, and run:
    bash serveFullSystem.sh

Deployment:
===========
    webpack
Bundles everything into `docs/` for use with Github pages
