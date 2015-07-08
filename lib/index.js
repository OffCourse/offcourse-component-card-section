"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _offcourseComponentCardField = require("offcourse-component-card-field");

var _offcourseComponentCardField2 = _interopRequireDefault(_offcourseComponentCardField);

var CardSection = (function (_React$Component) {
  function CardSection(props) {
    _classCallCheck(this, CardSection);

    _get(Object.getPrototypeOf(CardSection.prototype), "constructor", this).call(this, props);
    this.name = "card_section";
  }

  _inherits(CardSection, _React$Component);

  _createClass(CardSection, [{
    key: "createFields",
    value: function createFields(fields) {
      return _ramda2["default"].map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];

        return _react2["default"].createElement(_offcourseComponentCardField2["default"], { key: key, title: key, field: value });
      }, fields);
    }
  }, {
    key: "classes",
    value: function classes(title) {
      var _classnames;

      title = title.toLowerCase();
      var sectionName = this.name + "-" + title;
      return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, this.name, true), _defineProperty(_classnames, sectionName, title), _classnames));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var fields = _props.fields;

      var isMany = fields.length > 1;
      return _react2["default"].createElement(
        "section",
        { className: this.classes(title) },
        isMany ? this.createFields(fields) : _react2["default"].createElement(_offcourseComponentCardField2["default"], { field: fields[0] })
      );
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        title: _react2["default"].PropTypes.string.isRequired,
        fields: _react2["default"].PropTypes.array.isRequired
      };
    }
  }]);

  return CardSection;
})(_react2["default"].Component);

exports["default"] = CardSection;
module.exports = exports["default"];