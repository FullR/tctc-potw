const {prettyPrint} = require("html");
const template = require("./compile-template");
const puzzle = require("./puzzles/A1/puzzle");

const formatOptions = {
  indent_size: 2,
  indent_char: " ",
  unformatted: ["a", "sub", "sup", "b", "i", "u", "font", "strong"]
};

require("fs").writeFileSync("components.html", template(puzzle));
