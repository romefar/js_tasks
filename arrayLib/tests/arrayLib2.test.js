const { arrayLib2 } = require('../lib/arrayLib2.js')

describe('testing sortings functions: ', () => {
  const arr = [4, 7, 1, 0, 3, 11, 5, 12]
  const sorted = [...arr].sort((a, b) => a - b)

  test(`sort([${arr.join(',')}], "insertion") should return [${sorted.join(',')}]: `, () => {
    expect(arrayLib2.sort([...arr], 'insertion')).toStrictEqual(sorted)
  })

  test(`sort([${arr.join(',')}], "bubble") should return [${sorted.join(',')}]: `, () => {
    expect(arrayLib2.sort([...arr], 'bubble')).toStrictEqual(sorted)
  })

  test(`sort([${arr.join(',')}], "asd") should return [${sorted.join(',')}]: `, () => {
    expect(arrayLib2.sort([...arr], 'asd')).toStrictEqual(sorted)
  })

  test(`sort([${arr.join(',')}]) should return [${sorted.join(',')}]: `, () => {
    expect(arrayLib2.sort([...arr])).toStrictEqual(sorted)
  })

  test('sort() should return []: ', () => {
    expect(arrayLib2.sort()).toStrictEqual([])
  })

  test('sort({}) should return []: ', () => {
    expect(arrayLib2.sort()).toStrictEqual([])
  })

  test('sort(null, "") should return []: ', () => {
    expect(arrayLib2.sort()).toStrictEqual([])
  })

  test('sort(false) should return []: ', () => {
    expect(arrayLib2.sort()).toStrictEqual([])
  })

  test('sort(undefined, 2) should return []: ', () => {
    expect(arrayLib2.sort(undefined, 2)).toStrictEqual([])
  })

  test(`sort([${arr.join(',')}] should return [${sorted.join(',')}]:: `, () => {
    expect(arrayLib2.sort()).toStrictEqual([])
  })

  test('sort([], bubble) should return []: ', () => {
    expect(arrayLib2.sort([], 'bubble')).toStrictEqual([])
  })
})

describe('testing minimum function: ', () => {
  const arr = [4, 7, 1, 0, 3, 11, 5, 12]
  const shortArr = [1, 5, -1]
  const oneElemArr = [2]

  test(`minumum([${arr.join(',')}]) should return 0: `, () => {
    expect(arrayLib2.minimum([...arr])).toBe(0)
  })

  test(`minumum([${shortArr.join(',')}]) should return -1: `, () => {
    expect(arrayLib2.minimum([...shortArr])).toBe(-1)
  })

  test(`minumum([${oneElemArr.join(',')}]) should return 2: `, () => {
    expect(arrayLib2.minimum([...oneElemArr])).toBe(2)
  })

  test('minumum([]) should return undefined: ', () => {
    expect(arrayLib2.minimum([])).toStrictEqual(undefined)
  })

  test('minumum() should return undefined: ', () => {
    expect(arrayLib2.minimum()).toStrictEqual(undefined)
  })

  test('minumum(null) should return undefined: ', () => {
    expect(arrayLib2.minimum()).toStrictEqual(undefined)
  })

  test('minumum("") should return undefined: ', () => {
    expect(arrayLib2.minimum()).toStrictEqual(undefined)
  })
})

describe('testing maximum function: ', () => {
  const arr = [4, 7, 1, 0, 3, 11, 5, 12]
  const shortArr = [1, 5, -1]
  const oneElemArr = [2]

  test(`maximum([${arr.join(',')}]) should return 12: `, () => {
    expect(arrayLib2.maximum([...arr])).toBe(12)
  })

  test(`maximum([${shortArr.join(',')}]) should return 5: `, () => {
    expect(arrayLib2.maximum([...shortArr])).toBe(5)
  })

  test(`maximum([${oneElemArr.join(',')}]) should return 2: `, () => {
    expect(arrayLib2.maximum([...oneElemArr])).toBe(2)
  })

  test('maximum([]) should return undefined: ', () => {
    expect(arrayLib2.maximum([])).toStrictEqual(undefined)
  })

  test('maximum() should return undefined: ', () => {
    expect(arrayLib2.maximum()).toStrictEqual(undefined)
  })

  test('maximum("") should return undefined: ', () => {
    expect(arrayLib2.maximum()).toStrictEqual(undefined)
  })

  test('maximum(null) should return undefined: ', () => {
    expect(arrayLib2.maximum()).toStrictEqual(undefined)
  })
})

describe('testing medium function: ', () => {
  const arr = [4, 7, 1, 0, 3, 11, 5, 12]
  const shortArr = [1, 5, -1]
  const oneElemArr = [2]

  const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0) / arr.length

  test(`medium([${arr.join(',')}]) should return ${sum(arr)}: `, () => {
    expect(arrayLib2.medium([...arr])).toBe(sum(arr))
  })

  test(`medium([${shortArr.join(',')}]) should return ${sum(shortArr)}: `, () => {
    expect(arrayLib2.medium([...shortArr])).toBe(sum(shortArr))
  })

  test(`medium([${oneElemArr.join(',')}]) should return ${sum(oneElemArr)}: `, () => {
    expect(arrayLib2.medium([...oneElemArr])).toBe(sum(oneElemArr))
  })

  test('medium([]) should return undefined: ', () => {
    expect(arrayLib2.medium([])).toStrictEqual(undefined)
  })

  test('medium() should return undefined: ', () => {
    expect(arrayLib2.medium()).toStrictEqual(undefined)
  })

  test('medium(null) should return undefined: ', () => {
    expect(arrayLib2.medium()).toStrictEqual(undefined)
  })
})

describe('testing getMaxSubSum function: ', () => {
  const map = new Map()
  map.set([-1, 2, 3, -9], 5)
  map.set([2, -1, 2, 3, -9], 6)
  map.set([-1, 2, 3, -9, 11], 11)
  map.set([-2, -1, 1, 2], 3)
  map.set([100, -9, 2, -3, 5], 100)
  map.set([1, 2, 3], 6)
  map.set([-1, -2, -3], 0)

  for (const [key, value] of map.entries()) {
    test(`getMaxSubSum([${key.join(',')}]) should return ${value}: `, () => {
      expect(arrayLib2.getMaxSubSum([...key])).toBe(value)
    })
  }

  test('getMaxSubSum([4]) should return [4]: ', () => {
    expect(arrayLib2.getMaxSubSum([4])).toStrictEqual(4)
  })

  test('getMaxSubSum([]) should return []: ', () => {
    expect(arrayLib2.getMaxSubSum([])).toStrictEqual([])
  })

  test('getMaxSubSum() should return []: ', () => {
    expect(arrayLib2.getMaxSubSum()).toStrictEqual([])
  })
})
