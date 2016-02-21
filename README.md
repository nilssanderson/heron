# Gecko #

> Helper framework that has automation using [Gulp](http://gulpjs.com/) for the build process (compression, compilation and browser syncing) and [Materialize](http://materializecss.com/) (built based on Google's Material Design) for the SCSS framework.


### What is this repository for? ###

Starting development on a new project or adding to an existing project?


# Getting Started #

To get started download [Gecko](https://github.com/nilssanderson/gecko) with Git:
```
git clone https://github.com/nilssanderson/gecko.git
cd gecko
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

Your finished site will be created in a folder called `build`, viewable at this URL: [http://localhost:3010](http://localhost:3010)

* Browsersync settings: [http://localhost:3020](http://localhost:3020)

To create compressed, production-ready assets, run:
```
gulp production
```


# Adding the framework as a submodule #

Delete the app folder and update the gulpfile srcPath to 'YOUR_SRC_PATH' so you can keep your files where they are.

Follow the below instructions to add the framework to an already existing project and to keep it separate from your current repository:
```
git submodule add https://github.com/nilssanderson/gecko.git gecko
git submodule init
git submodule update
```

Once the framework has been added in as a submodule, a `.gitmodules` file will be created. You will need to specify the branch that you wish to track on the framework. Edit the `.gitmodules` file to include the branch:
```
[submodule "gecko"]
	path = gecko
	url = https://github.com/nilssanderson/gecko.git
	branch = master
```

Run this if there have been any updates to the [Gecko](https://github.com/nilssanderson/gecko) framework to pull down the latest changes:
```
git submodule update
```

A detached HEAD state may occur when updating a submodule. Once an update has been run, just make sure that the submodule is tracking the `master` branch:
```
cd gecko
git checkout master
```

> Some more info that could be looked into in regards to improving submodule addition:
 [Stackoverflow - Answer 1](http://stackoverflow.com/questions/1777854/git-submodules-specify-a-branch-tag/18797720#18797720) and [Stackoverflow - Answer 2](http://stackoverflow.com/questions/1777854/git-submodules-specify-a-branch-tag/18799234#18799234)
