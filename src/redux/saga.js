import {all} from 'redux-saga/effects';

import {saga as quotation_saga} from './reducers/quotation';

export default function* rootSaga() {
	yield all([
		quotation_saga(),
	]);
}
