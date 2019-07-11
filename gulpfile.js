const gulp = require('gulp')
const del = require('del')
const fs = require('fs')
const minimist = require('minimist')
const run = require('gulp-run-command').default
const options = minimist(process.argv.slice(2), {})

// default parameters for test
const params = {
  env: 'prod',
  restaurant: 'freshbites',
}

gulp.task('create:config', () => {
  return new Promise((resolve, reject) => {
    const configDir = './config'

    if (options.env) {
      params.env = options.env
    }

    if (options.rest) {
      params.restaurant = options.rest
    }

    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir)
    }

    fs.writeFileSync(
      `${configDir}/params.json`,
      JSON.stringify(params),
      (err) => {
        if (err) {
          console.log(err)
          reject()
        }
      },
    )

    resolve()
  })
})

gulp.task('clean', () => {
  return del(['target/']).then(() => {
    if (!fs.existsSync('target')) {
      fs.mkdirSync('target')
    }
    if (!fs.existsSync('target/allure-results')) {
      fs.mkdirSync('target/allure-results')
    }

    if (!fs.existsSync('target/junit-results')) {
      fs.mkdirSync('target/junit-results')
    }
  })
})

gulp.task(
  'run:tests',
  run(`./node_modules/.bin/wdio wdio.conf.js --port ${options.port || 4444}`),
)
gulp.task('test:swiggy', gulp.series(['clean', 'create:config', 'run:tests']))
gulp.task('test', gulp.series(['test:swiggy']))
gulp.task('report', run('npm run allure-report'))
gulp.task('report:junit', run('npm run junit-report'))
gulp.task('default', gulp.series(['test']))
