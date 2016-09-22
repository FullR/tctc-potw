const unsubscribeHref = "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#&u=1";
const changeEmailHref = "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#"

module.exports = () => `
  <table width="600" border="0" align="center" cellpadding="0" cellspacing="12" bgcolor="#EEEEEE">
    <tr>
      <td align="center">
        <p align="center">
          <font size="1" face="Verdana, Arial, Helvetica, sans-serif" font color="#666666">
            <a href="[[BrowserLink]]" target="_blank">View email in browser</a> |
            <a href="${unsubscribeHref}" target="_blank">
              Unsubscribe from future mailings
            </a> |
            <a href="${changeEmailHref}" target="_blank">
              Change my email address
            </a>
          </font>
        </p>
        <p align="left"><font color="#666666" size="1" face="Verdana, Arial, Helvetica, sans-serif">E-Mail
          Marketing, <em>The Critical Thinking Co.&#8482;</em> |
          1-800-458-4849 | <a href="http://www.criticalthinking.com" target="_blank">www.criticalthinking.com</a></font><font color="#666666"><br>
          <font face="verdana, geneva, sans-serif" size="1">All content &copy; <em>The Critical Thinking Co.&#8482;</em>, </font><font color="#666666" size="1" face="Verdana, Arial, Helvetica, sans-serif">1991 Sherman Ave., Suite 200, North Bend, OR 97459</font><font face="verdana, geneva, sans-serif" size="1">. <br>
          All rights reserved.</font></font>
        </p>
      </td>
    </tr>
    <tr>
      <td></td>
    </tr>
  </table>
`;
