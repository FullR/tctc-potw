const puzzleLogoSrc = "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-logo.png"
const puzzlePieceBottomSrc = "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-bottom2.png";

const puzzleImage = ({gradeRange}) => `<img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-top-${gradeRange}.png" alt="Puzzle" width="150" height="126" border="0">`;

module.exports = ({gradeRange}) => `
  <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td width="90" align="center" valign="top" bgcolor="#75BEE3">
        <div style="height:10px;"> </div>
        <img src="${puzzleLogoSrc}" alt="Puzzle" width="82" height="92" border="0">
      </td>
      <td align="center" valign="middle" bgcolor="#75BEE3"><span style="font-family:Arial, Helvetica, sans-serif; font-size:38px; color:#CC0000; font-weight:bold"> Critical Thinking</span><br>
        <span style="font-family:Arial, Helvetica, sans-serif; font-size:36px; color:#000000; font-weight:bold"> Puzzle of the Week!</span>
      </td>
      <td width="151" align="right" valign="bottom" bgcolor="#75BEE3">${puzzleImage({gradeRange})}</td>
    </tr>
    <tr>
      <td colspan="2" align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
      <td align="right" valign="top" bgcolor="#FFFFFF"><img src="${puzzlePieceBottomSrc}" alt="Puzzle" width="150" height="34" border="0"></td>
    </tr>
  </table>
`;
