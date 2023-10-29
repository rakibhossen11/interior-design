import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Products from './pages/Products'
import Reference from './pages/Reference'
import Care from './pages/Care'
import Footer from './pages/Footer'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Hero />
      <Services />
      <Products />
      <Reference />
      <Care />
      <Footer />
    </div>
  )
}

export default App
