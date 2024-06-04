import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ProductList/>} />
    </Routes>
  )
}
