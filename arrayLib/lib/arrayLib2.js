var arrayLib2 = (function () {
  'use strict'

  var methods = {}

  /**
   * Sorts an array in ascending order with `bubble` algorithm.
   * @param {Array} array The array to sort.
   * @returns {Array} Returns the sorted `array`.
   */
  function _bubbleSort (array) {
    var arr = [].concat(array)
    var len = arr.length
    for (var i = 0; i < len - 2; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          _swap(j)
        }
      }
    }

    function _swap (j) {
      arr[j] = arr[j] + arr[j + 1]
      arr[j + 1] = arr[j] - arr[j + 1]
      arr[j] = arr[j] - arr[j + 1]
    }
    return arr
  }

  /**
   * Sorts an array in ascending order with `insertion` algorithm.
   * @param {Array} array The array to sort.
   * @returns {Array} Returns the sorted `array`.
   */
  function _insertionSort (array) {
    var arr = [].concat(array)
    for (var i = 1; i < arr.length; i++) {
      var x = arr[i]
      var j = i
      while (j >= 1 && arr[j - 1] > x) {
        arr[j] = arr[j - 1]
        j = j - 1
      }
      arr[j] = x
    }
    return arr
  }

  /**
   * Creates an array of elements, sorted in ascending order.
   * If `array` is empty or falsey, `[]` is returned.
   *
   * @param {Array} array The array to sort.
   * @param {String} [name='bubbles'] A name of the sorting algorithm.
   * @returns {Array} Returns the sorted `array`.
   */
  methods.sort = function (arr, name) {
    if (!(arr && arr.length)) return []
    if (!name) name = 'bubble'

    var res

    switch (name.toLowerCase()) {
      case 'bubble':
        res = _bubbleSort(arr)
        break
      case 'insertion':
        res = _insertionSort(arr)
        break
      default:
        res = _bubbleSort(arr)
    }
    return res
  }

  /**
   * Computes the minimum value of `arr`.
   * If `array` is empty or falsey, `undefined` is returned.
   *
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value of an array.
   */
  methods.minimum = function (array) {
    if (!(array && array.length)) return undefined

    var len = array.length

    if (len === 1) return array[0]

    var min = array[0]
    for (var i = 0; i < len; i++) {
      if (array[i] < min) min = array[i]
    }
    return min
  }

  /**
   * Computes the maximum value of `array`.
   * If `array` is empty or falsey, `undefined` is returned.
   *
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value of an array.
   */
  methods.maximum = function (array) {
    if (!(array && array.length)) return undefined
    var len = array.length

    if (len === 1) return array[0]

    var max = array[0]
    for (var i = 0; i < len; i++) {
      if (array[i] > max) max = array[i]
    }
    return max
  }

  /**
   * Computes the average value of `array`.
   * If `array` is empty or falsey, `undefined` is returned.
   *
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the average value of an array elements.
   */
  methods.medium = function (array) {
    if (!(array && array.length)) return undefined

    var len = array.length

    if (len === 1) return array[0]

    var avg = array.reduce(function (prev, cur) {
      return prev + cur
    }, 0)
    return avg / len
  }

  /**
   * Computes the maximum subsum of the given array.
   *
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum subsum of an array.
   */
  methods.getMaxSubSum = function (arr) {
    if (!(arr && arr.length)) return []

    var len = arr.length

    if (len === 1) return arr[0]

    var sum = 0; var subSum = 0

    arr.forEach(function (item) {
      subSum += item
      sum = Math.max(sum, subSum)
      subSum = subSum < 0 ? 0 : subSum
    })

    return sum
  }

  return methods
})()

module.exports = { arrayLib2 }
