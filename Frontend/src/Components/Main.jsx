import React from 'react'
import { Navbar } from './Navbar'
import { MoviesResult } from './MoviesResult'
import { Favourite } from './Favourite'

export const Main = () => {
    
  return (
    <div>
        <Navbar/>
        <MoviesResult/>
        <Favourite/>
    </div>
  )
}
