import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Products from './pages/Products'
import Reference from './pages/Reference'

function App() {

  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Reference />
    </>
  )
}

export default App
