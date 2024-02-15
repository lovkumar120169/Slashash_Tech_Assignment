import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getMoviesFaliure, getMoviesRequest, getMoviesSuccess } from '../redux/action'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [inputVal, SetInputValue] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getMoviesRequest)
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=73898109&s=${inputVal}`).then((res) => {
            dispatch(getMoviesSuccess(res.data.Search))
            console.log(res.data.Search)
        }).catch((err) => {
            dispatch(getMoviesFaliure)
        })
    }


    return (
        <div style={{ backgroundColor: "black",padding:"30px",marginBottom:"30px"}}>
            <div style={{ display: "flex", justifyContent:"space-around", alignItems:"center" }}>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <input style={{ fontSize: "24px", padding: "5px 10px", border: "none" }} type="text" onChange={(e) => SetInputValue(e.target.value)} placeholder='search for movies' />
                        <input style={{ fontSize: "24px", padding: "5px 10px", color: "white", backgroundColor: "red", border: "none" }} type="submit" />
                    </form>
                </div>
                <div>
                    <Link style={{ fontSize: "24px", color: "white", marginRight: "10px" }} to={"/fav"}>Favourite</Link>
                    <Link style={{ fontSize: "24px", color: "white", marginLeft: "10px" }} to={"/"}>Home</Link>
                </div>
            </div>
        </div>
    )
}
