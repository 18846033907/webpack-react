const { Compilation } = require("webpack");

class DemoWebpackPlugin {
  constructor() {
    console.log("plugin init");
  }
  apply(compiler) {
    compiler.hooks.compile.tap("DemoWebpackPlugin", (compilation, fn) => {
      console.log(compilation);
    });

    compiler.hooks.emit.tapAsync("DemoWebpackPlugin", (compilation, fn) => {
      console.log(compilation);
      compilation.assets["index.md"] = {
        // 文件内容
        source: function () {
          return "this is a demo for plugin";
        },
        // 文件尺寸
        size: function () {
          return 25;
        },
      };
      fn();
    });
  }
}
module.exports = DemoWebpackPlugin;
