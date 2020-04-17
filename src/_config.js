const dotenv = require('dotenv');
dotenv.load();

module.exports = {
    API_URL: process.env.API_URL,
    INPUT_FILE: process.env.INPUT_FILE,
    OUTPUT_FILE: process.env.OUTPUT_FILE,
    DEFAULT_CONTRIBUTOR: process.env.DEFAULT_CONTRIBUTOR
};
