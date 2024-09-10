import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountryList = ({setData}) => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('/v1/api/countries');
                
                
                setCountries(response.data);
            } catch (error) {
                console.log('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, []);

    const getCountryData = async (countryId) => {
        const response2 = await axios.get(`/v1/api/country/${countryId}`);
        console.log(response2.data)
        setData(response2.data)
    }

    return (
        <div>
            <h1>Countries List</h1>
            <ul>
                {countries.map((country) => {
                    return(
                        <li onClick={() => getCountryData(country.countryCode)} key={country.countryCode}>
                            <Link to={`/countryinfo/${country.name}`}>
                                {country.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default CountryList;
