import { injectReducer } from '../../store/reducers'
import HomeIndexRouter from '../HomeIndex/router'
import DataRouter from '../Data/router'
import DataDetailRouter from '../DataDetail/router'

// 异步路由组件
export default (store) => ({
  path: '/',
  indexRoute: HomeIndexRouter(store),
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
	  //注入 Reducer
      injectReducer(store, { key: 'base', reducer: require('../../store/base').default });
      injectReducer(store, { key: 'data', reducer: require('../../store/data').default });

      const Component = require('./index').default;
      cb(null, Component);
    }, 'home')
  },
  childRoutes: [
    DataRouter(store),
    DataDetailRouter(store)
  ]
})

// 同步路由组件
// import Component from './Home'
//
// export default (store) => ({
//   path: '/data',
//   component: Component
// })
