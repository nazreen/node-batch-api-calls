function appendJsonFileName(fileName, textToAppend) {
  const array = fileName.split(/([.])/g)
  array.splice(array.length - 2, 0, textToAppend)
  const result = array.join('')
  return result
}

exports.appendJsonFileName = appendJsonFileName
