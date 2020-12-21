const path = require("path");
const ConsoleLogPlugin = require("./plugins/ConsoleLogPlugin.js")
module.exports = {
  entry:path.resolve(__dirname,"./src/index.js"),
  output:{
    filename:"main.js",
    path:path.resolve(__dirname,"dist")
  },
  plugins:[
    new ConsoleLogPlugin()
  ]
}