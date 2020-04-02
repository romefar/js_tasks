var arrayLib = (function () {
  'use strict'

  var methods = {}
  var _array = null

  methods.take = function (array, n) {
    var res = []

    if (arguments.length === 1 && typeof array === 'number') {
      var count = array
      array = _array

      if (array.length < count || count < 0) return this

      for (var i = 0; i < count; i++) {
        res.push(array[i])
      }
      _array = res
      return this
    }

    if (n === 0 || n === undefined) n = 1

    if (array === undefined || array.length === 0 || n < 0) return res

    if (n > array.length) return array

    for (i = 0; i < n; i++) {
      res.push(array[i])
    }

    return res
  }

  methods.skip = function (array, n) {
    var res = []

    if (arguments.length === 1 && typeof array === 'number') {
      var count = array
      array = _array

      if (array.length < count || count < 0) return this

      for (var i = count, len = array.length; i < len; i++) {
        res.push(array[i])
      }
      _array = res
      return this
    }

    if (n === 0 || n === undefined) n = 1

    if (array === undefined || array.length === 0 || n < 0) return res

    if (n > array.length) return array

    for (i = n, len = array.length; i < len; i++) {
      res.push(array[i])
    }

    return res
  }

  methods.map = function (array, callback) {
    var res = []

    if (!array) return res
    if (!callback) return array

    for (var i = 0, len = array.length; i < len; i++) {
      res.push(callback(array[i]))
    }

    return res
  }

  methods.reduce = function (array, callback, initialValue) {
    if (!array) return []
    if (!callback) return array

    var accumulator = initialValue || 0

    for (var i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i])
    }

    return accumulator
  }

  methods.filter = function (array, callback) {
    var res = []

    if (!array) return []
    if (!callback) return array

    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        res.push(array[i])
      }
    }
    return res
  }

  methods.foreach = function (array, callback) {
    if (!array || !callback) return

    for (var i = 0; i < array.length; i++) {
      callback(array[i])
    }
  }

  // only for integers
  // TODO: separate memo and sum functions
  methods.memoSum = function (array) {
    var cache = {}
    var self = this

    function _getHashCode (str) {
      var hash = 0; var i; var chr
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0
      }
      return hash
    }

    return function () {
      array.sort((a, b) => a - b) // sum of 12345 === 54321 === 51432
      var key = _getHashCode(array.join(''))
      if (cache[key]) {
        return cache[key]
      } else {
        var sum = self.reduce(array, (prev, cur) => prev + cur, 0)
        cache[key] = sum
        return sum
      }
    }
  }

  methods.chain = function (array) {
    _array = array || []
    return this
  }

  methods.value = function () {
    var res = [].concat(_array)
    _array = null
    return res
  }

  return methods
})()

module.exports = { arrayLib }
