const {range} = require("lodash");
const AnswerImage = require("./answer-image");

module.exports = ({product, bookPage, answerCount}) => `
<table width="600" border="0" align="center" cellpadding="0" style="border:1px solid #eeeeee;">
  <tr>
    <td align="left" valign="middle" bgcolor="#FFFFFF">
      <table width="590" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" valign="top">
            <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" valign="middle" bgcolor="#FFFFFF"><span style="font-family:Arial, Helvetica, sans-serif; font-size:24px; color:#CC0000; font-weight:bold"> Puzzle of the Week Answer(s)</span></td>
              </tr>
              ${range(answerCount).map((answerIndex) =>
                AnswerImage({product, bookPage, page: answerIndex + 1})
              )}
              <tr>
                <td align="center" valign="middle" bgcolor="#FFFFFF"></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
