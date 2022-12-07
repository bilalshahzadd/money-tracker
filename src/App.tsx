import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {

  return (
    <>
      <Topbar />
      <Nav heading="Expensify" />
      <Main />
    </>
  );
}

export default App;
