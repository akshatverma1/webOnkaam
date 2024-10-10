import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import Errorr from './Error.jsx';
import Bottomnavfunction from './Bottom_navigation.jsx';
import Bnav from './Bottom_nav.jsx';
import Arcomponents from './Augmented_Reality/ar.jsx';
createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/error' element={<Errorr />} />
      </Routes>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      <Routes>
      <Route path="/ar" element={<Arcomponents/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Bnav></Bnav> */}
    </div>
)
