import {all,  call} from 'typed-redux-saga/macro';

import { siteSagas} from './site/site.saga';

export function* rootSaga() {
    yield all([
        siteSagas(),
    ]);
}