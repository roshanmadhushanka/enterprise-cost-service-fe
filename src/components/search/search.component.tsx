import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import 'antd/dist/antd.min.css';

import {fetchSiteStart} from '../../store/site/site.action';
import {selectSites} from '../../store/site/site.selector';
import {SearchBoxContainer, SearchBoxLabel, SearchFormContainer} from "./search.styles";

const Search = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSiteStart());
    }, [dispatch]);

    const sites = useSelector(selectSites).map(site => ({id: site['id'], label:  site['name']}));

    return (
        <SearchFormContainer>
            <SearchBoxContainer>
                <SearchBoxLabel>Site</SearchBoxLabel>
                <Select
                    showSearch
                    style={{ width: 250 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    options={sites}
                />
            </SearchBoxContainer>
        </SearchFormContainer>
    );
}

export default Search;