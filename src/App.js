import React from 'react';
import './App.css';
import {Nav, Home, Contact, About, Services, Footer, Banner, Auli, Chardham, Chopta, NagTiba, ValleyFlower, Kedarkantha, Hotels} from './component'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <div className='app-banner'>
        <Banner/>
    </div>
    <div className='app-nav'>
        <Nav/>
    </div>

    <div className='app-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ouroffer' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/auli' element={<Auli/>}/>
      <Route path='/chopta' element={<Chopta/>}/>
      <Route path='/nagtiba' element={<NagTiba/>}/>
      <Route path='/valley' element={<ValleyFlower/>}/>
      <Route path='/chardham' element={<Chardham/>}/>
      <Route path='/kedarkan' element={<Kedarkantha/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
    </Routes>
    </div>
    <div className='app-footer'>
      <Footer/>
    </div>

    </Router>
    </>
  );
}

export default App;