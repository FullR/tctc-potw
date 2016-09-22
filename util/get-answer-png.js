const getPuzzleMedia = require("./get-puzzle-media");

module.exports = (product, bookPage, index) => getPuzzleMedia(`${product}-p${bookPage}-answers.png`);

//getPuzzleMedia(`${product}-p${bookPage}-answers-${index}.png`);
