import { SzLib } from '../common'
import sagitta from './SagattaMock.js';
/*
  加入了中间件,所有请求都会进入一下流程
  Redux 目的是提供第三方插件的模式，改变action -> reducer 的过程。
  变为 action -> middlewares -> reducer 。
  自己在项目中使用它改变数据流，实现异步 action ；
*/
export default class apiPromise {
  constructor() {
    this.API = (api, params) => {
      params = [...params];
      return sagitta[api](...params);
    };

    this.middleware = ({ dispatch, getState }) => {
      return next => action => {
        const { promise, types, extra } = action;

        if (typeof promise !== 'function') {
          return next(action);
        }

        // Retreive the actions of different stages from the action object
        const [REQUEST, SUCCESS, ERROR, FAILURE] = types;

        // We first dispatch the REQUEST action
        next({ type: REQUEST, response: null, extra: extra });

        return promise(this)
          .then((result) => {
            const { response } = result;
            if (response.status == 0) {
              return dispatch({ type: SUCCESS, response: response, extra: extra })
            } else {
              return dispatch({ type: ERROR, response: response, extra: extra })
            }
          })
          .catch((error) => {
            console.error('API CLIENT MIDDLEWARE ERROR:', error);
            return dispatch({ type: 'FAIL', error: error, extra: extra });
          });
      }
    };
  }
}
