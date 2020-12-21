(function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if(installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
          exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
      }
      return __webpack_require__('/Users/happy/LearnArea/file/hand-writing-webpack/src/index.js');
    })({
      '/Users/happy/LearnArea/file/hand-writing-webpack/src/index.js':function(modules,exports,require){
        "use strict";

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_data["default"]);
console.log("入口文件的文本");
      },'./data.js':function(modules,exports,require){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deepdata = _interopRequireDefault(require("./deepdata.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var str = "data文件中的文本";
console.log(_deepdata["default"]);
var _default = str;
exports["default"] = _default;
      },'./deepdata.js':function(modules,exports,require){
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var res = "深层嵌套的数据";
var _default = res;
exports["default"] = _default;
      },
    });