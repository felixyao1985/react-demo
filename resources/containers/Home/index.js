import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { SzLib, Configs } from '../../common';
import BaseComponent from '../BaseComponent.js';

// action
import { setLanguage } from '../../store/base/actions';

class Home extends BaseComponent {

  static fetchData(params, query) {
    const { locale, i18n } = SzLib.loadLocale(Configs.DEFAULT.LOCALE);
    return [setLanguage(locale, i18n)];
  }

  constructor(props) {
    super(props);
  }

  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  //-* component life cycle
  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  componentWillMount() {
    let me = this;
    const { actions, base } = me.props;
    if (SzLib.isEmpty(base.i18n)) {
      const { locale, i18n } = SzLib.loadLocale(base.locale);
      actions.setLanguage(locale, i18n);//设定数据
	  //console.log('HOME componentWillMount props ',me.props);
    }
	
  }
/*
render中的setState是不会重新触发render的
这边在will里 其实已经把值设好了 但是props不是即时响应的
所以打印me.props 还是之前的数据
但是因为用的rudex其下的childen的props已经是最新的了
所以会在childen render之后再回过头render HOME
*/
  render() {
    let me = this;
	//console.log('HOME render props ',me.props);
    return (
      <div>
        <h1>React Kit 2</h1>
        { me.props.children }
      </div>
    )
  }
}

export default connect(
  // bind state 将 store 中的数据作为 props 绑定到组件上。
  (state) => ({
    base: state.base
  }),
  // bind dispatch action
  (dispatch) => ({
    actions: bindActionCreators({ setLanguage }, dispatch)
  })
)(Home);
/*
把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，
这样可以直接调用它们。

一般情况下你可以直接在 Store 实例上调用 dispatch。
如果你在 React 中使用 Redux，react-redux 会提供 dispatch 。

惟一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，
却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它。
参数

actionCreators (Function or Object): 一个 action creator，或者键值是 action creators 的对象。

dispatch (Function): 一个 dispatch 函数，由 Store 实例提供。

返回值

(Function or Object): 一个与原对象类似的对象，只不过这个对象中的的每个函数值都可以直接 dispatch action。
如果传入的是一个函数，返回的也是一个函数。
*/
