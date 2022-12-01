import axios from 'axios';
const GET_TODO = "GET_TODO";
const GET_TIPOS = "GET_TIPOS";
const GET_GRAMAJES = "GET_GRAMAJES";
const GET_ALTO = "GET_ALTO";
const GET_ANCHO = "GET_ANCHO";
const GET_PAGINAS = "GET_PAGINAS";
const GET_LIBROS = "GET_LIBROS";

// const FILTER_BY_GENRES= "FILTER_BY_GENRES";
// const FILTER_VIDEOGAMES= "FILTER_VIDEOGAMES";
// const ORDER_BY_NAME= "ORDER_BY_NAME";
// const ORDER_BY_RATING= "ORDER_BY_RATING";
// const GET_VIDEOGAMES_BY_NAME= "GET_VIDEOGAMES_BY_NAME";
// const GET_GENRES= "GET_GENRES";
// const GET_MEDIDAS= "GET_PLATFORMS";
// const GET_DETAIL= "GET_DETAIL";
// const CLEAN_DETAIL= "CLEAN_DETAIL";



    export function getTodo(){
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/todo");
            
            return dispatch({
                type : GET_TODO,
                payload: json.data,
                
            }) 
        }
    }

    export function getTipos(){
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/tipos");
            
            return dispatch({
                type : GET_TIPOS,
                payload: json.data,
                
            }) 
        }
    }

    export function getGramajes(){
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/gramaje");
            
            return dispatch({
                type : GET_GRAMAJES,
                payload: json.data,
                
            }) 
        }
    }

    export function getPaginas(){
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/paginas");
            
            return dispatch({
                type : GET_PAGINAS,
                payload: json.data,
                
            }) 
        }
    }

    export function getLibros(){
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/libros");
            
            return dispatch({
                type : GET_LIBROS,
                payload: json.data,
                
            }) 
        }
    }
    export function getAlto(){
        return async (dispatch) => {
            const res = await axios.get('http://localhost:3001/alto')
            dispatch({ 
                type: GET_ALTO, 
                payload: res.data })
        }
    }

    export function getAncho(){
        return async (dispatch) => {
            const res = await axios.get('http://localhost:3001/ancho')
            dispatch({ 
                type: GET_ANCHO, 
                payload: res.data })
        }
    }
    //-------------------------------------
    // export function getVideogames(){
    //     return function(dispatch){
    //         axios.get('http://localhost:3001/videogames')
    //         .then(resp=>{
    //             return dispatch({
    //                 type:GET_VIDEOGAMES,
    //                 payload:resp.data
    //             })
    //         })
    //     }
    // }
    //--------------------------------------------

    // export function getVideogames(){
    //     return function(dispatch){
    //         fetch('http://localhost:3001/videogames')
    //         .then(res=>res.json())
    //         .then(json=>{
    //             return dispatch({
    //                 type:GET_VIDEOGAMES,
    //                 payload:json
    //             })
    //         })
    //     }
    // }

    // export function filterByGenres (payload){
    //     console.log(payload)
    //       return(
    //           {
    //               type:FILTER_BY_GENRES,
    //               payload,
    //           })
          
    //   }

    // export function filterVideogames(payload){
    //     return{
    //         type: FILTER_VIDEOGAMES,
    //         payload,
    //     }
    // }

    // export function orderByName (payload){
    //     return {
    //         type : ORDER_BY_NAME,
    //         payload,
    //     }
    // }
    
    // export function orderByRating (payload){
    //     return {
    //         type : ORDER_BY_RATING,
    //         payload,
    //     }
    // }
      

    // export function getVideogamesByName(name){
    //     return async function(dispatch){
    //         try{
    //             var json= await axios.get(`http://localhost:3001/videogames?name=${name}` );
    //             return dispatch({
    //                 type: GET_VIDEOGAMES_BY_NAME,
    //                 payload: json.data,
    //             })
    //         }catch(error){
    //             console.log(error)
    //         }
    //         }
    // }
    //-----------------------------------------------------------
    // export function getVideogamesByName(name){
    //     return function(dispatch){
    //         axios.get(`http://localhost:3001/videogames?name=${name}`)
    //         .then(resp=>{
    //             return dispatch({
    //                 type:GET_VIDEOGAMES_BY_NAME,
    //                 payload: resp.data
    //             })
    //         })
    //     }
    // }

    // export function getDetail(id){
    //     return async function(dispatch){
            
    //         try{
    //             var json= await axios.get(`http://localhost:3001/videogame/${id}` );
    //             return dispatch({
    //                 type: GET_DETAIL,
    //                 payload: json.data,
    //             })
    //         }catch(error){
    //             console.log(error)
    //         }
    //         }
    // }

    
    


    // export function getGenres(){
    //     return async (dispatch) => {
    //         const res = await axios.get('http://localhost:3001/genres')
    //         dispatch({ 
    //             type: GET_GENRES, 
    //             payload: res.data })
    //     }
    // }

    // export function postVideogame (payload){
    //     return async function(dispatch){
    //         var json = await axios.post(`http://localhost:3001/videogame`,payload);
    //         return json
    //     }
    
    // } 

    // export function cleanDetail(id){
    //     return{
    //         type: CLEAN_DETAIL,
    //         payload: id,
    //     }
    // }

    