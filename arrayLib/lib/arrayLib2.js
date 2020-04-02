var arrayLib2 = (function () {
  'use strict'

  var methods = {}

  function _bubbleSort (arr) {
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
  }

  function _insertionSort (arr) {
    for (var i = 1; i < arr.length; i++) {
      var x = arr[i]
      var j = i
      while (j >= 1 && arr[j - 1] > x) {
        arr[j] = arr[j - 1]
        j = j - 1
      }
      arr[j] = x
    }
  }

  methods.sort = function (arr, name) {
    if (arr === undefined || arr.length === 0) return []
    if (name === undefined) return arr

    switch (name.toLowerCase()) {
      case 'bubble':
        _bubbleSort(arr)
        break
      case 'insertion':
        _insertionSort(arr)
        break
      default:
        return arr
    }
    return arr
  }

  methods.minimum = function (arr) {
    if (arr === undefined || arr.length === 0) return []

    var len = arr.length

    if (len === 1) return arr[0]

    var min = arr[0]
    for (var i = 0; i < len; i++) {
      if (arr[i] < min) min = arr[i]
    }
    return min
  }

  methods.maximum = function (arr) {
    if (arr === undefined || arr.length === 0) return []

    var len = arr.length

    if (len === 1) return arr[0]

    var max = arr[0]
    for (var i = 0; i < len; i++) {
      if (arr[i] > max) max = arr[i]
    }
    return max
  }

  methods.medium = function (arr) {
    if (arr === undefined || arr.length === 0) return []

    var len = arr.length

    if (len === 1) return arr[0]

    var avg = arr.reduce(function (prev, cur) {
      return prev + cur
    }, 0)
    return avg / len
  }

  methods.getMaxSubSum = function (arr) {
    if (arr === undefined || arr.length === 0) return []

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
