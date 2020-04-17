const ES5Lib = require('./lib/arrayLib.es5')
const ES6Lib = require('./lib/arrayLib.es6')
const Lib2 = require('./lib/arrayLib2')

const arrayLibES5 = ES5Lib.arrayLib
const arrayLibES6 = ES6Lib.arrayLib
const arrayLib2 = Lib2.arrayLib2

module.exports = {
  arrayLibES5,
  arrayLibES6,
  arrayLib2
}
