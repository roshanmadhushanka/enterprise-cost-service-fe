import {combineReducers} from 'redux';

import {siteReducer} from './site/site.reducer';

export const rootReducer = combineReducers({
    site: siteReducer
})