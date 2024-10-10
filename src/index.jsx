import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import Errorr from './Error.jsx';
import Bottomnavfunction from './Bottom_navigation.jsx';
import Bnav from './Bottom_nav.jsx';
createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/error' element={<Errorr />} />
      </Routes>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    <Bnav></Bnav>
    </>
)
