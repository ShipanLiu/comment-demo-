const CracoLessPlugin = require("craco-less");
// const CracoAlias = require("craco-alias");
const path = require('path')
// 自己封装一个函数
// const getAlias = (dir) => path.join(path.resolve(__dirname, dir)) // __dirname代表当前craco.config.js所在的路径

module.exports = {
  //这边写上plugin， 会和以后的webpack进行合并，
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        }
      }
    },
    // {
    //   plugin: CracoAlias,
    //   options: {
    //     source: "options",
    //     baseUrl: "./",
    //     aliases: {
    //       "@test": "./src/comment/components/CommentInput.jsx",
    //       "@ass": "src/assets"
    //     }
    //   }
    // }
  ],
  webpack: {
    //别名
      alias: {
      '@': path.join(path.resolve(__dirname, 'src')),
      '@ass': path.join(path.resolve(__dirname, 'src/assets')),
      }
  }
}
