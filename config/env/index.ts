// load the environment specific config at runtime
// by default system loads the configuration mentioned in config/params.json
// which is prod. this value is set by default from gulpfile.js (line no. 7)
// user can choose the environment at runtime by passing a parameter called "env" to gulp task
// eg., gulp test --env dev (will choose dev as environment)
import dev from './dev'
import staging from './staging'
import prod from './prod'
import uat from './uat'
import * as util from '../../util/util'

// default env: prod
// user can get the specific environment config by passing the param to this method
export default function(env: any = util.getEnv()) {
  switch (env) {
    case 'prod':
      return prod
    case 'uat':
      return uat
    case 'staging':
      return staging
    case 'dev':
      return dev
    default:
      return dev
  }
}
