import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SzLib } from '../../common';
import BaseComponent from '../BaseComponent.js'

// action
import { setLanguage } from '../../store/base/actions';

class HomeIndex extends BaseComponent {

  static fetchData(params, query) {
    return [];
  }

  constructor(props) {
    super(props);
  }

  render() {
    let me = this;
	console.log('HOMEINDEX render props ',me.props);
    const { actions, base: { i18n } } = me.props;
    const Text = i18n.App.Home;
    return (
      <div>
        <h1>{ Text.Title }</h1>
        <div>
          <Link to="/data">{ Text.LinkTo }</Link>
        </div>
        <div>
          <span><a href="#" onClick={ () => changeLanguage('zh_CN') }>CN</a></span>|
          <span><a href="#" onClick={ () => changeLanguage('en_US') }>EN</a></span>
        </div>
      </div>
    );

    function changeLanguage(language) {
      const { locale, i18n } = SzLib.loadLocale(language);
      actions.setLanguage(locale, i18n);
    }
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
)(HomeIndex);