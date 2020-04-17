const config = require('./_config')
const { readFile } = require('./_helpers')

const { INPUT_FILE, OUTPUT_FILE } = config

async function batchWrite() {
  const documents = await readFile(INPUT_FILE)
}

batchWrite()