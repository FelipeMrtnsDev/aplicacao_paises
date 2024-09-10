import React from 'react';
import CountryList from '../../components/CountryList';

const CountryListPage = ({setData}) => {
    return (
        <div>
            <CountryList setData={setData} />
        </div>
    );
};

export default CountryListPage;