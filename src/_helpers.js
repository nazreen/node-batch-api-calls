const path = require('path')

function appendJsonFileName(fileName, textToAppend) {
  const array = fileName.split(/([.])/g)
  array.splice(array.length - 2, 0, textToAppend)
  const result = array.join('')
  return result
}

function getFileExtension(input) {
  return path.extname(input)
}

exports.appendJsonFileName = appendJsonFileName
exports.getFileExtension = getFileExtension
