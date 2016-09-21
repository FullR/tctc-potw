const offerDetails1 = "Offers expire in two (2) weeks at 11:59pm PST. Online credit card orders or purchase orders with coupon code present on order. Valid one per customer. Only one coupon code allowed per order. Purchase price is calculated before shipping & handling fees. Offers do not apply to iOS, Android, Windows Tablet apps, or manipulatives such as Attribute Blocks, Interlocking Cubes, or Pattern Blocks. Not valid on wholesale orders. Offers may not be combined with other discounts or offers, and are not retroactive.";
const offerDetails2 = "Offers expire in two (2) weeks at 11:59pm PST. Online credit card orders or purchase orders with coupon code present on order. Valid one per customer. Only one coupon code allowed per order. Purchase price is calculated before shipping & handling fees. Free shipping offer applies to standard ground shipping (not Rush Delivery) on merchandise shipping to one location within the 48 contiguous United States. Offers do not apply to iOS, Android, Windows Tablet apps, or manipulatives such as Attribute Blocks, Interlocking Cubes, or Pattern Blocks. Not valid on wholesale orders. Offers may not be combined with other discounts or offers, and are not retroactive.";

function getOfferDetails(coupon) {
  coupon = parseInt(coupon);
  const remainder = coupon % 4;
  const detailsNumber = remainder === 1 || remainder === 2 ? 1 : 2;

  if(remainder === 1 || remainder === 2) {
    return offerDetails1;
  } else {
    return offerDetails2;
  }
}

module.exports = (puzzle) => `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
  <head>
    <title>Puzzle of the Week!</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  </head>
  <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <center>
      <!-- Header -->
      <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td width="340" align="left" valign="middle" style="padding:4px 4px 0px 0px;">
            <div style="font-family:Tahoma,Arial, Helvetica, sans-serif; font-size:10px; color:#999999;">The Critical Thinking Co.&#8482; Puzzle of the Week: Grade PreK </div>
          </td>
          <td align="right" valign="middle" style="padding:4px 4px 0px 0px;"><font face="tahoma" size="1" color="#666666"><a href="[[BrowserLink]]" target="_blank"><font color="#666666">View email in browser</font></a> | <a href="[[PassalongLink]]" target="_blank"><font color="#666666">Forward to a Friend</font></a></font>      </td>
        </tr>
      </table>

      <!-- Banner -->
      <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td width="90" align="center" valign="top" bgcolor="#75BEE3">
            <div style="height:10px;"> </div>
            <img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-logo.png" alt="Puzzle" width="82" height="92" border="0">
          </td>
          <td align="center" valign="middle" bgcolor="#75BEE3"><span style="font-family:Arial, Helvetica, sans-serif; font-size:38px; color:#CC0000; font-weight:bold"> Critical Thinking</span><br>
            <span style="font-family:Arial, Helvetica, sans-serif; font-size:36px; color:#000000; font-weight:bold"> Puzzle of the Week!</span>
          </td>
          <td width="151" align="right" valign="bottom" bgcolor="#75BEE3"><img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-top-prek.png" alt="Puzzle" width="150" height="126" border="0"></td>
        </tr>
        <tr>
          <td colspan="2" align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
          <td align="right" valign="top" bgcolor="#FFFFFF"><img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-bottom2.png" alt="Puzzle" width="150" height="34" border="0"></td>
        </tr>
      </table>

      <!-- Puzzle Images -->
      <table width="596" border="0" align="center" cellpadding="0">
        <tr>
          <td align="left" valign="middle" bgcolor="#FFFFFF">
            <table width="590" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                    ${
                      puzzle.pages.map((page) => `
                        <tr>
                          <td align="center" valign="middle" bgcolor="#FFFFFF"><a href="http://media.criticalthinking.com/6228/${puzzle.product}-p${puzzle.pages[0]}.pdf" target="_blank"><img src="http://media.criticalthinking.com/6228/${puzzle.product}-p${page}.png" alt="Puzzle of the Week!" width="596" height="700" border="0" style="border:2px solid #3366CC;"></a></td>
                        </tr>
                      `).join("\n")
                    }
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Download Link -->
      <table width="600" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" valign="middle" bgcolor="#FFFFFF">
            <div style="height:10px;"></div>
            <img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/download_arrow.gif" alt="arrow" width="9" height="8" border="0">&nbsp;<a href="http://media.criticalthinking.com/6228/${puzzle.product}-p${puzzle.pages[0]}.pdf" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>DOWNLOAD PUZZLE & ANSWER</strong></font></a><br>
            <br>
          </td>
        </tr>
      </table>
      <br>

      <!-- Product description -->
      <table width="600" border="0" align="center" cellpadding="0">
        <tr>
          <td align="left" valign="middle" bgcolor="#FFFFFF">
            <table width="590" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="140" rowspan="2" align="left" valign="top" bgcolor="#FFFFFF"><font color="#000000" size="1" face="Verdana, Arial, Helvetica, sans-serif"><a href="http://www.criticalthinking.com/${puzzle.product}.html" target="_blank"><img src="http://www.criticalthinking.com/media/catalog/product/0/3/03801.gif" alt="" width="124" height="159" border="0"></a></font> </td>
                      <td width="456" height="20" align="left" valign="top" bgcolor="#FFFFFF"><span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#000000; font-weight:bold"> Can You Find Me? PreK</span></td>
                    </tr>
                    <tr>
                      <td align="left" valign="top" bgcolor="#FFFFFF"><br>
                        <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;">
                        <strong>Building Thinking Skills &bull; Reading &bull; Math &bull; Science &bull; Social Studies</strong>
                        <br><br>
                        <em>Can You Find Me?</em> develops skills in reading readiness, science, math, and social studies. Each colorful riddle requires identification of two or more clues to deduce the answer.  Each colorful riddle requires identification of two or more clues to deduce the answer. Activities may be enhanced by teaching additional information about the animals, objects, shapes, letters, and numbers used in the riddles. <br>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="left" valign="top" bgcolor="#FFFFFF"><br>
                        <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;">
                        <strong>Content</strong><br>
                        MATH&mdash;counting, shape and number recognition, recognizing and completing patterns, spatial position, more/less/equal, ordinal numbers (first, third, etc.), part/ whole measurement
                        <br>
                        <br>
                        READING READINESS&mdash;letter recognition, rhyming words, letter sound association, letter sequence, sight words, directionality
                        <br>
                        <br>
                        SCIENCE&mdash;animal attributes, weather/seasons, senses, body parts, plants/plant growth, force/motion
                        <br>
                        <br>
                        SOCIAL STUDIES&mdash;family, community helpers, health and safety, identifying locations
                        <br>
                        <br>
                        <strong>Teaching Support</strong><br>
                        Includes answers and a chart of the skills developed in each activity.</span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="left" valign="top" bgcolor="#FFFFFF">
                        <br>
                        <a href="http://www.criticalthinking.com/${puzzle.product}.html" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Learn more about Can You Find Me? PreK</strong></font></a>
                        <br>
                        <br>
                        <a href="http://www.criticalthinking.com/can-you-find-me.html" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>More Can You Find Me? books & software</strong></font></a>
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
      <br>
      <br>
      <table width="540" border="0" align="center" cellpadding="0" cellspacing="0" style="border:2px solid #D2232A;">
        <tr>
          <td align="left" valign="middle" bgcolor="#FFFFFF">
            <table width="536" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td width="596" colspan="4" align="center" valign="middle" bgcolor="#D2232A" style="padding:10px 10px 10px 25px;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:34px; font-weight:bold; color:#FFFFFF; padding:0px;">Special Offers!</span></td>
              </tr>
              <tr>
                <td colspan="4" align="left" valign="top" bgcolor="#FFFFFF" style="padding:10px 10px 10px 25px;"><span class="contentPadding" style="padding:10px 10px 10px 0px;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:22px; font-weight:bold; color:#333333; padding:0px;">Save 20% Off All Can You Find Me? Books!</span> <br>
                  <span style="font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#333333;"> Details below. Use Coupon Code: </span><span style="font-family:Arial, Helvetica, sans-serif; font-size:16px;"><font color="#666666"><strong>PUZZLE${puzzle.coupon1}</strong></font></span> | <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;"><a href="http://www.criticalthinking.com/index.php?coupon=PUZZLE${puzzle.coupon1}" target="_blank"><font color="#3366CC">SHOP NOW &raquo;</font></a></span></span> <br>
                  <br>
                  <span class="contentPadding" style="padding:10px 10px 10px 0px;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:22px; font-weight:bold; color:#333333; padding:0px;">Or, Save 10% Off Any Size Order!</span> <br>
                  <span style="font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#333333;">Details below. Use Coupon Code: </span><span style="font-family:Arial, Helvetica, sans-serif; font-size:16px;"><font color="#666666"><strong>PUZZLES${puzzle.coupon2}</strong></font></span> | <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333333;"><a href="http://www.criticalthinking.com/index.php?coupon=PUZZLES${puzzle.coupon2}" target="_blank"><font color="#3366CC">SHOP NOW &raquo;</font></a></span></span> <br>
                  <br>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <br>
      <br>
      <table width="600" border="0" align="center" cellpadding="0">
        <tr>
          <td align="left" valign="middle" bgcolor="#FFFFFF">
            <table width="590" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="top">
                  <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="456" align="left" valign="top" bgcolor="#FFFFFF">
                        <div style="height:10px;"> </div>
                        <font color="#333333" size="2" face="Verdana, Arial, Helvetica, sans-serif"> <strong>More Award-Winning Preschool Products </strong></font><br>
                        <div style="height:6px;"> </div>
                        <font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"> <a href="http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=118&subject%5B%5D=123" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Critical Thinking</strong></font></a> | <a href="http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=118&subject%5B%5D=122" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Language Arts</strong></font></a> | <a href="http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=118&subject%5B%5D=121" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Mathematics</strong></font></a> | <a href="http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=118&subject%5B%5D=120" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Science</strong></font></a> | <a href="http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=118&subject%5B%5D=119" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Social Studies</strong></font></a></font> <br>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <br>
      <br>
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
                      <td width="149" align="center" valign="top" bgcolor="#FFFFFF">
                        <a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#" target="_blank"><img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-prek-sm.png" alt="Grade PreK Puzzle of the Week!" width="125" height="160" border="0" style="border:2px solid #999999;">
                        </a><br>
                        <div style="height:4px;"> </div>
                        <span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#333333; font-weight:bold;">PreK</span>
                      </td>
                      <td width="149" align="center" valign="top" bgcolor="#FFFFFF">
                        <a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#" target="_blank"><img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-k-2-sm.png" alt="Grades K-2 Puzzle of the Week!" width="125" height="160" border="0" style="border:2px solid #999999;"></a><br>
                        <div style="height:4px;"> </div>
                        <span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#333333; font-weight:bold;">Grades K-2</span>
                      </td>
                      <td width="149" align="center" valign="top" bgcolor="#FFFFFF">
                        <a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#" target="_blank"><img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-3-5-sm.png" alt="Grades 3-5 Puzzle of the Week!" width="125" height="160" border="0" style="border:2px solid #999999;"></a><br>
                        <div style="height:4px;"> </div>
                        <span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#333333; font-weight:bold;">Grades 3-5</span>
                      </td>
                      <td width="149" align="center" valign="top" bgcolor="#FFFFFF">
                        <a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#" target="_blank"><img src="http://www.criticalthinking.com/skin/frontend/default/critical/images/newsletter/puzzle-6-8-sm.png" alt="Grades 6-8 Puzzle of the Week!" width="125" height="160" border="0" style="border:2px solid #999999;"></a><br>
                        <div style="height:4px;"> </div>
                        <span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#333333; font-weight:bold;">Grades 6-8</span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4" align="center" valign="top" bgcolor="#FFFFFF">
                        <br>
                        <a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#" target="_blank" style="text-decoration:underline;"><font color="#3366CC" size="3" face="Verdana, Arial, Helvetica, sans-serif"><strong>Subscription Preferences</strong></font></a>
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
      <br>
      <br>

      <!-- Answer -->
      ${puzzle.hasAnswer ? `
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
                    <tr>
                      <td align="center" valign="middle" bgcolor="#FFFFFF"><a href="http://media.criticalthinking.com/6228/${puzzle.product}-p${puzzle.pages[0]}.pdf" target="_blank"><img src="http://media.criticalthinking.com/6228/${puzzle.product}-p${puzzle.pages[0]}-answers.png" alt="Puzzle of the Week - Answers" width="596" height="700" border="0" style="border:2px solid #3366CC;"></a></td>
                    </tr>
                    <tr>
                      <td align="center" valign="middle" bgcolor="#FFFFFF"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>` : ""
      }

      <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" align="center">
            <div align="left" style="margin-left:20; margin-right:20; margin-top:10px;">
              <font color="#666666" size="1" face="Verdana, Arial, Helvetica, sans-serif"><strong>Offer Details:</strong>  ${getOfferDetails(puzzle.coupon2)}<br/>
              <br />
              </font>
            </div>
          </td>
        </tr>
      </table>
      <br>
      <table width="600" border="0" align="center" cellpadding="0" cellspacing="12" bgcolor="#EEEEEE">
        <tr>
          <td align="center">
            <p align="center"><font size="1" face="Verdana, Arial, Helvetica, sans-serif" font color="#666666"><a href="[[BrowserLink]]" target="_blank">View email in browser</a> | <a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#&u=1" target="_blank">Unsubscribe from future mailings</a> |			<a href="https://www.criticalthinking.com/email-preferences?tid=<<Profile\EmailToken>>&email=#listrak\email#" target="_blank">Change my email address</a></font></p>
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
    </center>
  </body>
</html>
`;
