import React from 'react'
import { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {getGenres, getPlatforms, postVideogame} from '../../action/index.js'
import { Link } from 'react-router-dom';
import styles from './CreateVideogame.module.css'


function validate(input){
    let errors = {};
    console.log(errors)
    if(!input.name){
        errors.name = "Complete el nombre";
    }
    if(!input.description){
        errors.description = " Complete la descripción";
    }
    if(!input.rating){
        errors.rating = " Complete el rating";
    }
    if(!input.released){
        errors.released = " Complete la fecha de lanzamiento";
    }
    if(!input.genres){
        errors.genres = " Seleccione al menos un género";
    }
    if(!input.platforms){
        errors.platforms = " Seleccione al menos una plataforma";
    }
    
    return errors;

}

export default function VideogameCreated(){
    const dispatch = useDispatch();
   
    const platforms = useSelector(state => state.platforms);
    const genres = useSelector(state => state.genres);

    const[errors, setErrors] = useState({});
    

    const[input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genres:[],
        platforms: [],

    })
    //necesito despachar la accion para que me traiga todo lo que esta en el estado de countries
    useEffect(()=>{
        dispatch( getPlatforms());
        dispatch( getGenres());
    }, [dispatch])

    function handlerOnChange (e){
                setInput({
                    ...input,
                    [e.target.name]:e.target.value
                })
                setErrors(validate({
                    ...input,
                    [e.target.name]:e.target.value
                }) )
            }

            

            function handleSelect(e){
                setInput({
                    ...input,
                    platforms:[...input.platforms, e.target.value]
                    
                })
                setErrors(
                    validate({
                        ...input,
                        [e.target.genres]:e.target.value,
                    })
                    )
            }

            function handlerSelect(e){
                setInput({
                    ...input,
                    genres:[...input.genres, e.target.value]
                })
                setErrors(
                    validate({
                        ...input,
                        [e.target.genres]:e.target.value,
                    })
                    )
            }

            function handleDelete(e){
                setInput({
                    ...input,
                    genres:input.genres?.filter(el => el !== e)
                })
            }

            function handlerDelete(e){
                setInput({
                    ...input,
                    platforms:input.platforms?.filter(el => el !== e)
                })
            }

            function handleSubmit(e){
                e.preventDefault();
                if(!input.name || !input.description || !input.rating || !input.released|| !input.genres[0] || !input.platforms[0]){
                alert("no completo todo el formulario!")}
                else{
                dispatch(postVideogame(input))
                alert('¡¡¡Videogame creado exitosamente !!!')
                setInput({
                    name: '',
        description: '',
        released: '',
        rating: '',
        genres:[],
        platforms: [],
                })
             
            }}
            function clearForm(){
                setInput({
                    name:"",
                    description:"",
                    released:"",
                    rating:"",
                    genres:[],
                    platforms:[],
                    
                });
                setErrors({});
            }     



return(
    <div className={styles.bkg}>
<Link to='/home'><button>Volver</button></Link>
<div className={styles.container} >
<div className={styles.video}><h1>Crea tu Videojuego!!!!</h1></div>

<form onSubmit={e=>handleSubmit(e)} >
    <div>
                 <label className={styles.letra}>Nombre:</label>
                 <input name='name' type='text' placeholder='maximo 10 caracteres' maxLength='10' value={input.name} onChange={handlerOnChange} />
                 <div className={styles.letra}>
                     {errors.name && <p >{errors.name}</p>}
                </div> 
                 
                 <label className={styles.letra}>Descripcion:</label>
                 <input name='description'type='text'placeholder='maximo 10 caracteres' maxLength='10' value={input.description} onChange={handlerOnChange} />
                 <div className={styles.letra}>
                     {errors.description && <p >{errors.description}</p>} 
                 </div> 

                 <label className={styles.letra}>Rating:</label>
                 <input name='rating' type="number" placeholder='1 al 10' min="1" max="10" value={input.rating} onChange={handlerOnChange} />
                 <div className={styles.letra}>   
                 {errors.rating && <p >{errors.rating}</p>} 
                 </div>

                  <label className={styles.letra}>Lanzamiento:</label>
                 <input name='released' type="date" id='date' min='2022-03-23' max='2022-12-31' value={input.released} onChange={handlerOnChange}/>
                 <div className={styles.letra}>  
                 {errors.released && <p >{errors.released}</p>}
                 </div> 
                    </div>

                    <label className={styles.letra}>Generos:</label>
                <select  onChange={handlerSelect} >
                <option value='todos'></option>
                    {genres?.map(el => {
                     return    <option  value={el} >{el}</option>
                    })}
                    {errors.genres && <p >{errors.genres}</p>}
                </select>


                <ul>
                        {input.genres?.map(e => (
                            <div className={styles.letra}>
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handleDelete(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>

                  <label className={styles.letra}>Plataformas:</label>
                <select  onChange={handleSelect} >
                
                    <option value='todos'></option>
               {platforms?.map(el => {
                     return    <option value={el} >{el}</option>
                    })}
                    {errors.platforms && <p >{errors.platforms}</p>} 
                </select>
                <ul>
                        {input.platforms?.map(e => (
                            <div className={styles.letra}>
                                <li >{e}<button
                                    
                                    type="button"
                                    onClick={() => handlerDelete(e)}
                                >X</button>
                                </li>
                            </div>
                        ))}
                    </ul>



                


               
<br/>
                <button type='submit' >Crear Videojuago</button>
                <div>
       <button className="reset"
              type="reset"
              value = "limpiarform"
              onClick = {clearForm}>
               Borrar
              </button>

        </div>
                            

</form>
{/* {input.genres?.map(el=>
                <div>
                    <p >{el}<button  onClick={()=>{handleDelete(el)}}>X</button></p>
                </div>
                )}  */}
    </div>
    </div>


)

}