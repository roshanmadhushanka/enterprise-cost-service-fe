import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import 'antd/dist/antd.min.css';

import {fetchSiteStart} from '../../store/site/site.action';

const Search = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSiteStart());
    }, [dispatch]);

    return (
        <div>
            <h2>Hello</h2>
        </div>
    )
}

export default Search;