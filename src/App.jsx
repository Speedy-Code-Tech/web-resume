import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LIGHTIMG from './assets/bg-light.jpg'
import DARKIMG from './assets/bg.jpg'
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
function App() {
  const MAINTHEME = "#010101";
  const YELLOW = "#F5C000"
  const WHITE = "#FCF8EF"

  const [theme, setTheme] = useState({})
  const THEME = {
    main: MAINTHEME,
    text: WHITE,
    subText: YELLOW,
    img:DARKIMG
  }
  return (
    <>
    {/* <Router> */}
      {/* <div className="container-fluid position-fixed " style={{background:THEME.main, zIndex:"10"}} > */}
        <Navbar themes={THEME} />
      {/* </div> */}
      {/* <div className="container-fluid p-0 m-0"> */}
      <Home themes={THEME}/>
      <About ThemesKo={THEME}/>
      <Project themes={THEME}/>
      <Contact themes={THEME}/>
      {/* </div> */}
      {/* <Routes>
        <Route path='/' element={<Home themes={THEME}/>}/>
        <Route path='/about' element={<About themes={THEME}/>}/>
      </Routes> */}
      {/* </Router> */}
    </>
  )
}

export default App