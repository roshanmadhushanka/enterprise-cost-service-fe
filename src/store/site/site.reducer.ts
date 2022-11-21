import {AnyAction} from 'redux';

import {fetchSiteStart, fetchSiteSuccess, fetchSiteFailed} from '../site/site.action';

export type SiteState = {
    readonly sites: [],
    readonly isLoading: boolean,
}

const INITIAL_STATE: SiteState = {
    sites: [],
    isLoading: false,
}

export const siteReducer = (state = INITIAL_STATE, action: AnyAction) => {

    if (fetchSiteStart.match(action)) {
        return {...state, isLoading: true};
    }

    if (fetchSiteSuccess.match(action)) {
        return {...state, isLoading: false, sites: action.payload};
    }

    if (fetchSiteFailed.match(action)) {
        return {...state, isLoading: false};
    }

    return state;
}