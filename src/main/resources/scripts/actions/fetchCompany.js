'use strict';

import fetch from 'isomorphic-fetch';
import {normalize, Schema, arrayOf} from 'normalizr';
import * as types from '../constants/customerActionType';
import {checkStatus} from '../utils/fetchStatus';

export function fetchCompanyNews() {
	return dispatch => {
	  dispatch(requestCompany('compNews'));
	  return fetch('/customer/compNews')
	    .then(checkStatus)
	    .then(response => response.json())
	    .then(json => dispatch(receiveCompanyNews(json)))
	    .catch(json => dispatch(failureRequestCompanyNews(json)))
	}
}

function requestCompany(company) {
  return {
	type: types.REQUEST_COMPANY,
	company
  }
}

function receiveCompanyNews(entities) {
  return {
	type: types.RECEIVE_COMPANY,
	entities
  }

}

function failureRequestCompanyNews(entities) {
  return {
	type: types.FAILURE_COMPANY,
	entities
  }
}
