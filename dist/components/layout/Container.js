"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Container(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col min-h-screen w-screen max-w-full items-center"
  }, children);
}