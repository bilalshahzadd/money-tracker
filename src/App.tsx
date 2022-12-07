import React from 'react';
import { useState } from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {

  const [background, setBackground] = useState("bg-stone-300");
  const [textColor, setTextColor] = useState("text-[#121212]");


  return (
    <>
      <Topbar />
      <Nav heading="Expensify" background={background} color={textColor} />
      <Main />
    </>
  );
}

export default App;
