const config = require('./_config')
const { readFile } = require('./_helpers')

const { INPUT_FILE, OUTPUT_FILE } = config

async function batchWrite() {
  const documents = await readFile(INPUT_FILE)
  documents.forEach(processDocument)
  commit()
}

function processDocument(document) {
  // TODO: transform
  // TODO: check against schema
  addToTransaction(document)
}

function addToTransaction(document) {
  // TODO: add to transaction
}

function commit() {
  //  TODO: commit the batch transaction
}



batchWrite()