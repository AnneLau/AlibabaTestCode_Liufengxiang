import compare from '../code/compare'

test('compare(c,d)=>true', () => {
  const c = [1]
  const d = [1]
  expect(compare(c,d)).toBe(true)
})
test('compare(e,f)=>true', () => {
  const e = [1, 2, 3]
  const f = [3, 2, 1]
  expect(compare(e,f)).toBe(true)
})
test('compare(g,h)=>true', () => {
  const g = { name: '1', password: '123456' }
  const h = { name: '1', password: '123456' }
  expect(compare(g,h)).toBe(true)
})
test('compare(i,h)=>false', () => {
  const h = { name: '1', password: '123456' }
  const i = { name: 1, password: '123456' }
  expect(compare(i,h)).toBe(false)
})
test('compare(j,k)=>true', () => {
  const j = { name: [{ firstname: 'x', lastname: 'xx' }], password: '123456' }
  const k = { name: [{ firstname: 'x', lastname: 'xx' }], password: '123456' }
  expect(compare(j,k)).toBe(true)
})
