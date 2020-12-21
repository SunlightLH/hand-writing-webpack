手写webpack  
流程：创建compiler（配置webpack参数+定义hooks钩子函数）-> 注册plugins -> 执行构建，即运行compiler.run()
执行构建流程：
获取入口文件 -> 将入口文件转成ast，并进行遍历，获取所有依赖模块 -> 生成模板，并将模板输出到出口文件夹
创建compilation（获取依赖模块+生成打包文件模板）