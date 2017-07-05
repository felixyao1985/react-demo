// 异步路由组件
export default (store) => ({
  path: '/admin',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const Component = require('./index').default;
      cb(null, Component);
    }, 'home')
  }
})

