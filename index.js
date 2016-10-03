const glob = require("glob-promise");
const {writeFile, createWriteStream} = require("fs-promise");
const mkdirp = require("mkdirp-promise");
const path = require("path");
const log = console.log.bind(console);
const compileTemplate = require("./compile-template");
const http = require("http");
const products = require("./products");
const puzzles = require("./puzzles");

const puzzlesWithProducts = puzzles.map((puzzle) => Object.assign({}, puzzle, products[puzzle.product]));

Promise.all(["A", "B", "C", "D"].map((c) => mkdirp(`emails/${c}`))).then(() =>
  Promise.all(puzzlesWithProducts.map((puzzle) => {
    const emailHTML = compileTemplate(puzzle);

    return writeFile(`emails/${puzzle.coupon1[0]}/${puzzle.coupon1.slice(1)}.html`, emailHTML);
  }))
)
