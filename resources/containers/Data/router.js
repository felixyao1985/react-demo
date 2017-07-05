// 异步路由组件
export default (store) => ({
  path: '/data',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./index').default;
      cb(null, Component);
    }, 'data')
  }
})

// 同步路由组件
// import Component from './Data'
//
// export default (store) => ({
//   path: '/data',
//   component: Component
// })
