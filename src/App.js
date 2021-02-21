import React, { useState } from 'react'
import  {v4 as uuidv4 } from 'uuid'
import Hero from './components/Hero'
import './App.css';

const App = () => {

  return (
    <div className="App">
<Hero />
    </div>
  );
}

export default App;
