const email = require("./components/email");
const {prettyPrint} = require("html");
const formatOptions = {
  indent_size: 2,
  indent_char: " "
};

module.exports = (puzzle) => prettyPrint(email({puzzle}), formatOptions);
