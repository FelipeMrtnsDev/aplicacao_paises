import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountryList = () => {
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

    return (
        <div>
            <h1>Countries List</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.iso2}>
                        <Link to={`/country/${country.iso2}`}>
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
