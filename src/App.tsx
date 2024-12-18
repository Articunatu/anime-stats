import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopList from './pages/top-list';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TopList />} />
            </Routes>
        </Router>
    );
};

export default App;
