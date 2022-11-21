export enum SITE_ACTION_TYPES {
    FETCH_SITE_START = 'site/FETCH_SITE_START',
    FETCH_SITE_SUCCESS = 'site/FETCH_SITE_SUCCESS',
    FETCh_SITE_FAILED = 'site/FETCH_SITE_FAILED'
}

export type Site = {
    id: number,
    code: string,
    name: string
};