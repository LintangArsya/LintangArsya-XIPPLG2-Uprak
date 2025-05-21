import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Page2 from './Page2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/Page2" element={<Page2></Page2>} />
      </Routes>
    </Router>
  </StrictMode>,
)