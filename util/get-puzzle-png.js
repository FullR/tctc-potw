const getPuzzleMedia = require("./get-puzzle-media");

module.exports = (product, bookPage, index) => getPuzzleMedia(`${product}-p${bookPage}.png`);

//getPuzzleMedia(`${product}-p${bookPage}_Page-${index}.png`);
