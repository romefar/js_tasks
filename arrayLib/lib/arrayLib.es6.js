const arrayLib = (function () {
  'use strict'

  let _array = null

  class ArrayLib {
    /**
   * Creates a slice of `array` with `n` elements taken from the beginning.
   * If `array` is empty or falsey, `[]` is returned.
   *
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @returns {Array} Returns the slice of `array`.
   */
    static take (array = [], n = 1) {
      const res = []

      if (_array) {
        const count = array
        array = _array

        if (array.length < count || count < 0) return this

        res.push(...array.slice(0, count))

        _array = res
        return this
      }

      if (!(array && array.length) || !n || n < 0) return res

      if (n > array.length) return array

      res.push(...array.slice(0, n))

      return res
    }

    /**
   * Creates a subarray of `array` with `n` elements skipped from the beginning.
   * If `array` is empty or falsey, `[]` is returned.
   *
   * @param {Array} [array =[]] The array to query.
   * @param {number} [n=1] The number of elements to skip.
   * @returns {Array} Returns the slice of `array`.
   */
    static skip (array = [], n = 1) {
      const res = []

      if (_array) {
        const count = array
        array = _array

        if (array.length < count || count < 0) return this

        res.push(...array.slice(count))

        _array = res
        return this
      }

      if (!(array && array.length) || !n || n < 0) return res

      if (n > array.length) return array

      res.push(...array.slice(n))

      return res
    }

    /**
    * Creates an array of values by running each element in `callback`.
    * If `array` is empty or falsey, `[]` is returned.
    * if 'callback' is not a function, `array` is returned.
    *
    * @param {Array} [array =[]] The array to query.
    * @param {Function} callback The function invoked per iteration.
    * @returns {Array} Returns the new mapped array.
    */
    static map (array = [], callback) {
      const res = []

      if (!(array && array.length)) return res
      if (!callback || typeof callback !== 'function') return array

      for (let i = 0, len = array.length; i < len; i++) {
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
   * @param {Array} [array =[]] The array to iterate.
   * @param {Function} callback The function invoked per iteration.
   * @param {*} [initialValue] The initial value.
   * @returns {*} Returns the accumulated value.
   */
    static reduce (array = [], callback, initialValue = 0) {
      if (!(array && array.length)) return []
      if (!callback || typeof callback !== 'function') return array

      let accumulator = initialValue

      for (let i = 0; i < array.length; i++) {
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
   * @param {Array} [array =[]] The array to iterate.
   * @param {Function} callback The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
    static filter (array = [], callback) {
      const res = []

      if (!(array && array.length)) return res
      if (!callback || typeof callback !== 'function') return array

      for (let i = 0; i < array.length; i++) {
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
   * @param {Array} [array =[]] The array to iterate.
   * @param {Function} callback The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
    static foreach (array = [], callback) {
      if (!(array && array.length)) return undefined
      if (!callback || !(typeof callback === 'function')) return array

      for (let i = 0; i < array.length; i++) {
        callback(array[i])
      }
      return array
    }

    /**
   * Iterates over elements of `array` and sum them.
   *
   * @param {Array} [array =[]] The array to iterate.
   * @returns {Function} A memo version of a sum function.
  */
    static memoSum (array = []) {
      const cache = {}
      const _getHashCode = (str) => {
        let hash = 0
        let chr
        for (let i = 0; i < str.length; i++) {
          chr = str.charCodeAt(i)
          hash = ((hash << 5) - hash) + chr
          hash |= 0
        }
        return hash
      }

      return () => {
        const arr = [...array]
        arr.sort((a, b) => a - b) // sum of 12345 === 54321 === 51432
        const key = _getHashCode(arr.join(''))
        if (cache[key]) return cache[key]
        cache[key] = this.reduce(arr, (prev, cur) => prev + cur, 0)
        return cache[key]
      }
    }

    /**
   * Creates a wrapper that wraps value with explicit method chain sequences enabled.
   * The result of such sequences must be unwrapped with `value` method.
   *
   * @param {Array} array The array to wrap.
   * @returns {Object} Returns the new wrapper instance.
   */
    static chain (array) {
      _array = array || []
      return this
    }

    /**
   * Executes the chain sequence to resolve the unwrapped value.
   *
   * @returns {*} Returns the resolved unwrapped value.
   */
    static value () {
      const res = [..._array]
      _array = null
      return res
    }
  }

  return ArrayLib
})()

module.exports = { arrayLib }
