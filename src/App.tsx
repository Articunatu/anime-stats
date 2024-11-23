import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimeProvider } from './hooks/anime-provider';
import TopList from './pages/top-list';
import UserList from './pages/user-list';

const App: React.FC = () => {
    return (
        <AnimeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<TopList />} />
                    <Route path="/user-list" element={<UserList />} />
                </Routes>
            </Router>
        </AnimeProvider>
    );
};

export default App;
