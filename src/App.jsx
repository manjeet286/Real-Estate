import { useState } from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './Components/Header'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
