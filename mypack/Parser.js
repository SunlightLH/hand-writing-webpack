const babylon = require("babylon");
const traverse = require("babel-traverse").default;
const {transformFromAst} = require("@babel/core");
const fs = require("fs");
class Parser{
  static ast(filename){
    const content = fs.readFileSync(filename,"utf-8");
    let ast = babylon.parse(content,{
      sourceType:"module"
    });
    return ast;
  }
  static getDependency(ast){
    const dependcies = [];
    traverse(ast,{
      ImportDeclaration({node}){
        dependcies.push(node.source.value);
      }
    })
    return dependcies;
  }
  static transform(ast){
    const code = transformFromAst(ast,null,{
      presets:["@babel/preset-env"]
    })
    return code.code;
  }
}

module.exports = Parser;