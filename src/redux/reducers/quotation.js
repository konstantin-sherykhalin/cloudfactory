import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import {initial} from '../initial';

// Постоянные
export const module = 'quotation';

export const FETCH_DATA_REQUEST	= 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS	= 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR	= 'FETCH_DATA_ERROR';

// Редуктор
export default function reducer(st=initial,data) {
	const {type,payload,error} = data;

	let {quotation} = st;

	if(type == FETCH_DATA_REQUEST) {
		quotation.loading = true;

	} else if(type == FETCH_DATA_SUCCESS) {
		quotation.loading = false;
		quotation.loaded = true;
		quotation.list = payload;
		quotation.error = null;

	} else if(type == FETCH_DATA_ERROR) {
		quotation.loading = false;
		quotation.loaded = false;
		quotation.error = error;
	}

	return Object.assign({},st);
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
		if(res.status == 200) {
			var data = yield res.json();
		} else {
			throw("Сервер полоникса не отвечает");
		}

		if(Math.random() < 0.3) throw("Случайно выпадающая ошибка для демонстрации");

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
