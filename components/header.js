function formatGradeRange(gradeRange) {
  if(gradeRange === "prek") return "PreK";
  return gradeRange.toUpperCase();
}

module.exports = ({gradeRange}) => `
  <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td width="340" align="left" valign="middle" style="padding:4px 4px 0px 0px;">
        <div style="font-family:Tahoma,Arial, Helvetica, sans-serif; font-size:10px; color:#999999;">The Critical Thinking Co.&#8482; Puzzle of the Week: Grade ${formatGradeRange(gradeRange)}</div>
      </td>
      <td align="right" valign="middle" style="padding:4px 4px 0px 0px;"><font face="tahoma" size="1" color="#666666"><a href="[[BrowserLink]]" target="_blank"><font color="#666666">View email in browser</font></a> | <a href="[[PassalongLink]]" target="_blank"><font color="#666666">Forward to a Friend</font></a></font>      </td>
    </tr>
  </table>
`;
