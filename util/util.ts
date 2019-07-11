// utility methods
const params = require('../config/params.json')

export const getEnv = () => {
  return params.env
}

export const getResturant = () => {
  return params.restaurant
}
