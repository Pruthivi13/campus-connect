import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Notices from './pages/Notices';
import CampusMap from './pages/CampusMap';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/map" element={<CampusMap />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
