const co = require("co");
const glob = require("glob-promise");
const {readFileSync, writeFileSync} = require("fs");

const puzzles = readFileSync("puzzles.csv", "utf8")
  .split("\n") // split into rows
  .slice(1) // remove headers
  .map(parsePuzzleRow) // parse individual rows into puzzle objects
  .filter((v) => !!v); // filter blank lines

function unicodeEscape(str) {
  return str.replace(/[\s\S]/g, function (escape) {
    return '\\u' + ('0000' + escape.charCodeAt().toString(16)).slice(-4);
  });
}

function parsePuzzleRow(row) {
  row = row.trim();
  if(!row.length) return null;
  const [coupon1, product, bookPage] = row.split(",");
  return {
    product,
    bookPage,
    coupon1: coupon1.slice(6),
    coupon2: coupon1.slice(7)
  };
}

// add puzzle and answer counts based on number of pngs of each type
const addPageCounts = co.wrap(function* (puzzle) {
  const puzzlePageCount = (yield glob(`./assets/${puzzle.product}-p${puzzle.bookPage}_Page*`)).length;
  const answerPageCount = (yield glob(`./assets/${puzzle.product}-p${puzzle.bookPage}-answers-*`)).length;

  puzzle.puzzleCount = puzzlePageCount;
  puzzle.answerCount = answerPageCount;
});

Promise.all(puzzles.map(addPageCounts)).then(() => {
  writeFileSync("puzzles.json", JSON.stringify(puzzles, null, 2));
});
