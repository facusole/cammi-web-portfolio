
import { Route, Routes } from 'react-router-dom'

import Home from '../Home/Home.jsx'
import AboutMe from '../About me/AboutMe.jsx'

import './App.css'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/about-me'} element={<AboutMe/>} />
      </Routes>
    </div>
  )
}

export default App
