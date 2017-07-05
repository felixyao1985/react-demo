webpackJsonp([3],{

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

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    //-* DATE
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    case _const2.default.SET_LANGUAGE:
	      _common.SzLib.saveCookie('locale', action.locale);
	
	      return (0, _objectAssign2.default)({}, state, {
	        locale: action.locale,
	        i18n: action.i18n
	      });
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    //-* ERROR && FAIL
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    case _const2.default.ERROR:
	      // 接口错误，直接Alert
	      return state;
	    case _const2.default.FAIL:
	      // 服务器错误，直接Alert
	      console.log("ERROR:" + action.error);
	      return state;
	    default:
	      return state;
	  }
	};
	
	var _objectAssign = __webpack_require__(338);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _common = __webpack_require__(647);
	
	var _const = __webpack_require__(737);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var now = new Date();
	var isNode = typeof window === 'undefined';
	var initialState = !isNode && window.__INITIAL_STATE__.hasOwnProperty('base') ? window.__INITIAL_STATE__.base : {
	  i18n: null,
	  locale: _common.SzLib.loadCookie('locale') || _common.Configs.DEFAULT.LOCALE
	};
	
	;

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var response = action.response,
	      extra = action.extra;
	
	
	  var tmpDataDetail = state.dataDetail;
	
	  switch (action.type) {
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    //-* DATE
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    case _const2.default.GET_DATA_LIST:
	      return (0, _objectAssign2.default)({}, state, {
	        dataList: _utils2.default.storeList(_models.dataSchemas, null, response.data)
	      });
	    case _const2.default.GET_DATA_DETAIL:
	      tmpDataDetail[extra] = _utils2.default.store(_models.dataSchemas, state.dataDetail[extra], response.data);
	      return (0, _objectAssign2.default)({}, state, {
	        dataDetail: tmpDataDetail
	      });
	    case _const2.default.ADD_COUNT:
	      return (0, _objectAssign2.default)({}, state, {
	        count: state.count + 1
	      });
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    //-* ERROR && FAIL
	    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	    case _const2.default.ERROR:
	      // 接口错误，直接Alert
	      return state;
	    case _const2.default.FAIL:
	      // 服务器错误，直接Alert
	      console.log("ERROR:" + action.error);
	      return state;
	    default:
	      return state;
	  }
	};
	
	var _objectAssign = __webpack_require__(338);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _const = __webpack_require__(741);
	
	var _const2 = _interopRequireDefault(_const);
	
	var _utils = __webpack_require__(750);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _models = __webpack_require__(754);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var now = new Date();
	var isNode = typeof window === 'undefined';
	var initialState = !isNode && window.__INITIAL_STATE__.hasOwnProperty('data') ? window.__INITIAL_STATE__.data : {
	  dataList: [],
	  dataDetail: {},
	  count: 0
	};
	
	;

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isNan = __webpack_require__(751);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	var _typeof2 = __webpack_require__(651);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _objectAssign = __webpack_require__(338);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Utils = {
	  store: function store(schema, origin, object) {
	
	    var result = {};
	    for (var columnName in schema) {
	      if (!schema.hasOwnProperty(columnName)) {
	        continue;
	      }
	      var columnType = schema[columnName];
	      var columnValue = this.getColumnValue(object, columnName, columnType);
	      if (columnValue !== null) {
	        result[columnName] = columnValue;
	      }
	    }
	
	    return (0, _objectAssign2.default)({}, origin, result);
	  },
	  storeList: function storeList(schema, origin, objectList) {
	
	    var result = [];
	    for (var key in objectList) {
	      if (!objectList.hasOwnProperty(key)) {
	        continue;
	      }
	      result.push(this.store(schema, {}, objectList[key]));
	    }
	
	    return result;
	  },
	  getColumnValue: function getColumnValue(object, columnName, columnType) {
	
	    var columnValue = null;
	    if (!object.hasOwnProperty(columnName)) {
	      return columnValue;
	    }
	
	    return this.convertColumnType(object[columnName], columnType);
	  },
	  convertColumnType: function convertColumnType(columnValue, columnType) {
	    var value = columnValue;
	    switch (columnType) {
	      case 'object':
	        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) != 'object') {
	          value = {};
	        }
	        break;
	      case 'string':
	        value = value.toString();
	        if (typeof value != 'string') {
	          value = "";
	        }
	        break;
	      case 'number':
	        value = Number(value);
	        if (typeof value !== 'number' || (0, _isNan2.default)(value)) {
	          return 0;
	        }
	        break;
	    }
	
	    return value;
	  }
	};
	
	exports.default = Utils;

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(752), __esModule: true };

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(753);
	module.exports = __webpack_require__(304).Number.isNaN;

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(302);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

	'use strict';
	
	exports.dataSchemas = {
	  id: 'number',
	  name: 'string',
	  message: 'string',
	  memo: 'string'
	};

/***/ }),

/***/ 755:
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
	
	var _reactRedux = __webpack_require__(721);
	
	var _redux = __webpack_require__(583);
	
	var _common = __webpack_require__(647);
	
	var _BaseComponent2 = __webpack_require__(732);
	
	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);
	
	var _actions = __webpack_require__(736);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Home = function (_BaseComponent) {
	  (0, _inherits3.default)(Home, _BaseComponent);
	  (0, _createClass3.default)(Home, null, [{
	    key: 'fetchData',
	    value: function fetchData(params, query) {
	      var _SzLib$loadLocale = _common.SzLib.loadLocale(_common.Configs.DEFAULT.LOCALE),
	          locale = _SzLib$loadLocale.locale,
	          i18n = _SzLib$loadLocale.i18n;
	
	      return [(0, _actions.setLanguage)(locale, i18n)];
	    }
	  }]);
	
	  function Home(props) {
	    (0, _classCallCheck3.default)(this, Home);
	    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
	  }
	
	  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	  //-* component life cycle
	  //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
	
	
	  (0, _createClass3.default)(Home, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var me = this;
	      var _me$props = me.props,
	          actions = _me$props.actions,
	          base = _me$props.base;
	
	
	      if (_common.SzLib.isEmpty(base.i18n)) {
	        var _SzLib$loadLocale2 = _common.SzLib.loadLocale(base.locale),
	            locale = _SzLib$loadLocale2.locale,
	            i18n = _SzLib$loadLocale2.i18n;
	
	        actions.setLanguage(locale, i18n);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var me = this;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'React Kit'
	        ),
	        me.props.children
	      );
	    }
	  }]);
	  return Home;
	}(_BaseComponent3.default);
	
	// action
	
	
	exports.default = (0, _reactRedux.connect)(
	// bind state
	function (state) {
	  return {
	    base: state.base
	  };
	},
	// bind dispatch action
	function (dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)({ setLanguage: _actions.setLanguage }, dispatch)
	  };
	})(Home);

/***/ }),

/***/ 757:
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
	
	var _BaseComponent2 = __webpack_require__(732);
	
	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);
	
	__webpack_require__(758);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Admin = function (_BaseComponent) {
	  (0, _inherits3.default)(Admin, _BaseComponent);
	  (0, _createClass3.default)(Admin, null, [{
	    key: 'fetchData',
	    value: function fetchData(params, query) {
	      return [];
	    }
	  }]);
	
	  function Admin(props) {
	    (0, _classCallCheck3.default)(this, Admin);
	    return (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Admin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var me = this;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Admin Page'
	      );
	    }
	  }]);
	  return Admin;
	}(_BaseComponent3.default);
	
	exports.default = Admin;

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=3.home.e12aa422bb8383d36cb5.js.map