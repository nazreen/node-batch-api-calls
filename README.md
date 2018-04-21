# Instructions
1. Import input JSON to `data/raw.json`.
2. Run the script using `node src/index.js`
3. If there are any errors, the remainder documents are in `data/result.json`.
4. After identifying errors, prepare to run the script again. This time, take the previous `result.json` and rename it into `raw.json`. For backup, rename the previous `raw.json` into `raw.0.json` in case you need to restart the whole process again.
5. Repeat step 4 until all documents are processed.