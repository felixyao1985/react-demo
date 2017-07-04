# React Kit

参考 React Redux Start Kit [https://github.com/davezuko/react-redux-starter-kit]

---

# 特性

- [x] react + redux + router&webpack
- [x] sass模块化
- [x] 支持异步加载

# 文件结构

```
.
├── bin                                 # 脚本文件夹
│   ├── compile.js                      # NPM commond: babel-node bin/compile
├── build                               # 构建工具文件夹
│   ├── webpack.compiler.js             # 配置：Webpack 构建脚本
│   ├── webpack.config.js               # 配置：Webpack 构建客户端渲染配置
├── config                              # 配置文件夹
│   ├── index.js                        # 主配置文件
│   └── environment.js                  # 环境配置文件
├── dist                                # 最终发布的前端资源文件夹
└── src                                 # 前端代码库
```

# 快速开始

## 安装

````bash
$ npm install
````

## 编译

````bash
$ npm run deploy