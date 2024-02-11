/* eslint-disable */
'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './dashboard/invoices/page'

const AppRoutes = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/dashboard/inv" element={<Invoices />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;