import {createSelector} from 'reselect';

import {RootState} from '../store';
import {SiteState} from './site.reducer';

export const selectSiteReducer = (state: RootState): SiteState => state.site;

export const selectSites = createSelector(
    [selectSiteReducer], (site) => site.sites
);