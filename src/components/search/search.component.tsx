import { FC } from 'react';
// import {Checkbox, Input} from 'antd';
// import Select from 'react-select';

import 'antd/dist/antd.min.css';
import { Site } from '../../store/site/site.type';
// import {SearchFormContainer, SearchBoxContainer, SearchBoxLabel} from './search.styles';

type SearchProps = {
    sites: Site[]
}

const Search: FC<SearchProps> = ({ sites}) => {
    return(
        <div>
            <h2>Hello</h2>
        </div>
    )
}

export default Search;