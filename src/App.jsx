import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryListPage from './pages/CountryListPage';
import CountryInfoPage from './pages/CountryInfoPage';
import { useState } from 'react';
import CountryInfos from './pages/CountryInfos';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
    const [data, setData] = useState({})
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<CountryListPage setData={setData} />} />
                <Route path="v1/api/country/:countryCode" element={<CountryInfoPage />} />
                <Route path="/countryinfo/:id" element={<CountryInfos data={data} />} />
            </Routes>
        </Router>
    );
};

export default App;