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

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var CardSection = (function (_React$Component) {
  function CardSection(props) {
    _classCallCheck(this, CardSection);

    _get(Object.getPrototypeOf(CardSection.prototype), "constructor", this).call(this, props);
    this.name = "card_section";
  }

  _inherits(CardSection, _React$Component);

  _createClass(CardSection, [{
    key: "classes",
    value: function classes(type) {
      var _classnames;

      var title = type.toLowerCase();
      var sectionName = this.name + "-" + title;
      return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, this.name, true), _defineProperty(_classnames, sectionName, title), _classnames));
    }
  }, {
    key: "selectElement",
    value: function selectElement() {
      var component = this.props.component;

      return component ? this.selectCustom() : this.selectDefault();
    }
  }, {
    key: "selectCustom",
    value: function selectCustom() {
      var _props = this.props;
      var component = _props.component;
      var data = _props.data;
      var handlers = _props.handlers;

      var Custom = component;
      return _react2["default"].createElement(Custom, { handlers: handlers, data: data });
    }
  }, {
    key: "selectDefault",
    value: function selectDefault() {
      var _props2 = this.props;
      var type = _props2.type;
      var data = _props2.data;
      var collection = data.data;

      switch (type) {
        case "title":
          return _react2["default"].createElement(
            "h1",
            null,
            data
          );
        case "meta":
          return this.metaItems(data);
        case "list":
          return _react2["default"].createElement(
            "ul",
            null,
            this.listItems(collection)
          );
        default:
          return _react2["default"].createElement(
            "p",
            null,
            data
          );
      }
    }
  }, {
    key: "listItems",
    value: function listItems(items) {
      return _ramda2["default"].mapIndexed(function (item, index) {
        return _react2["default"].createElement(
          "li",
          { key: index },
          item
        );
      }, items);
    }
  }, {
    key: "metaItems",
    value: function metaItems(items) {
      return _ramda2["default"].mapIndexed(function (_ref) {
        var type = _ref.type;
        var data = _ref.data;

        var title = _lodash2["default"].capitalize(type);
        return _react2["default"].createElement(
          "p",
          { key: title },
          _react2["default"].createElement(
            "span",
            null,
            title
          ),
          ": ",
          _react2["default"].createElement(
            "span",
            null,
            data
          )
        );
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props;
      var type = _props3.type;
      var component = _props3.component;

      var titleless = ["title", "meta"];
      var noTitle = _ramda2["default"].contains(type, titleless);
      var element = this.selectElement();

      return _react2["default"].createElement(
        "section",
        { className: this.classes(type) },
        !noTitle && _react2["default"].createElement(
          "h1",
          null,
          _lodash2["default"].capitalize(type)
        ),
        element
      );
    }
  }]);

  return CardSection;
})(_react2["default"].Component);

CardSection.propTypes = {
  type: _react.PropTypes.string.isRequired,
  data: _react.PropTypes.any.isRequired,
  component: _react.PropTypes.func,
  handlers: _react.PropTypes.object
};

exports["default"] = CardSection;
module.exports = exports["default"];