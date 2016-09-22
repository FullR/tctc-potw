const subscriptionPreferencesHref = "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#";
const puzzles = [
  {
    text: "PreK",
    href: "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#",
    src: "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-prek-sm.png"
  },
  {
    text: "Grades K-2",
    href: "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#",
    src: "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-k-2-sm.png"
  },
  {
    text: "Grades 3-5",
    href: "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#",
    src: "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-3-5-sm.png"
  },
  {
    text: "Grades 6-8",
    href: "https://www.criticalthinking.com/email-preferences?tid=<<Profile\\EmailToken>>&email=#listrak\\email#",
    src: "http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-6-8-sm.png"
  }
];

const PuzzlePreviewLink = ({src, href, text}) => `
  <td width="149" align="center" valign="top" bgcolor="#FFFFFF">
    <a href="${href}" target="_blank" style="text-decoration:none"><img src="${src}" alt="Grade PreK Puzzle of the Week!" width="125" height="160" border="0" style="border:2px solid #999999;">
    </a><br>
    <div style="height:4px;"> </div>
    <span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#333333; font-weight:bold;">${text}</span>
  </td>
`;

module.exports = () => {
  return `
    <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border:2px solid #75BEE3;">
      <tr>
        <td align="left" valign="middle" bgcolor="#FFFFFF">
          <table width="590" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" valign="top">
                <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td colspan="4" align="center" valign="middle" bgcolor="#75BEE3">
                      <div style="height:10px;"> </div>
                      <span style="font-family:Arial, Helvetica, sans-serif; font-size:24px; color:#000000; font-weight:bold"> More Free Puzzles of the Week</span><br>
                      <span style="font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#333333;">Sign up for other grades.</span>
                      <div style="height:10px;"> </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" bgcolor="#FFFFFF">&nbsp;</td>
                    <td align="center" valign="top" bgcolor="#FFFFFF">&nbsp;</td>
                    <td align="center" valign="top" bgcolor="#FFFFFF">&nbsp;</td>
                    <td align="center" valign="top" bgcolor="#FFFFFF">&nbsp;</td>
                  </tr>
                  <tr>
                    ${puzzles.map(PuzzlePreviewLink).join("\n")}
                  </tr>
                  <tr>
                    <td colspan="4" align="center" valign="top" bgcolor="#FFFFFF">
                      <br>
                      <a href="${subscriptionPreferencesHref}" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="3" face="Verdana, Arial, Helvetica, sans-serif"><strong>Subscription Preferences</strong></font></a>
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
};
