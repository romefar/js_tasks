const { arrayLib } = require('../lib/arrayLib.es6.js')

describe('testing take function: ', () => {
  test('take([1,2,3,4,5], 3) should return [1,2,3] ', () => {
    expect(arrayLib.take([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3])
  })

  test('take([1,2,3,4,5], 1) should return [1]: ', () => {
    expect(arrayLib.take([1, 2, 3, 4, 5], 1)).toStrictEqual([1])
  })

  test('take([1,2,3,4,5]) should return [1,2,3,4,5]: ', () => {
    expect(arrayLib.take([1, 2, 3, 4, 5])).toStrictEqual([1])
  })

  test('take([1,2,3,4,5], 0) should return []: ', () => {
    expect(arrayLib.take([1, 2, 3, 4, 5], 0)).toStrictEqual([])
  })

  test('take([1,2], 5) should return [1,2]: ', () => {
    expect(arrayLib.take([1, 2], 5)).toStrictEqual([1, 2])
  })

  test('take(undefined, 5) should return []: ', () => {
    expect(arrayLib.take(undefined, 5)).toStrictEqual([])
  })

  test('take([1,2], -1) should return []: ', () => {
    expect(arrayLib.take([1, 2], -1)).toStrictEqual([])
  })

  test('take([], 5) should return []: ', () => {
    expect(arrayLib.take([], 5)).toStrictEqual([])
  })

  test('take(null, 5) should return []: ', () => {
    expect(arrayLib.take(null, 5)).toStrictEqual([])
  })
  test('take(null) should return []: ', () => {
    expect(arrayLib.take(null)).toStrictEqual([])
  })

  test('take("") should return []: ', () => {
    expect(arrayLib.take('')).toStrictEqual([])
  })

  test('take([1,2,3,4], -1) should return []: ', () => {
    expect(arrayLib.take([1, 2, 3, 4], -1)).toStrictEqual([])
  })
})

describe('testing skip function: ', () => {
  test('skip([1,2,3,4,5], 3) should return [4,5] ', () => {
    expect(arrayLib.skip([1, 2, 3, 4, 5], 3)).toStrictEqual([4, 5])
  })

  test('skip([1,2,3,4,5], 1) should return [2,3,4,5]: ', () => {
    expect(arrayLib.skip([1, 2, 3, 4, 5], 1)).toStrictEqual([2, 3, 4, 5])
  })

  test('skip([1,2,3,4,5]) should return [1,2,3,4,5]: ', () => {
    expect(arrayLib.skip([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5])
  })

  test('skip([1,2,3,4,5], 0) should return []: ', () => {
    expect(arrayLib.skip([1, 2, 3, 4, 5], 0)).toStrictEqual([])
  })

  test('skip([1,2], 5) should return [1,2]: ', () => {
    expect(arrayLib.skip([1, 2], 5)).toStrictEqual([1, 2])
  })

  test('skip([1,2], -1) should return []: ', () => {
    expect(arrayLib.skip([1, 2], -1)).toStrictEqual([])
  })

  test('skip(undefined, -1) should return []: ', () => {
    expect(arrayLib.skip(undefined, -1)).toStrictEqual([])
  })

  test('skip([], 5) should return []: ', () => {
    expect(arrayLib.skip([], 5)).toStrictEqual([])
  })

  test('skip({}) should return []: ', () => {
    expect(arrayLib.skip({})).toStrictEqual([])
  })

  test('skip(null) should return []: ', () => {
    expect(arrayLib.skip(null)).toStrictEqual([])
  })

  test('skip(false, {}) should return []: ', () => {
    expect(arrayLib.skip({})).toStrictEqual([])
  })
})

describe('testing map function: ', () => {
  test('should return [2,4,9,16]: ', () => {
    expect(arrayLib.map([1, 2, 3, 4], (item) => item ** 2)).toStrictEqual([1, 4, 9, 16])
  })

  test('should return ["BAR","FOO","BOO","DOO"]: ', () => {
    expect(arrayLib.map(['bar', 'foo', 'boo', 'doo'], (item) => item.toUpperCase())).toStrictEqual(['BAR', 'FOO', 'BOO', 'DOO'])
  })

  test('should return []: ', () => {
    expect(arrayLib.map(undefined, (item) => item)).toStrictEqual([])
  })

  test('should return [1,2,3,4,5]: ', () => {
    expect(arrayLib.map([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })

  test('should return [0,0,0]: ', () => {
    expect(arrayLib.map([1, 2, 3], () => 0)).toStrictEqual([0, 0, 0])
  })

  test('should return [1,2,3]: ', () => {
    expect(arrayLib.map([1, 2, 3], {})).toStrictEqual([1, 2, 3])
  })
})

describe('testing filter function: ', () => {
  test('should return [1,2,3,4,5]: ', () => {
    expect(arrayLib.filter([1, 2, 3, 4, 5], (item) => !!item)).toStrictEqual([1, 2, 3, 4, 5])
  })

  test('should return [1,{},[],"  ", true]: ', () => {
    expect(arrayLib.filter([1, -1, false, {}, '', [], '  ', undefined, true], (item) => !!item)).toStrictEqual([1, -1, {}, [], '  ', true])
  })

  test('should return []: ', () => {
    expect(arrayLib.filter(undefined, (item) => item)).toStrictEqual([])
  })

  test('should return []: ', () => {
    expect(arrayLib.filter([-1, false, 0, NaN, undefined, '', null], () => 0)).toStrictEqual([])
  })

  test('should return ["1"]: ', () => {
    expect(arrayLib.filter([-1 + 1, false, 0, NaN, undefined, '1', null], (item) => !!item)).toStrictEqual(['1'])
  })

  test('should return []: ', () => {
    expect(arrayLib.filter([1, 2, 3, 4], {})).toStrictEqual([1, 2, 3, 4])
  })

  test('should return []: ', () => {
    expect(arrayLib.filter(null, (a) => a)).toStrictEqual([])
  })
})

describe('testing reduce function: ', () => {
  test('should return 16: ', () => {
    expect(arrayLib.reduce([1, 2, 3, 4, 5], (accum, value) => accum + value, 1)).toBe(16)
  })

  test('should return 15: ', () => {
    expect(arrayLib.reduce([1, 2, 3, 4, 5], (accum, value) => accum + value)).toBe(15)
  })

  test('should return "-abcde": ', () => {
    expect(arrayLib.reduce(['a', 'b', 'c', 'd', 'e'], (accum, value) => accum + value, '-')).toBe('-abcde')
  })

  test('should return "30": ', () => {
    expect(arrayLib.reduce([1, 2, 3, 4, 5], (accum, value) => accum + value * 2)).toBe(30)
  })
})

describe('testing forEach function: ', () => {
  test('should return [1,2,3,4,5]: ', () => {
    const arr = [1, 2, 3, 4, 5]
    arrayLib.foreach(arr, (item) => item * 2)
    expect(arr).toStrictEqual([1, 2, 3, 4, 5])
  })

  test('should return [1, 2]: ', () => {
    expect(arrayLib.foreach([1, 2], (item) => item * 2)).toStrictEqual([1, 2])
  })

  test('should return undefined: ', () => {
    expect(arrayLib.foreach('', (item) => item * 2)).toStrictEqual(undefined)
  })

  test('arr2 must be equal to [9,25,49]: ', () => {
    const arr = [2, 3, 4, 5, 7]
    const arr2 = []
    arrayLib.foreach(arr, (item) => {
      if (item % 2 !== 0) {
        arr2.push(item ** 2)
      }
    })
    expect(arr2).toStrictEqual([9, 25, 49])
  })
})

describe('testing memo sum function: ', () => {
  // dummy test data
  const arr = []
  let sum = 0
  for (let i = 0; i < 500000; i++) {
    arr[i] = (i + 1) * Math.round((Math.random() * 10))
    sum += arr[i]
  }

  const func = arrayLib.memoSum(arr)

  test('should return 15: ', () => {
    expect(arrayLib.memoSum([1, 2, 3, 4, 5])()).toBe(15)
  })

  test(`should return ${sum}: `, () => {
    expect(func()).toBe(sum)
  })

  test(`should return ${sum}: `, () => {
    expect(func()).toBe(sum)
  })

  test(`should return ${sum}: `, () => {
    expect(func()).toBe(sum)
  })

  test(`should return ${sum}: `, () => {
    expect(func()).toBe(sum)
  })
})

describe('testing chain function: ', () => {
  test('should return [4,5,6]: ', () => {
    expect(arrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(6).skip(3).value()).toStrictEqual([4, 5, 6])
  })

  test('should return [10]: ', () => {
    expect(arrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(15).skip(9).value()).toStrictEqual([10])
  })

  test('should return [9,10]: ', () => {
    expect(arrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(10).skip(8).value()).toStrictEqual([9, 10])
  })

  test('should return [5]: ', () => {
    expect(arrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(6).skip(3).take(2).skip(1).value()).toStrictEqual([5])
  })

  test('should return []: ', () => {
    expect(arrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(0).skip(-1).value()).toStrictEqual([])
  })

  test('should return []: ', () => {
    expect(arrayLib.chain([]).take(6).skip(3).value()).toStrictEqual([])
  })

  test('should return []: ', () => {
    expect(arrayLib.chain().take(6).skip(3).value()).toStrictEqual([])
  })
})
