import CONST from './const.js';

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//-* CONST
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
export function getDataList() {
  return {
    types: [CONST.SEND, CONST.GET_DATA_LIST, CONST.ERROR, CONST.FAIL],
    promise: (client) => client.API('fetchDataList', [

    ])
  };
}

export function getDataDetail(id) {
  return {
    types: [CONST.SEND, CONST.GET_DATA_DETAIL, CONST.ERROR, CONST.FAIL],
    promise: (client) => client.API('fetchDataDetail', [
      id
    ]),
    extra: id
  };
}

export function addCount() {
  return {
    type: CONST.ADD_COUNT
  };
}


