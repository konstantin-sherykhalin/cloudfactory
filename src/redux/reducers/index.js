import {combineReducers} from 'redux';

import quotation_reducer,{module as quotation_module} from './quotation';

export default combineReducers({
	[quotation_module]: quotation_reducer,
});
