import { Outlet } from 'react-router-dom'
import NavTab from './components/nav'
import Footer from './components/footer'
import './App.css'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // default mode is light

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }
  return (
    <div className={`${mode}-mode`}>
      <NavTab onToggleMode={toggleMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App