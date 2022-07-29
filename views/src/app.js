
import React, { useEffect, useState } from 'react';
import './app.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Contents from './pages/contents';
import Header from './pages/header';

export default function App(){
    return (
        <Layout className='app'>
            <Header />
                <Layout>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Navbar />} />
                            <Route path="/navbar" element={<Navbar />} />
                            <Route path="/contents" element={<Navbar />} />
                            <Route path="/contents/:board_id" element={<Contents />} />
                        </Routes>
                    </Router>
                </Layout>
        </Layout>
        
    );
};
