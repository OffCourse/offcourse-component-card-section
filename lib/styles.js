"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var normalFont = "NittyNormal, Helvetica";
var boldFont = "NittyBold, Helvetica";

function Units(baseUnit) {
  var baseFontSize = baseUnit / 30 * 16;
  var baseLineHeight = baseUnit / 30 * 20;
  var toPixelStrings = _ramda2["default"].mapObj(function (pixels) {
    return pixels + "px";
  });

  var space = {
    base: baseUnit,
    condensed: baseUnit / 1.5,
    medium: baseUnit / 2,
    small: baseUnit / 3,
    mini: baseUnit / 6,
    micro: baseUnit / 15,
    nano: baseUnit / 30
  };

  var fontSize = {
    base: baseFontSize,
    large: baseFontSize * 1.75
  };

  var lineHeight = {
    base: baseLineHeight,
    extended: baseLineHeight * 1.1,
    large: baseLineHeight * 1.5
  };

  return _ramda2["default"].mapObj(toPixelStrings, { space: space, fontSize: fontSize, lineHeight: lineHeight });
}

function Styles(_ref) {
  var _ref$baseUnit = _ref.baseUnit;
  var baseUnit = _ref$baseUnit === undefined ? 30 : _ref$baseUnit;

  var _ref2 = new Units(baseUnit);

  var space = _ref2.space;
  var fontSize = _ref2.fontSize;
  var lineHeight = _ref2.lineHeight;

  return {
    base: {
      margin: "0 0 " + space.base + " 0",
      fontSize: fontSize.base,
      fontFamily: normalFont,
      lineHeight: lineHeight.base,
      paddingLeft: space.base,
      paddingRight: space.base
    },
    smallerBottomMargin: {
      margin: "0 0 " + space.condensed + " 0"
    },
    sectionTitle: {
      padding: 0,
      lineHeight: lineHeight.extended,
      fontFamily: boldFont,
      margin: "0 0 " + space.small + " 0"
    },
    cardTitle: {
      padding: 0,
      fontSize: fontSize.large,
      lineHeight: lineHeight.large,
      fontFamily: boldFont
    }
  };
}

exports["default"] = Styles;
module.exports = exports["default"];