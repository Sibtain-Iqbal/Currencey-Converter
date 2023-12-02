import React, { useState } from 'react';
import './App.css';
import { InputBox } from './Components/InputBox'; 
import useCurrencyInfo from './hooks/useCurrencyInfo'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-orange-300 text-5xl'>hello</h1>
      <InputBox />
    </>
  );
}

export default App;
