"use strict";
var domain = 'localhost:8080/mock';

class SagittaClient {

  ajax (options) {
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = (options.dataType || 'json'). toLowerCase();

    const buildParam = (condition) => {
      let data = null;
      if (condition != null) {
        if (typeof condition == 'string') {
          data = condition;
        }
        if (typeof condition == 'object') {
          let arr = [];
          for (let dname in condition) {
            let dvalue = condition[dname];
            arr.push(encodeURIComponent(dname) + '=' + encodeURIComponent(dvalue));
          }
          data = arr.join('&');
        }
      }
      return data;
    };

    let url = options.url;
    let token;
    if (options.enableJWT === true && options.data.token) {
      token = options.data.token;
      delete options.data.token;
    }
    if (options.enableJWT === true && token == undefined) {
      return Promise.reject("token is missing");
    }

    let xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    let params = buildParam(options.data);
    let res;
    return new Promise((resolve, reject) => {
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

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          let status = xhr.status;
          let response = xhr.responseText;
          if (status >= 200 && status < 300) {
            if (options.dataType == 'json') {
              response = JSON.parse(response);
            } else if (options.dataType == 'xml') {
              response = xhr.responseXML;
            }
            res = { response: response, statusText: xhr.statusText, statusCode: xhr.status };
            resolve(res);
          } else {
            reject(response);
          }
        }
      }

    });
  }

  handleParams(uri, params, aggParams, requiredParams) {
    let data = {};

    // replace ":param" in uri
    aggParams.forEach((key, index) => {
      const value = params[index];
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
  }

  fetchDataList() {
    let _this = this;
    let uri = '/fetchDataList.json';
    let aggParams = [];
    let requiredParams = [''];

    let data = null;
    try {
      data = _this.handleParams(uri, arguments, aggParams, requiredParams)
    } catch (err) {
      return Promise.reject(err);
    }

    let url = 'http://' + domain +'/' + data.uri;
    return new Promise((resolve, reject) => {
      _this.ajax({
        url:        url,
        type:       'GET',
        timeout:    5000,
        enableJWT:  false,
        data:       data.data
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  fetchDataDetail(id) {
    let _this = this;
    let uri = 'fetchDataDetail' + id + '.json';
    let aggParams = [id];
    let requiredParams = [id];

    let data = null;
    try {
      data = _this.handleParams(uri, arguments, aggParams, requiredParams)
    } catch (err) {
      return Promise.reject(err);
    }

    let url = 'http://' + domain +'/' + data.uri;
    return new Promise((resolve, reject) => {
      _this.ajax({
        url:        url,
        type:       'GET',
        timeout:    5000,
        enableJWT:  false,
        data:       data.data
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}

export default new SagittaClient();