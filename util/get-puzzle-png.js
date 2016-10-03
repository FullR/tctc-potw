const getPuzzleMedia = require("./get-puzzle-media");

module.exports = (product, bookPage, index) => getPuzzleMedia(`${product}-p${bookPage}_Page_${index}.png`);
