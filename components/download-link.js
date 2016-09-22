
const arrowSrc = "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/download_arrow.gif";

module.exports = ({src}) => {
  return `
    <table width="600" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" valign="middle" bgcolor="#FFFFFF">
          <div style="height:10px;"></div>
          <img src="${arrowSrc}" alt="arrow" width="9" height="8" border="0">&nbsp;
          <a href="${src}" target="_blank" style="text-decoration:underline;">
            <font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif">
              <strong>DOWNLOAD PUZZLE & ANSWER</strong>
            </font>
          </a>
          <br>
          <br>
        </td>
      </tr>
    </table>
  `;
};
