import React from 'react';
import PortfolioNavbar from './components/Navbar';
import Home from './components/Home'; // <-- You forgot this

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Home /> {/* <-- This renders your homepage */}
    </>
  );
}

export default App;
