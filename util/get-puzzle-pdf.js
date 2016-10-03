const getPuzzleMedia = require("./get-puzzle-media");

module.exports = (product, bookPage) => getPuzzleMedia(`${product}-p${bookPage}.pdf`);
