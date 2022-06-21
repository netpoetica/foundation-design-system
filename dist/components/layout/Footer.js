"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _link = _interopRequireDefault(require("next/link"));

var _SingleColumn = _interopRequireDefault(require("./SingleColumn"));

var _Section = _interopRequireDefault(require("./Section"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bg-wall-100 mt-20 w-full flex justify-center"
  }, /*#__PURE__*/_react.default.createElement(_SingleColumn.default, null, /*#__PURE__*/_react.default.createElement(_Section.default, {
    short: true,
    className: "flex flex-row flex-wrap"
  }, data[0].map(section => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "w-1/2 md:w-1/3 flex flex-col shrink"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "mt-16 mb-8"
    }, section.title), section.links.map(link => {
      return /*#__PURE__*/_react.default.createElement(_link.default, {
        href: link.href,
        passHref: true
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "type-medium text-wall-500"
      }, link.title));
    }));
  })), /*#__PURE__*/_react.default.createElement(_Section.default, {
    className: "flex flex-col md:flex-row"
  }, data[1].map(link => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "md:w-1/3"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: link.href,
      passHref: true
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "type-medium text-wall-500"
    }, link.title)));
  }))));
}