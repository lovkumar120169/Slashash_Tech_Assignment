import React from 'react'
import { Navbar } from './Navbar'
import { Route, Routes } from 'react-router-dom'
import { MoviesResult } from './MoviesResult'
import { Favourite } from './Favourite'

export const AllRoutes = () => {
  return (
    
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<MoviesResult/>}/>
            <Route path='/fav' element={<Favourite/>}/>
        </Routes>
    </div>
  )
}
