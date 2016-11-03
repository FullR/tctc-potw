const mkdirp = require("mkdirp");

module.exports = function mkdirpPromise(path) {
  return new Promise((resolve, reject) => {
    mkdirp(path, (error) => {
      if(error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
