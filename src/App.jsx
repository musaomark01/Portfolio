import { Outlet } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App