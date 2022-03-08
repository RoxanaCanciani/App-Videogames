import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect, useState } from 'react';
import { getVideogames, filterByGenres, filterVideogames, orderByName, orderByRating} from '../../action';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';
import { Fragment } from 'react';
import styles from './Home.module.css';

export default function Home() {
const dispatch = useDispatch();

const allVideogames = useSelector(state => state.videogames);

useEffect(() => {
    dispatch(getVideogames());
}, [dispatch]);

    const[order, setOrder] = useState('') 
    const[orderRat,setOrderRat] =useState('')

    const[currentPage, setCurrentPage] = useState(1);
     
    const VideogamesPerPage = 15;
    const lastCountry = currentPage * VideogamesPerPage;
    const firstCountry = lastCountry - VideogamesPerPage;

    const currentCountries = allVideogames?.slice(firstCountry, lastCountry);
     
//me creo una constante para setear la pagina actual
    const paged = (pageNumber) => {
            setCurrentPage(pageNumber);
        }

      


function handleOnClick(e){
    e.preventDefault();
    dispatch(getVideogames());//se vuelve a despachar la accion
    //y me trae todos los videogames otra vez
}

function handlerFilterGenres(e){
    e.preventDefault();
        dispatch(filterByGenres(e.target.value))
}

function filterByVideogames(e){
    e.preventDefault();
    dispatch(filterVideogames(e.target.value));
}

function handleSortName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
} 

function orderRating(e){
    e.preventDefault();
    dispatch(orderByRating(e.target.value))
    //para que me setee esa pagina en 1
    setCurrentPage(1);
    //me modifique el estado local y se renderice
    setOrderRat(`Ordenado ${e.target.value}`)
}


return (
    <div className={styles.home}>
    <div>
    <div className={styles.country}><h1>Videogames</h1></div>

<Link to="/videogame"><button>Crea tu Videojuego</button></Link>
<br/>
<div>
<button onClick={handleOnClick}>Volver a cargar</button>
</div>

    <select  onChange={e=> orderRating(e)}  >
    <option value="rating(men-may)">Rating de menor a mayor</option>
    <option value="rating(may-men)">Rating de mayor a menor</option>
    </select>



    <select onChange={e=>handleSortName(e)} >
    <option value="asc(a-z)"> Por orden alfabetico ascendente</option>
    <option value="desc(z-a)">Por orden alfabetico descendente</option> 
    </select>


    <select onChange={(e)=>handlerFilterGenres(e)}>
         <option value="Todos">Todos los Generos</option>
        <option value="ACTION">Action</option>
        <option value="ADVENTURE">Adventure</option>
        <option value="RPG">Rpg</option>
        <option value="INDIE">Indie</option>
        <option value="SPORTS">Sports</option>
        <option value="STRATEGY">Strategy</option>
        <option value="SHOOTER">Shooter</option> 
        <option value="PUZZLE">Puzzle</option>
        <option value="MASSIVELY MULTIPLAYER">Massively</option>
        <option value="RACING">Racing</option>
        <option value="SIMULATION">Simulation</option>
        <option value="ARCADE">Arcade</option>
        <option value="FIGHTING">Fighting</option>
        <option value="CASUAL">Casual</option>
        <option value="FAMILY">Family</option>
        <option value="PLATFORMER">Platformer</option>
      
                    
            
    </select>


    <select onChange={e=>filterByVideogames(e)} >
        <option value="Todos">Todos los Videojuegos</option>
        <option value="Api">Api</option>
        <option value="Creados">Creados</option>
    </select>



<div className={styles.paginado}>
        <Paged VideogamesPerPage={VideogamesPerPage} 
        allVideogames={allVideogames?.length}
        paged={paged}/>

        </div>

        
        <div>
        <SearchBar />
        </div>

<div className={styles.cards}>

{
  
  currentCountries?.map((el) => {
               return(
                <Fragment key={el.id}>
               
                   <Link to={'/home/' + el.id}>
                   <Card  image={el.image} name={el.name} genres={el.genres}/>
                   </Link>
                </Fragment>   
                   
               );})}
</div> 
        


</div>


</div>   
)
}