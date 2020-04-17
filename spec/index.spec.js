const { appendJsonFileName, getFileExtension } = require('../src/_helpers')

it('appendJsonFileName', () => {
  const input = 'raw.json'
  const expected = 'raw-01.json'
  const result = appendJsonFileName(input, '-01')
  expect(result).toBe(expected)
})

describe('getFileExtension', () => {
  it('single level json', () => {
    const input = 'raw.json'
    const expected = '.json'
    const result = getFileExtension(input)
    expect(result).toBe(expected)
  })
  it('multi level csv', () => {
    const input = 'input/raw.csv'
    const expected = '.csv'
    const result = getFileExtension(input)
    expect(result).toBe(expected)
  })
})
