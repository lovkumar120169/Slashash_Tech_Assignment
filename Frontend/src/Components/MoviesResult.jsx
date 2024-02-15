import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { MoviesCard } from './MoviesCard'
export const MoviesResult = () => {
    const movies=useSelector((store)=>store.movies)
    
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"80%",margin:"auto",gap:"50px",paddingLeft:"60px"}}>
        {movies.length>0?movies.map((ele)=>{
            return (
                <MoviesCard item={ele}/>
            )
        }):<h2>Search For Movies or TV Series....</h2>}
    </div>
  )
}
