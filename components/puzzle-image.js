const getPuzzlePNG = require("../util/get-puzzle-png");
const getPuzzlePDF = require("../util/get-puzzle-pdf");

module.exports = ({product, bookPage, page}) => {
  const pdfSrc = getPuzzlePDF(product, bookPage);
  const pngSrc = getPuzzlePNG(product, bookPage, page);

  return `
    <tr>
      <td align="center" valign="middle" bgcolor="#FFFFFF">
        <a href="${pdfSrc}" target="_blank">
          <img src="${pngSrc}" alt="Puzzle of the Week!" width="596" height="700" border="0" style="border:2px solid #3366CC;">
        </a>
      </td>
    </tr>
  `;
};
