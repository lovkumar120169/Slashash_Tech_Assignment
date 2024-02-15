import React from 'react'
import { useSelector } from 'react-redux'
import { MoviesCard } from './MoviesCard'

export const Favourite = () => {
    const favPage=useSelector((store)=>store.favMovies)
    
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"80%",margin:"auto",gap:"50px",paddingLeft:"60px"}}>
        {
            favPage.length>0? favPage.map((ele)=>{
                return (
                    <MoviesCard item={ele} from={"fav"}/>
                )
            }):<h2>Favourite is empty</h2>
        }
    </div>
  )
}
