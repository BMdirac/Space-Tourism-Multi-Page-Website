import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Destination, Crew, Technology } from './pages';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Header />
        <Route path='/' />
        <Route path='/destination' element={<Destination /> }/>
        <Route path='/crew' element={<Crew /> }/>
        <Route path='/technology' element={<Technology /> }/>
      </Routes>
     </BrowserRouter>
    </>
  )
} 

export default App