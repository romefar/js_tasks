var arrayLib = (function () {
  'use strict'

  var methods = {}
  var _array = null

  /**
   * Creates a slice of `array` with `n` elements taken from the beginning.
   * If `array` is empty or falsey, `[]` is returned.
   *
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @returns {Array} Returns the slice of `array`.
   */
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

    if (n === undefined) n = 1

    if (!(array && array.length) || (!n && n !== undefined) || n < 0) return res

    if (n > array.length) return array

    for (i = 0; i < n; i++) {
      res.push(array[i])
    }

    return res
  }

  /**
   * Creates a subarray of `array` with `n` elements skipped from the beginning.
   * If `array` is empty or falsey, `[]` is returned.
   *
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to skip.
   * @returns {Array} Returns the slice of `array`.
   */
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

    if (n === undefined) n = 1

    if (!(array && array.length) || (!n && n !== undefined) || n < 0) return res

    if (n > array.length) return array

    for (i = n, len = array.length; i < len; i++) {
      res.push(array[i])
    }

    return res
  }

  /**
   * Creates an array of values by running each element in `callback`.
   * If `array` is empty or falsey, `[]` is returned.
   * if 'callback' is not a function, `array` is returned.
   *
   * @param {Array} array The array to query.
   * @param {Function} callback The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  methods.map = function (array, callback) {
    var res = []

    if (!(array && array.length)) return res
    if (!callback || !(typeof callback === 'function')) return array

    for (var i = 0, len = array.length; i < len; i++) {
      res.push(callback(array[i]))
    }

    return res
  }

  /**
   * Reduces `array` to a value which is accumulated result
   * of running each element in 'callback'.
   * If `array` is empty or falsey, `undefined` is returned.
   * if 'callback' is not a function, first element of the array is returned.
   *
   * @param {Array} array The array to iterate.
   * @param {Function} callback The function invoked per iteration.
   * @param {*} [initialValue] The initial value.
   * @returns {*} Returns the accumulated value.
   */
  methods.reduce = function (array, callback, initialValue) {
    if (!(array && array.length)) return undefined
    if (!callback || !(typeof callback === 'function')) return array[0]

    var accumulator = initialValue || 0

    for (var i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i])
    }

    return accumulator
  }

  /**
   * Iterates over elements of `array`, returning an array of all elements
   * `callback` returns truthy for.
   * If `array` is empty or falsey, `[]` is returned.
   * if 'callback' is not a function, `array` is returned.
   *
   * @param {Array} array The array to iterate.
   * @param {Function} callback The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  methods.filter = function (array, callback) {
    var res = []

    if (!(array && array.length)) return res
    if (!callback || !(typeof callback === 'function')) return array

    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        res.push(array[i])
      }
    }
    return res
  }

  /**
   * Iterates over elements of `array` and invokes 'callback' for each element.
   * If `array` is empty or falsey, `undefined` is returned.
   * if 'callback' is not a function, `array` is returned.
   *
   * @param {Array} array The array to iterate.
   * @param {Function} callback The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  methods.foreach = function (array, callback) {
    if (!(array && array.length)) return undefined
    if (!callback || !(typeof callback === 'function')) return array

    for (var i = 0; i < array.length; i++) {
      callback(array[i])
    }
    return array
  }

  /**
   * Iterates over elements of `array` and sum them.
   *
   * @param {Array} array The array to iterate.
   * @returns {Function} A memo version of a sum function.
  */
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
      var arr = [].concat(array)
      arr.sort((a, b) => a - b) // sum of 12345 === 54321 === 51432
      var key = _getHashCode(arr.join(''))
      if (cache[key]) {
        return cache[key]
      } else {
        var sum = self.reduce(arr, (prev, cur) => prev + cur, 0)
        cache[key] = sum
        return sum
      }
    }
  }

  /**
   * Creates a wrapper that wraps value with explicit method chain sequences enabled.
   * The result of such sequences must be unwrapped with `value` method.
   *
   * @param {Array} array The array to wrap.
   * @returns {Object} Returns the new wrapper instance.
   */
  methods.chain = function (array) {
    _array = array || []
    return this
  }

  /**
   * Executes the chain sequence to resolve the unwrapped value.
   *
   * @returns {*} Returns the resolved unwrapped value.
   */
  methods.value = function () {
    var res = [].concat(_array)
    _array = null
    return res
  }

  return methods
})()

module.exports = { arrayLib }
