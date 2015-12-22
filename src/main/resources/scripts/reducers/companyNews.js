'use strict';

import * as types from '../constants/customerActionType';

const initState = {
	number: 0,
	increaseRate: [],
	isFetching: false,
	invalidate: true
}

export function compNews(state = initState, action) {
	switch(action.type) {
	  case types.REQUEST_COMPANY:
	    return Object.assign({}, state, {
	      isFetching: true,
	      invalidate: true
	    })
	  case types.RECEIVE_COMPANY:
	    let {number, increaseRate} = action.entities;
	    return Object.assign({}, state, {
	    	number,
	    	increaseRate,
	    	invalidate: false,
	    	isFetching:false
	    })
	  case types.FAILURE_COMPANY:
	    return Object.assign({}, state, {
	      isFetching: false,
	      invalidate: true
	    })
	  default:
	    return state;
	}
}