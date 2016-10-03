const getPuzzlePDF = require("../util/get-puzzle-pdf");

const Header = require("./header");
const Banner = require("./banner");
const PuzzleImageList = require("./puzzle-image-list");
const DownloadLink = require("./download-link");
const ProductDescription = require("./product-description");
const SpecialOffers = require("./special-offers");
const MoreProducts = require("./more-products");
const MorePuzzles = require("./more-puzzles");
const AnswerImageList = require("./answer-image-list");
const OfferDetails = require("./offer-details");
const Footer = require("./footer");

function getGrades(coupon) {
  return {
    "A": ["prek"],
    "B": ["k", "1", "2"],
    "C": ["3", "4", "5"],
    "D": ["6", "7", "8"]
  }[coupon[0]];
}

function getGradeRange(coupon) {
  return {
    "A": "prek",
    "B": "k-2",
    "C": "3-5",
    "D": "6-8"
  }[coupon[0]];
}

module.exports = ({puzzle}) => {
  const {product, title, seriesTitle, productUrl, seriesUrl, imageUrl, bookPage, pageCount, answerCount, coupon1, coupon2} = puzzle;
  const gradeRange = getGradeRange(coupon1);
  return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
    <html>
      <head>
        <title>Puzzle of the Week!</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
      </head>
      <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
        <center>
          ${Header({gradeRange})}
          ${Banner({gradeRange})}
          ${PuzzleImageList({product, bookPage, pageCount})}
          ${DownloadLink({src: getPuzzlePDF(product, bookPage)})}
          <br/>
          ${ProductDescription({product, title, seriesTitle, productUrl, seriesUrl, imageUrl})}
          <br/>
          <br/>
          ${SpecialOffers({coupon1, coupon2, seriesTitle})}
          <br/>
          <br/>
          ${MoreProducts({grades: getGrades(coupon1)})}
          <br/>
          <br/>
          ${MorePuzzles()}
          <br/>
          <br/>
          ${answerCount ? AnswerImageList({product, bookPage, answerCount}) : ""}
          ${OfferDetails({coupon: coupon2})}
          <br/>
          ${Footer()}
        </center>
      </body>
    </html>
  `;
};
