import {Site, SITE_ACTION_TYPES} from './site.type';
import {Action, ActionWithPayload, createAction, withMatcher} from '../../utils/reducer.utils';

export type FetchSiteStart = Action<SITE_ACTION_TYPES.FETCH_SITE_START>;

export type FetchSiteSuccess = ActionWithPayload<SITE_ACTION_TYPES.FETCH_SITE_SUCCESS, Site[]>;

export type FetchSiteFailed = Action<SITE_ACTION_TYPES.FETCh_SITE_FAILED>;

export const fetchSiteStart = withMatcher(():
    FetchSiteStart => createAction(SITE_ACTION_TYPES.FETCH_SITE_START));

export const fetchSiteSuccess = withMatcher((siteArray: Site[]):
    FetchSiteSuccess => createAction(SITE_ACTION_TYPES.FETCH_SITE_SUCCESS, siteArray));

export const fetchSiteFailed = withMatcher(():
    FetchSiteFailed => createAction(SITE_ACTION_TYPES.FETCh_SITE_FAILED));

