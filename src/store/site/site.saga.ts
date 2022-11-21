import {call, put, takeEvery} from 'typed-redux-saga/macro';

import {fetchSiteSuccess, fetchSiteFailed } from './site.action';
import SiteApi from '../../external/api/site/site.api';

import {SITE_ACTION_TYPES} from './site.type';
import {Site} from './site.type';

export function* fetchSites() {
    try {
        let sites: Site[] = yield call(SiteApi.getAllSites)
        yield put(fetchSiteSuccess(sites));
    } catch (e) {
        yield put((fetchSiteFailed()))
    }
}

export function* siteSagas() {
    yield takeEvery(SITE_ACTION_TYPES.FETCH_SITE_START, fetchSites);
}