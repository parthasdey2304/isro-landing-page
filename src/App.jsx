import React from 'react';
import Navbar from './Components/Navbar';
import background1 from "./assets/home1.png";
import background2 from "./assets/pluto.jpg";

function App() {
  return (
    <div className='w-full h-screen flex-col'>
        <div className='w-full relative h-screen bg-blue-600'></div>
        <div className='w-full relative h-screen bg-green-600'></div>
        <div className='w-full relative h-screen bg-red-600'></div>
    </div>
  )
}

export default App;