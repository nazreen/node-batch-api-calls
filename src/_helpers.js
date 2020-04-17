const path = require('path')
const fs = require('fs')
const neatCsv = require('neat-csv');

function appendJsonFileName(fileName, textToAppend) {
  const array = fileName.split(/([.])/g)
  array.splice(array.length - 2, 0, textToAppend)
  const result = array.join('')
  return result
}

function getFileExtension(input) {
  return path.extname(input)
}

async function readFile(inputPath) {
  const fileExtension = getFileExtension(inputPath)
  let raw = fs.readFileSync(inputPath)
  switch (fileExtension) {
    case '.csv':
      return await neatCsv(raw)
    default:
      return raw
  }
}

exports.appendJsonFileName = appendJsonFileName
exports.getFileExtension = getFileExtension
exports.readFile = readFile
