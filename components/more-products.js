const getGradeLinks = (gradeNum) => [
  {text: "Critical Thinking", href: `http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=${gradeNum}&subject%5B%5D=123`},
  {text: "Language Arts", href: `http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=${gradeNum}&subject%5B%5D=122`},
  {text: "Mathematics", href: `http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=${gradeNum}&subject%5B%5D=121`},
  {text: "Science", href: `http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=${gradeNum}&subject%5B%5D=120`},
  {text: "Social Studies", href: `http://www.criticalthinking.com/catalogsearch/advanced/result/?grade%5B%5D=${gradeNum}&subject%5B%5D=119`}
];

const gradeLinks = (grade) => ({
  "prek": getGradeLinks(118),
  "k": getGradeLinks(117),
  "1": getGradeLinks(116),
  "2": getGradeLinks(115),
  "3": getGradeLinks(114),
  "4": getGradeLinks(113),
  "5": getGradeLinks(112),
  "6": getGradeLinks(111),
  "7": getGradeLinks(110),
  "8": getGradeLinks(109)
}[grade]);

const gradeName = (grade) => ({
  "prek": "Preschool",
  "k": "Kindergarten",
  "1": "1st",
  "2": "2nd",
  "3": "3rd",
  "4": "4th",
  "5": "5th",
  "6": "6th",
  "7": "7th",
  "8": "8th"
}[grade]);

const OtherProductLink = ({href, text}) => `
  <a href="${href}" target="_blank" style="text-decoration:none;"><font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong style="text-decoration:underline;">${text}</strong></font></a>
`;

const OtherProductGradeGroup = ({links, name}) => `
  <tr>
    <td width="456" align="left" valign="top" bgcolor="#FFFFFF">
      <div style="height:10px;"> </div>
      <font color="#333333" size="2" face="Verdana, Arial, Helvetica, sans-serif">
        <strong>More Award-Winning ${name} Products</strong>
      </font>
      <br>
      <div style="height:6px;"></div>
      <font color="#3366CC" size="2" face="Verdana, Arial, Helvetica, sans-serif">
        ${links.map(OtherProductLink).join("<span> | </span>")}
      </font>
      <br>
      <br>
    </td>
  </tr>
`;

module.exports = ({grades}) => `
  <table width="600" border="0" align="center" cellpadding="0">
    <tr>
      <td align="left" valign="middle" bgcolor="#FFFFFF">
        <table width="590" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" valign="top">
              <table width="596" border="0" align="center" cellpadding="0" cellspacing="0">
                ${grades.map((grade) => OtherProductGradeGroup({
                  links: gradeLinks(grade),
                  name: gradeName(grade)
                })).join("\n")}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;

// module.exports = ({grades}) => grades.map((grade) => OtherProductGradeGroup({
//   links: gradeLinks[grade],
//   name: gradeName(grade)
// })).join("\n");
