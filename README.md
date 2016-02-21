# Heron #

> OctoberCMS Theme that has automation using [Gulp](http://gulpjs.com/) for the build process (compression, compilation and browser syncing) and [Materialize](http://materializecss.com/) (built based on Google's Material Design) for the SCSS framework.


### What is this repository for? ###

Starting development on an OctoberCMS Theme?


# Getting Started #

To get started download [Heron](https://github.com/nilssanderson/heron) with Git:
```
git clone https://github.com/nilssanderson/heron.git
cd heron
npm install
```

Then to build the framework:
```
gulp
```

The default task should:

* Convert SCSS to CSS
* Compress Images
* Open these in the browser for syncing

Your finished assets will be created in a folder called `build`.

You can proxy an OctoberCMS site by adding the URL into the variable `dynamicServerURL` inside the gulpfile.

Once done you should now be able to run:
```
gulp dynamic
```
instead of
```
gulp
```
and you should now have broswer sync on your OctoberCMS (however it may be somewhat slower)

To create compressed, production-ready assets, run:
```
gulp production
```
