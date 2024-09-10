import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryListPage from './pages/CountryListPage';
import CountryInfoPage from './pages/CountryInfoPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CountryListPage />} />
                <Route path="v1/api/country/:countryCode" element={<CountryInfoPage />} />
            </Routes>
        </Router>
    );
};

export default App;