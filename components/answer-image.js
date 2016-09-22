const getAnswerPNG = require("../util/get-answer-png");
const getPuzzlePDF = require("../util/get-puzzle-pdf");

module.exports = ({product, bookPage, page}) => {
  const answerPNGSrc = getAnswerPNG(product, bookPage, page);
  const puzzlePDFHref = getPuzzlePDF(product, bookPage);

  return `
    <tr>
      <td align="center" valign="middle" bgcolor="#FFFFFF"><a href="${puzzlePDFHref}" target="_blank"><img src="${answerPNGSrc}" alt="Puzzle of the Week - Answers" width="596" height="700" border="0" style="border:2px solid #3366CC;"></a></td>
    </tr>
  `;
};
