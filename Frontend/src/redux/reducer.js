import { ADD_TO_FAV, GET_MOVIE_SUCCESS, MOVIE_FALIURE, MOVIE_REQUEST } from "./actionType"



const initState={
    movies:[],
    favMovies:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case MOVIE_REQUEST:
            return {...state,isLoading:true}
        case GET_MOVIE_SUCCESS:
            return {...state,isLoading:false,movies:payload}
        case MOVIE_FALIURE:
            return {...state,isLoading:false,isError:true}
        case ADD_TO_FAV:
            return {...state,favMovies:[...state.favMovies,payload]}
        default:
            return state
    }
}