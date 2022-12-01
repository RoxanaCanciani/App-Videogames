import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect, useState } from 'react';
import { getTipos,getGramajes,getAlto, getAncho, getPaginas, getLibros} from '../../action';
// import { Link } from 'react-router-dom';
// import Card from '../Card/Card';
// import Paged from '../Paged/Paged';
// import SearchBar from '../SearchBar/SearchBar';
// import { Fragment } from 'react';
// import styles from './Home.module.css';

export default function Home() {
const dispatch = useDispatch();

const tipos = useSelector(state => state.tipos);
const gramajes = useSelector(state => state.gramajes);
const alto = useSelector(state => state.alto);
const ancho= useSelector(state => state.ancho);
const paginas= useSelector(state => state.paginas);
const libros= useSelector(state => state.libros);
console.log("este es el alto", alto)

useEffect(() => {
    dispatch(getTipos());
    dispatch(getGramajes());
    dispatch(getAlto());
    dispatch(getAncho());
    dispatch(getPaginas());
    dispatch(getLibros());
}, [dispatch]);
// useEffect(()=>{
//     //setCurrentPage(1)
// },[allVideogames])

const[input, setInput] = useState({
    titulo:"",
    tipos: [],
    precioxKilo:[],
    alto:[],
    ancho: [],
    gramajes: [],
    paginas:[],
    libros: [],

})

function handlerOnChange (e){
    setInput({
        ...input,
        [e.target.titulo]:e.target.value
    })
    
}

    //const[order, setOrder] = useState('') 
    //const[orderRat,setOrderRat] =useState('')

    

//     const[currentPage, setCurrentPage] = useState(1);
     
//     const VideogamesPerPage = 15;
    
//     const lastVideogame = currentPage * VideogamesPerPage;
//     const indexFirstVideogame = lastVideogame - VideogamesPerPage;

//     const currentVideogames = allVideogames?.slice(indexFirstVideogame, lastVideogame);
     
// //me creo una constante para setear la pagina actual
//     const paged = (pageNumber) => {
//             setCurrentPage(pageNumber);
//         }

      


// function handleOnClick(e){
//     e.preventDefault();
//     dispatch(getTipos());//se vuelve a despachar la accion
//     //y me trae todos los videogames otra vez


function handlerDelete(e){
    setInput({
        ...input,
        tipos:input.tipos?.filter(el => el !== e)
    })
}

function handlerDe(e){
    setInput({
        ...input,
        libros:input.libros?.filter(el => el !== e)
    })
}

function handlerDel(e){
    setInput({
        ...input,
        paginas:input.paginas?.filter(el => el !== e)
    })
}

function handlerDelet(e){
    setInput({
        ...input,
        ancho:input.ancho?.filter(el => el !== e)
    })
}

function handlerDele(e){
    setInput({
        ...input,
        alto:input.alto?.filter(el => el !== e)
    })
}
function handlerDeleter(e){
    setInput({
        ...input,
        gramajes:input.gramajes?.filter(el => el !== e)
    })
}

// function handlerFilterGenres(e){
//     e.preventDefault();
//         dispatch(filterByGenres(e.target.value))
//         // setCurrentPage(1);
// }

// function filterByVideogames(e){
//     e.preventDefault();
//     dispatch(filterVideogames(e.target.value));
// }

// function handleSortName(e){
//     e.preventDefault();
//     dispatch(orderByName(e.target.value))
//     setCurrentPage(1);
//     setOrder(`Ordenado ${e.target.value}`)
// } 

// function orderRating(e){
//     e.preventDefault();
//     dispatch(orderByRating(e.target.value))
//     //para que me setee esa pagina en 1
//     setCurrentPage(1);
//     //me modifique el estado local y se renderice
//     setOrderRat(`Ordenado ${e.target.value}`)
// }
function handleSelect(e){
                setInput({
                    ...input,
                    tipos:[...input.tipos, e.target.value]
                    
                })
               
            }

            function handleSe(e){
                setInput({
                    ...input,
                    libros:[...input.libros, e.target.value]
                    
                })
               
            }

            function handleSel(e){
                setInput({
                    ...input,
                    paginas:[...input.paginas, e.target.value]
                    
                })
               
            }
            function handleSelecte(e){
                setInput({
                    ...input,
                    alto:[...input.alto, e.target.value]
                    
                })
               
            }

            function handleSele(e){
                setInput({
                    ...input,
                    ancho:[...input.ancho, e.target.value]
                    
                })
               
            }
            function handleSelec(e){
                setInput({
                    ...input,
                    gramajes:[...input.gramajes, e.target.value]
                    
                })
               
            }


return (
<>


               <h2>  <label>Titulo:</label>
                 <input name='name' type='text' placeholder='Nombre del libro' maxLength='20' value={input.titulo} onChange={handlerOnChange} />
                 </h2>

    <div><h3><label >Tipo/s de papel:</label>
                <select  onChange={handleSelect} >
                
                    <option value='otro'></option>
               {tipos?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                     
                </select>
                </h3>
                <ul>
                        {input.tipos?.map(e => (
                            <div >
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDelete(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>
                    </div>
                    
<h3><label >Alto:</label>
                <select  onChange={handleSelecte} >
                
                    <option value='todos'></option>
               {alto?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                     
                </select>
                </h3>
                <ul>
                        {input.alto?.map(e => (
                            <div >
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDele(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>
                   <h3> <label >Ancho:</label>
                    <select  onChange={handleSele} >
                
                    <option value='todos'></option>
               {ancho?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                     
                </select>
                </h3>
                <ul>
                        {input.ancho?.map(e => (
                            <div >
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDelet(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>

<h3><label >Gramaje:</label>
                <select  onChange={handleSelec} >
                
                    <option value='todos'></option>
               {gramajes?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                     
                </select>
                </h3>
                <ul>
                        {input.gramajes?.map(e => (
                            <div >
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDeleter(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>

                    <h3><label >Numero de paginas:</label>
                <select  onChange={handleSel} >
                
                    <option value='otro'></option>
               {paginas?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                     
                </select>
                </h3>
                <ul>
                        {input.paginas?.map(e => (
                            <div >
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDel(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>

                    <div><h3><label >Cantidad de Libros:</label>
                <select  onChange={handleSe} >
                
                    <option value='otro'></option>
               {libros?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                     
                </select>
                </h3>
                <ul>
                        {input.libros?.map(e => (
                            <div >
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDe(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>
                    </div>


                    </>
//     <div className={styles.home}>
//     <div>
//     <div className={styles.country}><h1>Videogames</h1></div>

// <Link to="/videogame"><button>Crea tu Videojuego</button></Link>
// <br/>
// <div>
// <button onClick={handleOnClick}>Volver a cargar</button>
// </div>

//     <select  onChange={e=> orderRating(e)}  >
//     <option value="Orden por Rating">Rating</option>
//     <option value="rating(men-may)">Rating de menor a mayor</option>
//     <option value="rating(may-men)">Rating de mayor a menor</option>
//     </select>



//     <select onChange={e=>handleSortName(e)} >
//     <option value="Orden Alfabetico">Orden Alfabetico</option>   
//     <option value="asc(a-z)"> Por orden alfabetico ascendente</option>
//     <option value="desc(z-a)">Por orden alfabetico descendente</option> 
//     </select>


//     <select onChange={(e)=>handlerFilterGenres(e)}>
//          <option value="Todos">Todos los Generos</option>
//         <option value="ACTION">Action</option>
//         <option value="ADVENTURE">Adventure</option>
//         <option value="RPG">Rpg</option>
//         <option value="INDIE">Indie</option>
//         <option value="SPORTS">Sports</option>
//         <option value="STRATEGY">Strategy</option>
//         <option value="SHOOTER">Shooter</option> 
//         <option value="PUZZLE">Puzzle</option>
//         <option value="MASSIVELY MULTIPLAYER">Massively</option>
//         <option value="RACING">Racing</option>
//         <option value="SIMULATION">Simulation</option>
//         <option value="ARCADE">Arcade</option>
//         <option value="FIGHTING">Fighting</option>
//         <option value="CASUAL">Casual</option>
//         <option value="FAMILY">Family</option>
//         <option value="PLATFORMER">Platformer</option>
      
                    
            
//     </select>


//     <select onChange={e=>filterByVideogames(e)} >
//         <option value="Todos">Todos los Videojuegos</option>
//         <option value="Api">Api</option>
//         <option value="Creados">Creados</option>
//     </select>



// <div className={styles.paginado}>
//     {/* para renderizar la paginacion, le paso el numero de videos por pagina, todos los videos con .length porque necesito su valor numerico  y el numero de la pagina, */}
//         <Paged VideogamesPerPage={VideogamesPerPage} 
//         allVideogames={allVideogames?.length}
//         paged={paged}/>

//         </div>

        
//         <div>
//         <SearchBar />
//         </div>

// <div className={styles.cards}>

    

//  {
  
//   currentVideogames?.map((el) => {
//                return(
//                 <Fragment key={el.id}>
               
//                    <Link to={'/home/' + el.id}>
//                    <Card  image={el.image} name={el.name} genres={el.genres}/>
//                    </Link>
//                 </Fragment>   
                   
//                );})}
// </div> 
        


// </div>


// </div>   
)
                        }                   