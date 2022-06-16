"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sup = void 0;

var _markdoc = require("@markdoc/markdoc");

const sup = {
  render: "superscript",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {},

  transform(node, config) {
    return new _markdoc.Tag("sup", node.transformAttributes(config), node.transformChildren(config));
  }

};
exports.sup = sup;