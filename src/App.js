//App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home_page/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
