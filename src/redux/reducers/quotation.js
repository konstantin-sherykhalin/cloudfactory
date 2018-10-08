import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import {initial} from '../initial';

// Постоянные
export const module = 'quotation';

export const FETCH_DATA_REQUEST	= 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS	= 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR	= 'FETCH_DATA_ERROR';

// Редуктор
export default function reducer(state = initial.quotation,action) {
	const {type,payload,error} = action;

	switch (type) {
	case FETCH_DATA_REQUEST:
		return Object.assign(state,{loading:true});

	case FETCH_DATA_SUCCESS:
		return Object.assign(state,{loading:false,data:payload})

	case FETCH_DATA_ERROR:
		return Object.assign(state,{loading:false,error});

	default:
		return state;
	}
}

// Действие
export function fetch_data() {
	return {
		type: FETCH_DATA_REQUEST,
		payload: {},
	};
}

// Сага
export const fetch_data_saga = function* ({payload}) {
	try {
		let res = yield fetch('https://poloniex.com/public?command=returnTicker',{
			method: 'GET',
			mode: 'no-cors',
			crossDomain: true,
			headers: {
				'Accept':		'application/json',
				'Content-Type':	'application/json',
			},
		});
		let data = yield res.json();

		console.log(data);
		yield put({
			type: FETCH_DATA_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log('error',error);
		yield put({
			type: FETCH_DATA_ERROR,
			error,
		});
	}
};

export const saga = function* () {
  yield all([
    takeEvery(FETCH_DATA_REQUEST,fetch_data_saga),
  ]);
};
