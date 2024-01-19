import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JsonServerContext from './context/JsonServerContext.jsx'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import Home from './pages/Home/Home.jsx'
import Menu from './pages/Menu/Menu.jsx'
import Location from './pages/Location/Location.jsx'
import MenuList from './pages/Menu/MenuList.jsx'
import IndividualMenu from './pages/IndividualMenu/IndividualMenu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <JsonServerContext>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path='/menu/:categoryId' element={<MenuList />} />
            <Route path="/menu/:categoryId/:itemId" element={<IndividualMenu />} />
            <Route path='/category' element={<MenuList />} />
            <Route path="/location" element={<Location />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </JsonServerContext>,
)
