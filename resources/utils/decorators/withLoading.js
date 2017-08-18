import React, {Component} from 'react';
import {Spin} from 'antd';
export default function withLoading(loadingCheck) {
  return function (WrappedComponent) {
    return class HOC extends WrappedComponent {
      componentWillUpdate(nextProps, nextState) {
        //console.log('withLoading将会更新');
      }
      render() {
		//console.log('withLoading loadingCheck',this.state);
        if (loadingCheck(this.state)) {
		  /*
          return <Spin tip="加载中" size="large">
            {super.render()}
          </Spin>
		  */
          return <Spin tip="加载中" size="large">
			HOCloading
            <WrappedComponent {...this.props}/>
          </Spin>
        } else {
          return <div >
			  HOCloaded
			<WrappedComponent {...this.props}/>
          </div>
        }
      }
    }
  }
}
/*
// 使用
@withLoading(props => {
  return props.IndexStore.accountList.length == 0;
})
*/