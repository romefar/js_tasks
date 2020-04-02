const arrayLib = (function () {
  'use strict'

  let _array = null

  class ArrayLib {
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

      if (n === 0) n = 1

      if (array.length === 0 || n < 0) return res

      if (n > array.length) return array

      res.push(...array.slice(0, n))

      return res
    }

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

      if (n === 0) n = 1

      if (array.length === 0 || n < 0) return res

      if (n > array.length) return array

      res.push(...array.slice(n))

      return res
    }

    static map (array = [], callback) {
      const res = []

      if (!callback) return array

      for (let i = 0, len = array.length; i < len; i++) {
        res.push(callback(array[i]))
      }

      return res
    }

    static reduce (array = [], callback, initialValue = 0) {
      if (!callback) return array

      let accumulator = initialValue

      for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
      }

      return accumulator
    }

    static filter (array = [], callback) {
      const res = []

      if (!callback) return array

      for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
          res.push(array[i])
        }
      }
      return res
    }

    static foreach (array = [], callback) {
      if (!callback) return

      for (let i = 0; i < array.length; i++) {
        callback(array[i])
      }
    }

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
        array.sort((a, b) => a - b) // sum of 12345 === 54321 === 51432
        const key = _getHashCode(array.join(''))
        if (cache[key]) return cache[key]
        cache[key] = this.reduce(array, (prev, cur) => prev + cur, 0)
        return cache[key]
      }
    }

    static chain (array = []) {
      _array = array
      return this
    }

    static value () {
      const res = [..._array]
      _array = null
      return res
    }
  }

  return ArrayLib
})()

module.exports = { arrayLib }
