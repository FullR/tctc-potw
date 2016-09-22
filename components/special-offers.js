module.exports = ({coupon1, coupon2}) => {
  const coupon1Href = `http://www.criticalthinking.com/index.php?coupon=PUZZLE${coupon1}`;
  const coupon2Href = `http://www.criticalthinking.com/index.php?coupon=PUZZLES${coupon2}`;
  return `
    <table width="540" border="0" align="center" cellpadding="0" cellspacing="0" style="border:2px solid #D2232A;">
      <tr>
        <td align="left" valign="middle" bgcolor="#FFFFFF">
          <table width="536" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
              <td width="596" colspan="4" align="center" valign="middle" bgcolor="#D2232A" style="padding:10px 10px 10px 25px;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:34px; font-weight:bold; color:#FFFFFF; padding:0px;">Special Offers!</span></td>
            </tr>
            <tr>
              <td colspan="4" align="left" valign="top" bgcolor="#FFFFFF" style="padding:10px 10px 10px 25px;"><span class="contentPadding" style="padding:10px 10px 10px 0px;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:22px; font-weight:bold; color:#333333; padding:0px;">Save 20% Off All Can You Find Me? Books!</span> <br>
                <span style="font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#333333;"> Details below. Use Coupon Code: </span><span style="font-family:Arial, Helvetica, sans-serif; font-size:16px;"><font color="#666666"><strong>PUZZLE${coupon1}</strong></font></span> | <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;"><a href="${coupon1Href}" target="_blank"><font color="#3366CC">SHOP NOW &raquo;</font></a></span></span> <br>
                <br>
                <span class="contentPadding" style="padding:10px 10px 10px 0px;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:22px; font-weight:bold; color:#333333; padding:0px;">Or, Save 10% Off Any Size Order!</span> <br>
                <span style="font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#333333;">Details below. Use Coupon Code: </span><span style="font-family:Arial, Helvetica, sans-serif; font-size:16px;"><font color="#666666"><strong>PUZZLES${coupon2}</strong></font></span> | <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;"><a href="${coupon2Href}" target="_blank"><font color="#3366CC">SHOP NOW &raquo;</font></a></span></span> <br>
                <br>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};
