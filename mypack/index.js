const options = require("../mypack.config.js");
const Compiler = require("./Compiler.js");

/**实例化compiler */
const compiler = new Compiler(options);

/**注册plugin */
options.plugins.map(plugin=>{
  plugin.apply(compiler)
})

/**执行compiler创建compilation */
compiler.run();