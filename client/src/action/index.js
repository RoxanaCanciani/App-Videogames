import axios from 'axios';
 const GET_VIDEOGAMES = "GET_VIDEOGAMES";
const FILTER_BY_GENRES= "FILTER_BY_GENRES";
const FILTER_VIDEOGAMES= "FILTER_VIDEOGAMES";
const ORDER_BY_NAME= "ORDER_BY_NAME";
const ORDER_BY_RATING= "ORDER_BY_RATING";
const GET_VIDEOGAMES_BY_NAME= "GET_VIDEOGAMES_BY_NAME";
const GET_GENRES= "GET_GENRES";
const GET_PLATFORMS= "GET_PLATFORMS";
const GET_DETAIL= "GET_DETAIL";


    export function getVideogames(){

        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/videogames");
            
            return dispatch({
                type : GET_VIDEOGAMES,
                payload: json.data,
                
            }) 
        }
    }

    export function filterByGenres (payload){
        console.log(payload)
          return(
              {
                  type:FILTER_BY_GENRES,
                  payload,
              })
          
      }

    export function filterVideogames(payload){
        return{
            type: FILTER_VIDEOGAMES,
            payload,
        }
    }

    export function orderByName (payload){
        return {
            type : ORDER_BY_NAME,
            payload,
        }
    }
    
    export function orderByRating (payload){
        return {
            type : ORDER_BY_RATING,
            payload,
        }
    }
      

    export function getVideogamesByName(name){
        return async function(dispatch){
            try{
                var json= await axios.get(`http://localhost:3001/videogames?name=${name}` );
                return dispatch({
                    type: GET_VIDEOGAMES_BY_NAME,
                    payload: json.data,
                })
            }catch(error){
                console.log(error)
            }
            }
    }

    export function getDetail(id){
        return async function(dispatch){
            
            try{
                var json= await axios.get(`http://localhost:3001/videogame/${id}` );
                return dispatch({
                    type: GET_DETAIL,
                    payload: json.data,
                })
            }catch(error){
                console.log(error)
            }
            }
    }

    
    export function getPlatforms(){
        return async (dispatch) => {
            const res = await axios.get('http://localhost:3001/platforms')
            dispatch({ 
                type: GET_PLATFORMS, 
                payload: res.data })
        }
    }


    export function getGenres(){
        return async (dispatch) => {
            const res = await axios.get('http://localhost:3001/genres')
            dispatch({ 
                type: GET_GENRES, 
                payload: res.data })
        }
    }

    export function postVideogame (payload){
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/videogame`,payload);
            return json
        }
    
    } 