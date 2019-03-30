import getRate from '../code/getRate'

test('getRate(4)=>★★★★☆', () => {
  expect(getRate(4)).toBe('★★★★☆')
})
test('getRate(4, 8)=>★★★★☆☆☆☆', () => {
  expect(getRate(4, 8)).toBe('★★★★☆☆☆☆')
})
test('getRate(3.4)=>★★★☆☆', () => {
  expect(getRate(3.4)).toBe('★★★☆☆')
})
test('getRate(5, 2)=>error', () => {
  expect(getRate(5, 2)).toBe('error')
})
test('getRate(-2)=>error', () => {
  expect(getRate(-2)).toBe('error')
})
test('getRate(3, 5.5)=>error', () => {
  expect(getRate(3, 5.5)).toBe('error')
})