"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _CardHelpersJsx = require("./CardHelpers.jsx");

var _CardHelpersJsx2 = _interopRequireDefault(_CardHelpersJsx);

var _CardSectionJsx = require("./CardSection.jsx");

var _CardSectionJsx2 = _interopRequireDefault(_CardSectionJsx);

var CardContent = (function (_React$Component) {
  function CardContent(props) {
    _classCallCheck(this, CardContent);

    _get(Object.getPrototypeOf(CardContent.prototype), "constructor", this).call(this, props);
    var helpers = new _CardHelpersJsx2["default"]();
    this.partition = helpers.partition;
    this.name = "card_content";
  }

  _inherits(CardContent, _React$Component);

  _createClass(CardContent, [{
    key: "classes",
    value: function classes() {
      return (0, _classnames3["default"])(_defineProperty({}, this.name, true));
    }
  }, {
    key: "createSections",
    value: function createSections(schema, model, context) {
      var partitions = this.partition(schema, model, context);
      return _ramda2["default"].map(function (_ref) {
        var sectionTitle = _ref.sectionTitle;
        var fields = _ref.fields;
        return _react2["default"].createElement(_CardSectionJsx2["default"], { key: sectionTitle, title: sectionTitle, fields: fields });
      }, partitions);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var context = _props.context;
      var model = _props.model;
      var schema = _props.schema;

      var sections = this.createSections(schema, model, context);
      return _react2["default"].createElement(
        "section",
        { className: this.classes() },
        sections
      );
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        model: _react2["default"].PropTypes.object.isRequired
      };
    }
  }]);

  return CardContent;
})(_react2["default"].Component);

CardContent.defaultProps = {};

CardContent.propTypes = {
  model: _react2["default"].PropTypes.object.isRequired
};

exports["default"] = CardContent;
module.exports = exports["default"];