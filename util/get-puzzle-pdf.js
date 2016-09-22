const getPuzzleMedia = require("./get-puzzle-media");
const getPuzzlePdfFilename = require("./get-puzzle-pdf-filename");

module.exports = (product, bookPage) => getPuzzleMedia(getPuzzlePdfFilename(product, bookPage));
