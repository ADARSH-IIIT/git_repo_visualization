import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import Landing_page  from './Landing_page.jsx';
import TreeVisualization from './TreeVisualization.jsx';

import SinglePage from "./SinglePage.jsx"; 



function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={< Landing_page />} /> 
      <Route path="/:owner/:repo/:branch" element={< TreeVisualization  />} /> 
      <Route path="/singlepage" element={<SinglePage />} /> 
    </Routes>
  );
}

export default MainRouter;
