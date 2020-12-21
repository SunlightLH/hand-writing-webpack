const pluginName = "ConsoleLogPlugin";
class ConsoleLogPlugin{
  apply(complier){
    complier.hooks.run.tap(pluginName,(compilation)=>{
      console.log("🌻🌻🌻--自定义plugin");
    })
  }
}

module.exports = ConsoleLogPlugin;