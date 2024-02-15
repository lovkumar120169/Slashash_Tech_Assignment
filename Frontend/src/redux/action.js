import axios from "axios"
import { ADD_TO_FAV, GET_MOVIE_SUCCESS, MOVIE_FALIURE, MOVIE_REQUEST } from "./actionType"
// import { GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FALIURE, TODO_REQUEST } from "./actionType"

export const movieRequest=(()=>{

})



// export const handleAdd=(title)=>(dispatch)=>{
//     let obj={
//         title:title,
//         status:false
//     }
//     dispatch(todoRequest())
//     axios.post("http://localhost:8080/todos",obj).then((res)=>{
//         dispatch(postTodoSuccess(res.data))
//     }).catch((err)=>{
//         dispatch(todoFaliure())
//     })
// }



// export const getTodoFunction=(dispatch)=>{
//     dispatch(todoRequest())
//     axios.get("http://localhost:8080/todos").then((res)=>{
//         dispatch(getTodoSuccess(res.data))
//     }).catch((err)=>{
//         dispatch(todoFaliure())
//     })
// }


// export const todoRequest=()=>{
//     return {type:TODO_REQUEST}
// }

// export const todoFaliure=()=>{
//     return {type:TODO_FALIURE}
// }

// export const getTodoSuccess=(payload)=>{
//     return {type:GET_TODO_SUCCESS,payload:payload}
// }

// export const postTodoSuccess=(payload)=>{
//     return {type:POST_TODO_SUCCESS,payload:payload}
// }

export const getMoviesRequest=()=>{
    return {type:MOVIE_REQUEST}
}

export const getMoviesFaliure=()=>{
    return {type:MOVIE_FALIURE}
}

export const getMoviesSuccess=(payload)=>{
    return {type:GET_MOVIE_SUCCESS,payload:payload}
}

export const addToFav=(payload)=>{
    return {type:ADD_TO_FAV,payload:payload}
}