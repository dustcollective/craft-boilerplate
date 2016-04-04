# Dust Craft Boilerplate
A starting point for using Craft CMS for Dust projects.

## Getting Started
To create a new Craft project based on this repo, create your new repo. Let's call it Feast.

In Feast, add this boilerplate repo as a remote,
```
git remote add boilerplate https://dust.git.beanstalkapp.com/dust-craft-boilerplate.git
```
pull in the contents,
```
git pull boilerplate master
```
and then make sure you can't push up to the boilerplate, as that may well break everything.
```
git remote set-url --push boilerplate no_push
```

### Setting Up
Feast is built with [Craft](http://craftcms.com), but the Craft source files are not included with this repo. That would be ridiculous.

So to get it working:
* clone the repo,
* download the [latest Craft build](http://craftcms.com/latest.zip?accept_license=yes),
* copy the contents of public/,
* copy craft/app/, craft/plugins and craft/storage,
* copy example-db.php into craft/config/db.php, and update your db settings.

We compile all our assets using Grunt. So first run ```npm i``` to install the node modules, ```bower update``` to install the bower components, and then ```grunt build``` to generate all the assets.

## Plugins we use in this project
We don't include plugin files in the repo. That would also be ridiculous. So here is a list of the plugins used:
