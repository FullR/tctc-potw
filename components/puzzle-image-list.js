const {range} = require("lodash");
const PuzzleImage = require("./puzzle-image");

module.exports = ({product, bookPage, puzzleCount=1}) => `
  <table width="596" border="0" align="center" cellpadding="0">
    <tr>
      <td align="left" valign="middle" bgcolor="#FFFFFF">
        <table width="590" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" valign="top">
              <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                ${range(puzzleCount).map((pageIndex) =>
                  PuzzleImage({product, bookPage, page: pageIndex + 1})
                ).join("\n")}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;
