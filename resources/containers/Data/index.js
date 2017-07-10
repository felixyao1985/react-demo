import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import objectAssign from 'object-assign'  //是轻量级 React 类状态更新快捷方式
import { SzLib, RcFormUtil } from '../../common'
import BaseComponent from '../BaseComponent.js'

import { getDataList } from '../../store/data/actions'

import './Data.scss'

class Data extends BaseComponent {

  static fetchData(params, query) {
    return [getDataList()];
  }

  constructor(props) {
    super(props);
    this.state = {
      loadEnd: false
    }
  }
  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  //-* component life cycle
  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  componentWillMount() {
    let me = this;
    const { data: { dataList } } = me.props;

    if (dataList.length == 0) {
      this.refreshDataList();
    } else {
      me.setState(objectAssign({}, me.state, {
        loadEnd: true
      }));
    }
  }

  refreshDataList() {
    let me = this;
    const { actions } = me.props;
    actions.getDataList()
      .then((res) => RcFormUtil.postPromiseHandler(
        res, null, null,
        () => {
          me.setState(objectAssign({}, me.state, {
            loadEnd: true
          }));
        }
      ));
  }

  render() {
    let me = this;
    const { base: { i18n }, data: { dataList } } = me.props;
    const Text = i18n.App[me.getClassName()];

    if (me.state.loadEnd == false) {
      return (
        <div>
          <h1>{ Text.Title }</h1>
          <ul>
            Loading...
          </ul>
        </div>
      )
    }

    return (
      <div>
        <h1 className="title">{ Text.Title }</h1>
        <div>
          { loopDataList() }
        </div>
      </div>
    );

    function loopDataList() {
      return dataList.map(
        (value, index) => {
          return (
            <li key={ index }>
              <Link to={`/data/${value.id}`}>
                { value.id }.{value.name}
              </Link>
            </li>
          );
        }
      );
    }
  }
}

export default connect(
  // bind state
  (state) => ({
    base: state.base,
    data: state.data
  }),
  // bind dispatch action
  (dispatch) => ({
    actions: bindActionCreators({ getDataList }, dispatch)
  })
)(Data);
