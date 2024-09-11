import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, LinkCountry, UlContainer } from './styles';

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
        <Container>
            <h1>Countries List</h1>
            <UlContainer>
                {countries.map((country) => {
                    return(
                        <Card onClick={() => getCountryData(country.countryCode)} key={country.countryCode}>
                            <LinkCountry to={`/countryinfo/${country.name}`}>
                                {country.name}
                            </LinkCountry>
                        </Card>
                    )
                })}
            </UlContainer>
        </Container>
    );
};

export default CountryList;
