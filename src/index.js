'use strict'

const axios = require('axios')
const fs = require('fs')
const config = require('./config')
const prettyjson = require('prettyjson')
const customParseDoc = require('./customParseDoc')

const { API_URL, INPUT_FILE, OUTPUT_FILE, DEFAULT_CONTRIBUTOR } = config

let raw = fs.readFileSync(INPUT_FILE)
let array = JSON.parse(raw)
let remainder = []

let stats = {
  counter: 0,
  success: 0,
  error: 0,
}

function inc(name) {
  stats[name]++
  console.log(stats)

  if (stats.counter === array.length) {
    console.log('We are done.')
    writeFile(remainder)
  }
}

function parseDoc(document) {
  // if empty string, delete it because Joi does not allow empty strings. only allows correctly formatted strings
  for (let key in document) {
    if (document[key] === '') delete document[key]
  }
  if (!document.contributor_id) document.contributor_id = DEFAULT_CONTRIBUTOR
  // run the custom parsing logic
  const parsedDocument = customParseDoc(document)
  return parsedDocument
}

function writeFile(array) {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(remainder))
  console.log(`Written to ${OUTPUT_FILE}`)
}

console.log(`Start with ${array.length} documents.`)

for (let i = 0; i < array.length; i++) {
  const preDocument = array[i]
  const document = parseDoc(preDocument)
  axios
    .post(API_URL, document)
    .then((response) => {
      console.log(`Successfully posted for ${document.title}`)
      inc('counter')
      inc('success')
    })
    .catch((e) => {
      console.error(e.response.data)
      console.log(prettyjson.render(document))
      remainder.push(document)
      inc('counter')
      inc('error')
    })
}

const { counter, success, error } = stats
