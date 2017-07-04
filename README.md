# React Kit

参考 React Redux Start Kit [https://github.com/davezuko/react-redux-starter-kit]

---

# 特性

- [x] react + redux + router&webpack
- [x] sass模块化
- [x] 支持异步加载
- [x] 支持后端渲染

# 文件结构

```
.
├── bin                                 # 脚本文件夹
│   ├── compile.js                      # NPM commond: babel-node bin/compile
│   ├── server.js                       # KOA 服务端启动
├── build                               # 构建工具文件夹
│   ├── webpack.compiler.js             # 配置：Webpack 构建脚本
│   ├── webpack.config.js               # 配置：Webpack 构建客户端渲染配置
│   └── webpack.server.config.js        # 配置：Webpack 构建服务端渲染配置
├── config                              # 配置文件夹
│   ├── index.js                        # 主配置文件
│   └── environment.js                  # 环境配置文件
├── dist                                # 最终发布的前端资源文件夹
├── server                              # 服务端代码库
└── src                                 # 前端代码库
```

# 快速开始

## 安装

````bash
$ npm install
````

## 启动

````bash
$ npm start
````

## 开发环境编译

````bash
$ npm run deploy:dev
````

## 生产环境编译

````bash
$ npm run deploy:prod
````

## 生产环境（开启服务端渲染）编译

````bash
$ npm run deploy:prod:server
````

## 运行开发环境

````bash
$ npm run start
````

## 运行生产环境

````bash
$ npm run start:dist
````

## 运行生产环境(开启服务端渲染)

````bash
$ npm run start:dist:server
````

## 关于服务端渲染
1. 目前只能在生产环境中开启服务端渲染的打包和运行。
2. 本案例中服务端使用 ES6 开发，如果您的服务端是使用 ES5 开发的，请在 webpack 打包的配置文件中，将入口文件做如下处理:

````bash
const APP_ENTRY_PATHS = [
  'babel-polyfill',
  paths.client('server.js')
];
````

3. 客户端渲染与服务端渲染同构，需要注意代码中是否使用 windows 变量。