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
      actions.setLanguage(locale, i18n);
    }
  }

  render() {
    let me = this;
    return (
      <div>
        <h1>React Kit</h1>
        { me.props.children }
      </div>
    )
  }
}

export default connect(
  // bind state
  (state) => ({
    base: state.base
  }),
  // bind dispatch action
  (dispatch) => ({
    actions: bindActionCreators({ setLanguage }, dispatch)
  })
)(Home);
