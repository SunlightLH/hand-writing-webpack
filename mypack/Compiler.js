const {SyncHook} = require("tapable");
const Compilation = require("./Compilation");
class Compiler{
  constructor(options){
    this.options = options;
    this.modules = [];
    this.hooks = {
      run:new SyncHook(["compilation"])
    }
  }
  run(){
    /**创建complation */
    const compilation = new Compilation(this);
    /**执行plugin */
    this.hooks.run.call(compilation);
    /**打包处理 */
    const entry = this.options.entry;
    const entryModule = compilation.buildModule(entry,true);
    this.modules.push(entryModule);
    this.getModules(entryModule.dependcies,compilation);
    compilation.emitFiles();
  }
  getModules(dependcies,compilation){
    dependcies.map(dependency=>{
      const module = compilation.buildModule(dependency,false);
      this.modules.push(module);
      if(module.dependcies && module.dependcies.length>0){
        this.getModules(module.dependcies,compilation)
      }
    })
  }
}

module.exports = Compiler;