const path = require('path')
const fs = require('fs')
const process = require('process')
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

function askForConfirmation (additionalText) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`${additionalText}. Are you sure ? [y/n]` , function(answer) {
    // TODO: Log the answer in a database
    switch(answer.toLowerCase()) {
      case 'y':
        break
      default:
        process.exit()
    }

    rl.close();
  });
}

exports.appendJsonFileName = appendJsonFileName
exports.getFileExtension = getFileExtension
exports.readFile = readFile
exports.askForConfirmation = askForConfirmation
