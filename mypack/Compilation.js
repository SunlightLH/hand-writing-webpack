
const Parser = require("./Parser");
const {join} = require("path");
const {writeFileSync} = require("fs")
class Compilation{
  constructor(compiler){
    const {options,modules} = compiler;
    this.options = options;
    this.modules = modules;
  }
  buildModule(filename,isEntry){
    let fileCode = "";
    let dependcies = [];
    let ast = "";
    if(!isEntry){
      ast = Parser.ast(join(process.cwd(),"./src/",filename));
    }else{
      ast = Parser.ast(filename)
    }
    dependcies = Parser.getDependency(ast);
    fileCode = Parser.transform(ast,filename);
    return {
      filename,
      fileCode,
      dependcies
    }
  }
  emitFiles(){
    let _modules = "";
    this.modules.map(_module=>{
      _modules += `'${_module.filename}':function(modules,exports,require){
        ${_module.fileCode}
      },`
    })
    const template = `(function(modules) {
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
      return __webpack_require__('${this.options.entry}');
    })({
      ${_modules}
    });`
    const out = join(this.options.output.path,this.options.output.filename);
    writeFileSync(out,template,"utf-8");
  }
}

module.exports = Compilation;