const {readFileSync, writeFileSync} = require("fs");

const products = readFileSync("products.csv", "utf8")
  .split("\n") // split into lines
  .slice(1) // remove headers
  .map(createProductFromRow) // parse lines
  .filter((product) => !!product) // filter blank rows
  .reduce((productMap, product) => {
    productMap[product.product] = product;
    return productMap;
  }, {});

writeFileSync("products.json", JSON.stringify(products, null, 2));

function encodeHTMLentities(str) {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return '&#'+i.charCodeAt(0)+';';
  });
}

function createProductFromRow(row) {
  row = row.trim();
  if(!row || !row.length) return null;
  const [title, seriesTitle, product, softwareOption, imageUrl, productUrl, seriesUrl] = row.split(",").map(encodeHTMLentities);

  return {title, seriesTitle, product, imageUrl, productUrl, seriesUrl, softwareOption: softwareOption === "y"};
}
