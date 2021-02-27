import React, { useState } from 'react';
import Menu from './Menu'
import Footer from './Footer'
import Timer from './Timer'
import Stats from './Stats'
import Settings from './Settings'
import '../styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('timer')

  const renderCurrentPage = () => {
    if (currentPage === 'timer') return <Timer />
    else if (currentPage === 'stats') return <Stats />
    else if (currentPage === 'settings') return <Settings />
  }

  return (
    <div className="App">
      <Menu />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;
