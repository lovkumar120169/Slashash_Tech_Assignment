import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFav } from '../redux/action'

export const MoviesCard = ({item,from=null}) => {
    const dispatch=useDispatch()

    const handlefavourite=()=>{
        dispatch(addToFav(item))
    }
  return (
    <div style={{width:"70%",padding:"10px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <img style={{width:"100%",height:"350px"}} src={item.Poster} alt="movieImg" />
        <p>Title: {item.Title}</p>
        <div>
            <p>Year: {item.Year}</p>
            <p>Type: {item.Type}</p>
        </div>
        {from=="fav"?<button>remove</button>:<button onClick={handlefavourite}>Add to favourite</button>}
    </div>
  )
}
