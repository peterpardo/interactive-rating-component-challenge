import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import ThankYou from './ThankYou';
import { RatingProvider } from './Context/RatingProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RatingProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/submit" element={<ThankYou/>}/> 
          </Routes>
      </BrowserRouter>
    </RatingProvider>
  </React.StrictMode>
);

