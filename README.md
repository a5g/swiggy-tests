# webdriverio-test-boilerplate

A sample assignment to build some tests around swiggy using WebdriverIO, Mocha, Chai, Gulp and some popular Node.js modules.

This covers testing all the scenarios mentioned in the coding challenge [document](https://github.com/a5g/webdriverio-test-boilerplate/blob/master/assets/code-challenge.pdf).

(Note: These tests can run without any issues during 10am and 10pm IST. Tests depends on few resturants that does not serve 24/7. So better to run between 10am and 10pm IST)

## Prerequisites

> - Node.js latest (Install Nodejs 10.x using [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/))
> - gulp-cli (npm install -g gulp-cli)
> - allure-commandline (npm install -g allure-commandline)
> - [Java 1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
> - chrome browser latest
> - firefox browser latest

## Preferred Editor

> [VSCode](https://code.visualstudio.com/download) with following extensions
>
> - Prettier - Code Formatter

## Getting Started

```
1. git clone git@github.com:a5g/webdriverio-test-boilerplate.git
2. cd webdriverio-test-boilerplate
3. npm install
4. gulp test
5. gulp report
```

## Gulp

[gulp](https://gulpjs.com/) has been integrated to simplify the task execution.

## Commandline parameters

```
One can choose environment and resturant at runtime

Choosing environment (default env: prod)
gulp test --env [environment]

available environments
['dev', 'staging', 'prod','uat']

eg.,
to run tests for 'dev'
gulp test --env dev

Choosing restaurant (default restaurant: freshbites)
gulp test --rest [restaurant]

available restaurants
['biteme', 'cakezone', 'freshbites']

eg.,
to run tests for 'cakezone'
gulp test --rest cakezone

Note: all parameters can be used together

to run tests for cakezone in dev
gulp test --env dev --rest cakezone
```

## Browsers

Default configuration runs the test in both 'chrome' and 'firefox' browsers.
To exclude any brower one has to update wdio.conf.js

```
To disable chrome
- comment line no. 50 to 56

To disable firefox
- comment line no. 57 to 60
```

sample config is here

```typescript
    capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['window-size=1400,1200'],
      },
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
    },
  ],
```

## Logs

```
After the test execution, logs can be accessed from
1. target/wdio-0-0.log
2. target/wdio.log
```

## Reports

```
To view the Allure test reports
> gulp report

To view the Junit test reports
> gulp report:junit
```

Allure Report
![allure](https://github.com/a5g/webdriverio-test-boilerplate/blob/master/assets/allure.png)

## Test Summary

![summary](https://github.com/a5g/webdriverio-test-boilerplate/blob/master/assets/summary.png)

## Demo

[swiggy-tests-demo](https://drive.google.com/open?id=1DtVxFLb9YB6AxVOJD7-ShrQnRmxyVYi8)

## Acknowledgements

> - [WebdriverIO](https://webdriver.io/)
> - [Mocha](https://mochajs.org/)
> - [Chai](https://www.chaijs.com/)
> - [Allure](http://allure.qatools.ru/)
> - [Swiggy](http://swiggy.com/)
