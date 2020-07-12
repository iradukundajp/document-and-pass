# Document and Pass

These are a series of javascript exercises intended to help you learn how to document and test functions. They start very simply, but get more involved as you progress through them.

## Set-Up

Before you start you should have a few things installed on your machine:

1. NPM.  To check if you have NPM, type `npm --version` in a terminal. If you get back `Command 'npm' not found, but can be installed with:`, do NOT follow the instructions in the terminal to install with `apt-get` (this causes permission issues). Instead, install NPM/Node with NVM by following the instructions [here](https://github.com/TheOdinProject/curriculum/blob/master/web_development_101/installations/installing_node.md).
1. Jasmine.  Jasmine is a testing framework for Javascript.  Type `jasmine -v` to check for it.  If you need to install it, type `npm install -g jasmine` to do so.
    - you'll use `jasmine index.spec.js` to run tests for each exercise individually
1. Clone this repo
1. `npm install`
    - this installs the dependencies for `npm run test` and `npm run document`
1. happy coding!

## Studying

Exercises are grouped by difficulty level (0, 1, 2, 3).  Each exercise includes 5 files:

1. a markdown file with a description of the task
1. an empty (or mostly empty) `index.js`, this is where you will write your code and documentation
1. a set of tests in `index.spec.js`
1. `sandbox.js`. this file requires your solution, and exists for debugging your function
    - `index.js` should _only_ contain your function and documentation
    - `index.spec.js` should _only_ contain the tests
    - so `sandbox.js` was born!  you can practice calling your solution and stepping through in the debugger
1. a file called `report.txt`, test results will be written to this file by `npm run test`

### Documenting

Each `index.js` contains an empty function with an empty doc string.  Before writing any code take some time to study the test cases and write the docstring.  Understanding and describing the function's behavior before writing any code will set you up for success. Be sure to include:

1. A full description of the function's behavior (ie. test cases, not the code you write inside the function)
1. A complete list of parameters, including their types and a short description
1. The return value, including it's type and a short description
1. An example use case

To see what this looks like, check out `0-hello-world/index.js`.  To publish your jsdoc comments to the main README open this directory in CLI and enter `npm run document`.

### Passing

#### One Exercise at a Time

To study one exercise go to the exercise directory in terminal and run `jasmine index.spec.js` (_use gitbash if you are using Windows_).  This will run the test file and show you the output directly in your terminal.  Upon first running the tests you will find that the tests fail: this is by design!  Your task is to open up the javascript file and write the code needed to get all of the tests to pass.

The first exercise, `0-hello-world` will walk you through the process in more depth.

#### Report Exercises at Once

To test and report all exercises at once, use `npm run test`.  This will run the tests for each exercise and write the results into each `report.txt` file.
