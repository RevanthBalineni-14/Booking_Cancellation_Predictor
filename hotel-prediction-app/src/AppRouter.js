// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PredictionForm from './PredictionForm';
import EdaPage from './EdaPage';
import TopBar from './TopBar'; 

const AppRouter = () => {
  return (
    <Router>
      <TopBar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/prediction" />} />
        <Route path="/prediction" element={<PredictionForm />} />
        <Route path="/eda" element={<EdaPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
