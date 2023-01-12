import React from 'react'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

import Register from './pages/Register'
import Home from "./pages/Home"
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import MainRouter from './Components/MainRouter'





const App = () => {
  return (
    <div>
      <MainRouter/>
    </div>
  )
}

export default App
