webpackJsonp([2],{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDataList = getDataList;
	exports.getDataDetail = getDataDetail;
	exports.addCount = addCount;
	
	var _const = __webpack_require__(741);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	//-* CONST
	//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	function getDataList() {
	  return {
	    types: [_const2.default.SEND, _const2.default.GET_DATA_LIST, _const2.default.ERROR, _const2.default.FAIL],
	    promise: function promise(client) {
	      return client.API('fetchDataList', []);
	    }
	  };
	}
	
	function getDataDetail(id) {
	  return {
	    types: [_const2.default.SEND, _const2.default.GET_DATA_DETAIL, _const2.default.ERROR, _const2.default.FAIL],
	    promise: function promise(client) {
	      return client.API('fetchDataDetail', [id]);
	    },
	    extra: id
	  };
	}
	
	function addCount() {
	  return {
	    type: _const2.default.ADD_COUNT
	  };
	}

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SUFFIX = 'DATA:';
	
	exports.default = {
	  SEND: SUFFIX + 'SEND',
	  SUCCESS: SUFFIX + 'SUCCESS',
	  ERROR: SUFFIX + 'ERROR',
	  FAIL: SUFFIX + 'FAIL',
	
	  GET_DATA_LIST: SUFFIX + 'GET_DATA_LIST',
	  GET_DATA_DETAIL: SUFFIX + 'GET_DATA_DETAIL',
	  ADD_COUNT: SUFFIX + 'ADD_COUNT'
	};

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(708);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(646);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(712);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _createClass2 = __webpack_require__(703);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _inherits2 = __webpack_require__(713);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(336);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(519);
	
	var _reactRedux = __webpack_require__(721);
	
	var _redux = __webpack_require__(583);
	
	var _objectAssign = __webpack_require__(338);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _common = __webpack_require__(647);
	
	var _BaseComponent2 = __webpack_require__(732);
	
	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);
	
	var _actions = __webpack_require__(740);
	
	var _ShowDataDetail = __webpack_require__(745);
	
	var _ShowDataDetail2 = _interopRequireDefault(_ShowDataDetail);
	
	__webpack_require__(746);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var images = {
	  img: _common.SzLib.loadImage(__webpack_require__(747))
	};
	
	var DataDetail = function (_BaseComponent) {
	  (0, _inherits3.default)(DataDetail, _BaseComponent);
	  (0, _createClass3.default)(DataDetail, null, [{
	    key: 'fetchData',
	    value: function fetchData(params, query) {
	      return [(0, _actions.getDataDetail)(params.id)];
	    }
	  }]);
	
	  function DataDetail(props) {
	    (0, _classCallCheck3.default)(this, DataDetail);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (DataDetail.__proto__ || (0, _getPrototypeOf2.default)(DataDetail)).call(this, props));
	
	    _this.state = {
	      loadEnd: false
	    };
	    return _this;
	  }
	
	  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	  //-* component life cycle
	  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	
	
	  (0, _createClass3.default)(DataDetail, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var me = this;
	      var _me$props = me.props,
	          data = _me$props.data,
	          id = _me$props.params.id;
	
	
	      if (_common.SzLib.isEmpty(data) || !data.dataDetail.hasOwnProperty(id)) {
	        this.refreshDataDetail(id);
	      } else {
	        me.setState((0, _objectAssign2.default)({}, me.state, {
	          loadEnd: true
	        }));
	      }
	
	      me.autoAddCount();
	    }
	  }, {
	    key: 'refreshDataDetail',
	    value: function refreshDataDetail(id) {
	      var me = this;
	      var actions = me.props.actions;
	
	      actions.getDataDetail(id).then(function (res) {
	        return _common.RcFormUtil.postPromiseHandler(res, null, null, function () {
	          me.setState((0, _objectAssign2.default)({}, me.state, {
	            loadEnd: true
	          }));
	        });
	      });
	    }
	  }, {
	    key: 'autoAddCount',
	    value: function autoAddCount() {
	      var _this2 = this;
	
	      var me = this;
	      var actions = me.props.actions;
	
	      setTimeout(function () {
	        actions.addCount();
	        _this2.autoAddCount();
	      }, 10000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var me = this;
	      var _me$props2 = me.props,
	          i18n = _me$props2.base.i18n,
	          data = _me$props2.data,
	          id = _me$props2.params.id,
	          actions = _me$props2.actions;
	
	      var Text = i18n.App[me.getClassName()];
	
	      if (me.state.loadEnd === false || _common.SzLib.isEmpty(data)) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            Text.Title
	          ),
	          _react2.default.createElement(
	            'ul',
	            null,
	            'Loading...'
	          )
	        );
	      }
	
	      var dataDetail = data.dataDetail[id];
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'detail-title' },
	          Text.Title,
	          ' / Count: ',
	          data.count
	        ),
	        _react2.default.createElement(_ShowDataDetail2.default, { dataDetail: dataDetail }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/data' },
	            Text.Back
	          )
	        ),
	        _react2.default.createElement('img', { src: images.img })
	      );
	    }
	  }]);
	  return DataDetail;
	}(_BaseComponent3.default);
	
	exports.default = (0, _reactRedux.connect)(
	// bind state
	function (state) {
	  return {
	    base: state.base,
	    data: state.data
	  };
	},
	// bind dispatch action
	function (dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)({ getDataDetail: _actions.getDataDetail, addCount: _actions.addCount }, dispatch)
	  };
	})(DataDetail);

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(708);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(646);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(703);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(712);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(713);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(336);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BaseComponent2 = __webpack_require__(732);
	
	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ShowDataDetail = function (_BaseComponent) {
	  (0, _inherits3.default)(ShowDataDetail, _BaseComponent);
	
	  function ShowDataDetail(props) {
	    (0, _classCallCheck3.default)(this, ShowDataDetail);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (ShowDataDetail.__proto__ || (0, _getPrototypeOf2.default)(ShowDataDetail)).call(this, props));
	
	    _this.state = {
	      childCount: 0
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(ShowDataDetail, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var me = this;
	      me.autoAddCount();
	    }
	  }, {
	    key: 'autoAddCount',
	    value: function autoAddCount() {
	      var me = this;
	      setTimeout(function () {
	        me.setState({
	          childCount: me.state.childCount + 1
	        });
	        me.autoAddCount();
	      }, 1000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var me = this;
	      var dataDetail = me.props.dataDetail;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            'id:',
	            dataDetail.id
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'name:',
	            dataDetail.name
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'message:',
	            dataDetail.message
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'memo:',
	            dataDetail.memo
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'count:',
	            me.state.childCount
	          )
	        )
	      );
	    }
	  }]);
	  return ShowDataDetail;
	}(_BaseComponent3.default);
	
	ShowDataDetail.propTypes = {
	  dataDetail: _react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.number,
	    name: _react2.default.PropTypes.string,
	    message: _react2.default.PropTypes.string,
	    memo: _react2.default.PropTypes.string
	  })
	};
	
	exports.default = ShowDataDetail;

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "13a05f6416ff17fdfca18ecccc5b15df.png";

/***/ })

});
//# sourceMappingURL=2.dataDetail.e12aa422bb8383d36cb5.js.map