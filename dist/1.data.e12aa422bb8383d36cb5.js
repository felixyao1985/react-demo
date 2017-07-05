webpackJsonp([1],{

/***/ 739:
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
	
	__webpack_require__(742);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Data = function (_BaseComponent) {
	  (0, _inherits3.default)(Data, _BaseComponent);
	  (0, _createClass3.default)(Data, null, [{
	    key: 'fetchData',
	    value: function fetchData(params, query) {
	      return [(0, _actions.getDataList)()];
	    }
	  }]);
	
	  function Data(props) {
	    (0, _classCallCheck3.default)(this, Data);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Data.__proto__ || (0, _getPrototypeOf2.default)(Data)).call(this, props));
	
	    _this.state = {
	      loadEnd: false
	    };
	    return _this;
	  }
	  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	  //-* component life cycle
	  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	
	
	  (0, _createClass3.default)(Data, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var me = this;
	      var dataList = me.props.data.dataList;
	
	
	      if (dataList.length == 0) {
	        this.refreshDataList();
	      } else {
	        me.setState((0, _objectAssign2.default)({}, me.state, {
	          loadEnd: true
	        }));
	      }
	    }
	  }, {
	    key: 'refreshDataList',
	    value: function refreshDataList() {
	      var me = this;
	      var actions = me.props.actions;
	
	      actions.getDataList().then(function (res) {
	        return _common.RcFormUtil.postPromiseHandler(res, null, null, function () {
	          me.setState((0, _objectAssign2.default)({}, me.state, {
	            loadEnd: true
	          }));
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var me = this;
	      var _me$props = me.props,
	          i18n = _me$props.base.i18n,
	          dataList = _me$props.data.dataList;
	
	      var Text = i18n.App[me.getClassName()];
	
	      if (me.state.loadEnd == false) {
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
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'title' },
	          Text.Title
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          loopDataList()
	        )
	      );
	
	      function loopDataList() {
	        return dataList.map(function (value, index) {
	          return _react2.default.createElement(
	            'li',
	            { key: index },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/data/' + value.id },
	              value.id,
	              '.',
	              value.name
	            )
	          );
	        });
	      }
	    }
	  }]);
	  return Data;
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
	    actions: (0, _redux.bindActionCreators)({ getDataList: _actions.getDataList }, dispatch)
	  };
	})(Data);

/***/ }),

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

/***/ 742:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=1.data.e12aa422bb8383d36cb5.js.map