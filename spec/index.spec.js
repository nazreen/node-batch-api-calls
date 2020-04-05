const { appendJsonFileName } = require('../src/helpers')

it('appendJsonFileName', () => {
  const input = 'raw.json'
  const expected = 'raw-01.json'
  const result = appendJsonFileName(input, '-01')
  expect(result).toBe(expected)
})
