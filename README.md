# craft-boilerplate
A starting point for using CraftCMS with SASS Grunt tasks.

## Getting Started
To create a new Craft project based on this repo, create your new repo. Let's call it Feast.

In Feast, add this boilerplate repo as a remote,
```
git remote add boilerplate https://dust.git.beanstalkapp.com/craft-boilerplate.git
```
pull in the contents,
```
git pull boilerplate master
```
and then make sure you can't push up to the boilerplate, as that may well break everything.
```
git remote set-url --push boilerplate no_push
```
