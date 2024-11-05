//App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home_page/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Layout } from './components/base/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
