const glob = require("glob-promise");
const {writeFile, createWriteStream} = require("fs-promise");
const path = require("path");
const log = console.log.bind(console);
const compileTemplate = require("./compile-template");
const http = require("http");

function compileAndSaveTemplate(puzzleInfo) {
  const {puzzle, puzzleDir} = puzzleInfo;
  const emailHTML = compileTemplate(puzzle);
  return writeFile(path.join(puzzleDir, "email.html"), emailHTML).then(() => puzzleInfo);
}

glob("puzzles/**/*.json")
  .then((puzzlePaths) => puzzlePaths.map((puzzlePath) => ({
    puzzlePath,
    puzzleDir: path.dirname(puzzlePath),
    puzzle: require("./" + puzzlePath)
  })))
  .then((puzzles) => puzzles.map(compileAndSaveTemplate))
  .then((promises) => Promise.all(promises))
  .catch(log);
