import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Home } from './components';
import { Destination, Crew, Technology } from './pages';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/destination' element={<Destination /> }/>
        <Route path='/crew' element={<Crew /> }/>
        <Route path='/technology' element={<Technology /> }/>
      </Routes>
     </BrowserRouter>
    </>
  )
} 

export default App