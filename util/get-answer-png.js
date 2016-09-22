const getPuzzleMedia = require("./get-puzzle-media");
const getAnswerPngFilename = require("./get-answer-png-filename");

module.exports = (product, bookPage, index) => getPuzzleMedia(getAnswerPngFilename(product, bookPage, index));
