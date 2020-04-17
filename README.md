currently the operation is set as `post()` only

# Todo

- make OUTPUT_FILE have a static name of `remainder.json` to make the purpose more clear.

# Setup

1. create a `.env` with the following variables:

```
    API_URL=
    INPUT_FILE=data/raw.json
    OUTPUT_FILE=data/result.json
    DEFAULT_CONTRIBUTOR=
```

2. to add custom document parsing, modify the `src/customParseDoc.js` file with the required transformations

3. run `npm i`

# Running the operation

1. Import input JSON to `data/INPUT_FILE`.
2. Run the script using `node src/index.js`

# The resulting output

- If there are any errors, the remainder documents are in `data/OUTPUT_FILE`.
- To prevent accidental double writes, the INPUT_FILE will be auto-appended if there is 1 or more successful operations
- After identifying errors, prepare to run the script again. This time, take the previous `OUTPUT_FILE` and rename it into `INPUT_FILE`.
