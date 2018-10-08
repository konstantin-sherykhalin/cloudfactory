import {all} from 'redux-saga/effects';

import {saga as quotation_saga} from './reducers/quotation';

// Главная сага, которая исполняет все остальные саги
export default function* root_saga() {
	yield all([
		quotation_saga(),
	]);
}
