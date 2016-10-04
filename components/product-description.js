const {readFileSync} = require("fs");
const fontSize = 13;

module.exports = ({product, title, seriesTitle, imageUrl, productUrl, seriesUrl, softwareOption}) => {
  try {
    const productDescription = readFileSync(`descriptions/${product}.html`);
    return `<table width="600" border="0" align="center" cellpadding="0">
      <tr>
        <td align="left" valign="middle" bgcolor="#FFFFFF">
          <table width="590" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" valign="top">
                <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="140" rowspan="2" align="left" valign="top" bgcolor="#FFFFFF"><font color="#000000" size="1" face="Verdana, Arial, Helvetica, sans-serif"><a href="${productUrl}" target="_blank"><img src="${imageUrl}" alt="" width="124" height="159" border="0"></a></font> </td>
                    <td width="456" height="20" align="left" valign="top" bgcolor="#FFFFFF"><span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#000000; font-weight:bold">${title}</span></td>
                  </tr>
                  <tr>
                    <td colspan="2" align="left" valign="top" bgcolor="#FFFFFF"><br>
                      <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;">
                        ${productDescription}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" align="left" valign="top" bgcolor="#FFFFFF">
                      <br>
                      <a href="${productUrl}" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Learn more about ${title}</strong></font></a>
                      <br>
                      <br>
                      <a href="${seriesUrl}" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>More ${seriesTitle} books${softwareOption ? " & software" : ""}</strong></font></a>
                      <br>
                      <br>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    `
  } catch(error) {
    console.log(`Failed to load description for ${product}: ${error}`);
    return "";
  }
};
