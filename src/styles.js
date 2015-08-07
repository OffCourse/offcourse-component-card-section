import R from "ramda";

const normalFont = "NittyNormal, Helvetica";
const boldFont = "NittyBold, Helvetica";

function Units(baseUnit){
  const baseFontSize = (baseUnit / 30) * 16;
  const baseLineHeight = (baseUnit / 30) * 20;
  const toPixelStrings = R.mapObj((pixels) => `${pixels}px`);

  const space = {
    base: baseUnit,
    condensed: baseUnit / 1.5,
    medium: baseUnit / 2,
    small: baseUnit / 3,
    mini: baseUnit / 6,
    micro: baseUnit / 15,
    nano: baseUnit / 30
  };

  const fontSize = {
    base: baseFontSize,
    large: baseFontSize * 1.75
  };

  const lineHeight = {
    base: baseLineHeight,
    extended: baseLineHeight * 1.1,
    large: baseLineHeight * 1.5
  };

  return R.mapObj(toPixelStrings, { space, fontSize, lineHeight });
}

function Styles({baseUnit = 30}){
  const { space, fontSize, lineHeight } = new Units(baseUnit);
  return {
    base: {
      margin: `0 0 ${space.base} 0`,
      fontSize: fontSize.base,
      fontFamily: normalFont,
      lineHeight: lineHeight.base,
      paddingLeft: space.base,
      paddingRight: space.base
    },
    smallerBottomMargin: {
      margin: `0 0 ${space.condensed} 0`
    },
    sectionTitle: {
      padding: 0,
      lineHeight: lineHeight.extended,
      fontFamily: boldFont,
      margin: `0 0 ${space.small} 0`
    },
    cardTitle: {
      padding: 0,
      fontSize: fontSize.large,
      lineHeight: lineHeight.large,
      fontFamily: boldFont
    }
  };
}

export default Styles;
