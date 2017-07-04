"use strict";

var SagittaClient = function() {};
var domain = 'localhost:8080/mock';

SagittaClient.prototype.ajax = function (options) {
  options = options || {};
  options.type = (options.type || 'GET').toUpperCase();
  options.dataType = (options.dataType || 'json'). toLowerCase();
  var buildParam = function (condition) {
    var data = null;
    if (condition != null) {
      if (typeof condition == 'string') {
        data = condition;
      }
      if (typeof condition == 'object') {
        var arr = [];
        for (var dname in condition) {
          var dvalue = condition[dname];
          arr.push(encodeURIComponent(dname) + '=' + encodeURIComponent(dvalue));
        }
        data = arr.join('&');
      }
    }
    return data;
  };

  var url = options.url;
  var token;
  if (options.enableJWT === true && options.data.token) {
    token = options.data.token;
    delete options.data.token;
  }
  if (options.enableJWT === true && token == undefined) {
    //return Promise.reject("token is missing");
  }
  var params = buildParam(options.data);
  var res;

  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  return new Promise(function (resolve, reject){
    if (options.type == 'GET' || options.type == 'DELETE') {
      if (params !== null) {
        url = url + '?' + params;
      }
      xhr.open(options.type, url, true);
    } else if (options.type == 'POST' || options.type == 'PUT' || options.type == 'PATCH') {
      xhr.open(options.type, url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    // enable jwt
    if (token) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    }
    xhr.send(params);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var status = xhr.status;
        var response = xhr.responseText;
        if (status >= 200 && status < 300) {
          if (options.dataType == 'json') {
            response = JSON.parse(response);
          } else if (options.dataType == 'xml') {
            response = xhr.responseXML;
          }
          res = {response: response, statusText: xhr.statusText, statusCode: xhr.status};
          resolve(res);
        } else {
          reject(response);
        }
      }
    }

  });
};

SagittaClient.prototype.handleParams = function (uri, params, aggParams, requiredParams) {
  var data = {};

  // replace ":param" in uri
  aggParams.forEach(function(key, index) {
    var value = params[index];
    if (typeof value === 'undefined') {
      return;
    }
    if (requiredParams.indexOf(key) >= 0 && (value === '' || value === undefined)) {
      throw new Error('Param ' + key + ' is required!');
    }
    // if in uri
    if (uri.match(':' + key) !== null) {
      uri = uri.replace(':' + key, value);
    } else {
      data[key] = value;
    }
  });

  return { uri: uri, data: data };
};

SagittaClient.prototype.fetchDataList = function() {
  var _this = this;
  var uri = 'fetchDataList.json';
  var aggParams = [];
  var requiredParams = [];

  var data = null;
  try {
    data = _this.handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var url = 'http://' + domain +'/' + data.uri;
  return new Promise(function(resolve, reject) {
    _this.ajax({
      url:      url,
      type:     'GET',
      timeout:  5000,
      enableJWT:false,
      data:     data.data
    }).then(function(res) {
      resolve(res);
    }).catch(function(err) {
      reject(err);
    });
  });
};

SagittaClient.prototype.fetchDataDetail = function(id) {
  var _this = this;
  var uri = 'fetchDataDetail' + id + '.json';
  var aggParams = [id];
  var requiredParams = [id];

  var data = null;
  try {
    data = _this.handleParams(uri, arguments, aggParams, requiredParams)
  } catch (err) {
    return Promise.reject(err);
  }

  var url = 'http://' + domain +'/' + data.uri;
  return new Promise(function(resolve, reject) {
    _this.ajax({
      url:      url,
      type:     'GET',
      timeout:  5000,
      enableJWT:false,
      data:     data.data
    }).then(function(res) {
      resolve(res);
    }).catch(function(err) {
      reject(err);
    });
  });
};

module.exports = new SagittaClient();
