import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import 'antd/dist/antd.min.css';

import {fetchSiteStart} from '../../store/site/site.action';
import {selectSites} from '../../store/site/site.selector';

const Search = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSiteStart());
    }, [dispatch]);

    const sites = useSelector(selectSites).map(site => ({id: site['id'], label:  site['name']}));

    return (
        <div>
            <h2>Hello</h2>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                options={sites}/>
        </div>
    );
}

export default Search;