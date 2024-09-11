import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import PopulationChart from '../PopulationChart';

const CountryInfo = () => {
    const { countryCode } = useParams();
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            console.log('CountryCode:', countryCode);
            try {
                const response = await axios.get(`/v1/api/country/${countryCode}`);
                setCountryData(response.data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };
        fetchCountryData();
    }, [countryCode]);

    if (!countryData) return <div>Loading...</div>;

    const { name, flag, borderCountries, populationData } = countryData;

    return (
        <div>
            <h1>{name}</h1>
            <img src={flag} alt={`Flag of ${name}`} style={{ width: '150px' }} />
            <h2>Border Countries</h2>
            <ul>
                {borderCountries.map((border) => (
                    <li key={border.countryCode}>
                        <Link to={`/country/${border.countryCode}`}>
                            {border.commonName}
                        </Link>
                    </li>
                ))}
            </ul>
            <h2>Population Over Time</h2>
            <PopulationChart data={populationData} />
        </div>
    );
};

export default CountryInfo;