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

module.exports = ({coupon}) => `
<table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td valign="top" align="center">
      <div align="left" style="margin-top:10px;">
        <font color="#666666" size="1" face="Verdana, Arial, Helvetica, sans-serif"><strong>Offer Details:</strong>  ${getOfferDetails(coupon)}<br/>
        <br />
        </font>
      </div>
    </td>
  </tr>
</table>
`;
