import {combineReducers} from 'redux';

import {initial} from '../initial';

import quotation_reducer,{module as quotation_module} from './quotation';

export default combineReducers({
	data: (state=initial) => state,
	[quotation_module]: quotation_reducer,
});
