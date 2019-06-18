# beforeEach and afterEach hooks bug example

Problem: beforeEach and afterEach hooks are not colled when using mocha runner.  
Issue: https://github.com/nightwatchjs/nightwatch/issues/1477

Steps to reproduce:
1. Install dependencies with `npm install` or `yarn install`
2. Run `npm run nightwatch`. The output will be:
```bash
> nightwatch

GLOBAL beforeEach
Running:  Demo test GitHub

[Function: beforeEach]
[Function: before]
✔ Element <body> was visible after 25 milliseconds.
✔ Element <.container h1 strong a> was visible after 23 milliseconds.
✔ Checking project title is set to nightwatch  - 25 ms.

OK. 3 assertions passed. (2.581s)
GLOBAL afterEach
GLOBAL after
```
You can see that beforeEach and afterEach hooks have been called
3. Run `npm run mocha`. The output will be:

```bash
> MOCHA=1 nightwatch

GLOBAL before


  Github
    ✓ Demo test GitHub (1468ms)


  1 passing (3s)

GLOBAL after
```
beforeEach and afterEach hooks have not been called
