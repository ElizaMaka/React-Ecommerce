import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.jsx'
import Footer from './components/Footer/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
