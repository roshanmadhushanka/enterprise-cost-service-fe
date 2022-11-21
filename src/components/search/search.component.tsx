import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'antd/dist/antd.min.css';

import {fetchSiteStart} from '../../store/site/site.action';
import {selectSites} from '../../store/site/site.selector';

const Search = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSiteStart());
    }, [dispatch]);

    const sites = useSelector(selectSites)

    return (
        <div>
            <h2>Hello</h2>
            {sites.map(home => <h1>{home['name']}</h1>)}
        </div>
    );
}

export default Search;