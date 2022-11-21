import { FC, useState } from 'react';
import {Checkbox, Input} from 'antd';
import Select from 'react-select';

import 'antd/dist/antd.min.css';
import { Site } from '../../store/site/site.type';
import {SearchFormContainer, SearchBoxContainer, SearchBoxLabel} from './search.styles';

type SearchProps = {
    sites: Site[]
}

const Search: FC<SearchProps> = ({ sites}) => {

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    return(
        <SearchFormContainer>
            <SearchBoxContainer>
                <SearchBoxLabel>Site</SearchBoxLabel>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={sites[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={sites}
                />
            </SearchBoxContainer>
            <SearchBoxContainer>
                <SearchBoxLabel>Item</SearchBoxLabel>
                <Input placeholder="Basic usage" />
            </SearchBoxContainer>

            <div
                style={{
                    color: 'hsl(0, 0%, 40%)',
                    display: 'inline-block',
                    fontSize: 12,
                    fontStyle: 'italic',
                    marginTop: '1em',
                }}
            >
                <Checkbox
                    checked={isClearable}
                    onChange={() => setIsClearable((state) => !state)}
                >
                    Clearable
                </Checkbox>
                <Checkbox
                    checked={isSearchable}
                    onChange={() => setIsSearchable((state) => !state)}
                >
                    Searchable
                </Checkbox>
                <Checkbox
                    checked={isDisabled}
                    onChange={() => setIsDisabled((state) => !state)}
                >
                    Disabled
                </Checkbox>
                <Checkbox
                    checked={isLoading}
                    onChange={() => setIsLoading((state) => !state)}
                >
                    Loading
                </Checkbox>
                <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
                    RTL
                </Checkbox>
            </div>
        </SearchFormContainer>
    );
}

export default Search;