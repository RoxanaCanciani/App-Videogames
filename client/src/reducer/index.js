export const initialState = {
    videogames: [],
    allVideogames: [],
    platforms: [],
    genres: [],
    detail: [],
    
}
//console.log("estos son los detalles", initialState.detail)
//console.log("estos son los generos", initialState.videogames)


export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
                //a mi estado videogames que al inicio esta vacio, mandale todo lo que me trae la accion GET_COUNTRIES
            }
            case 'FILTER_BY_GENRES':
                const allVideogame = state.allVideogames;
                const filterVideogame =action.payload==='Todos'?allVideogame:
                allVideogame.filter(t => t.genres.find(e =>  e.name.toUpperCase().includes(action.payload )))
                console.log(action.payload)
                return {
                    ...state,
                    videogames: filterVideogame,
                    
                   }



            




                       
        


        case 'FILTER_VIDEOGAMES':
            const allVideogames = state.allVideogames;
            const filterVideogames=action.payload==='Api'?allVideogames.filter(el=>el.createdInBd!==action.payload):allVideogames.filter(el=>el.createdInBd===true );
        return {
            ...state,
            videogames: action.payload==='Todos'?allVideogames:filterVideogames,
        }

        case 'ORDER_BY_NAME' :
            let order = action.payload === "asc(a-z)" ? 
            state.videogames?.sort(function(a,b) {
                
                if(a.name> b.name) {
                  
                    return 1;
                }
                if( b.name > a.name){
                    return -1;
                }
                return 0;
            }) : 
            state.videogames?.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1;
                }
                if( b.name > a.name){
                    return 1;
                }
                return 0;
            })
            return{
                ...state ,
                videogames : order

        }

        case 'ORDER_BY_RATING' :
            let orderPerRating = action.payload === 'rating(men-may)' ?
            state.videogames.sort(function(a, b){
                if(a.rating > b.rating) {
                  
                    return 1;
                }
                if( b.rating > a.rating){
                    return -1;
                }
                return 0;
            }) : 
            state.videogames.sort(function(a,b) {
                if(a.rating > b.rating) {
                    return -1;
                }
                if( b.rating > a.rating){
                    return 1;
                }
                return 0;
            })
            return{
                ...state ,
                videogames : orderPerRating

        }

        case 'GET_VIDEOGAMES_BY_NAME':
            return {
                ...state,
                videogames: action.payload,
                }

                case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload,
                
            }

                

                    case 'GET_PLATFORMS':
            return {
                ...state,
                platforms: action.payload,
            }

            case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload,
            }

            case 'POST_VIDEOGAME':
                    return {
                        ...state,
                        
                    } 

            default:
                return state;
    }

    
}