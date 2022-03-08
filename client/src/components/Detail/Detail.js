import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import {getDetail} from "../../action"
import { Link } from 'react-router-dom';
import { useState } from "react";

//import styles from "./Detail.module.css"



export default function VideogameDetail () {
    
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(getDetail(id))
    },[dispatch,id])

    const details = useSelector(state => state.detail)
    console.log("estos son los detalles",details)

    
   

    
    
    


    return (
        <div>
            { 
       details? 
        
            <div>
                <Link to='/home'>Volver</Link>
        
         
            
               
                 
                <h1>{details[0]?.name}</h1>
                
                <img src = {details[0]?.image?details[0]?.image:'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'} alt="non" style={{width:300}}/>
                <h3>Descripcion: {details[0]?.description}</h3>
               <h3>Fecha de Lanzamiento: {details[0]?.released}</h3>
                 <h3>Rating: {details[0]?.rating}</h3>
                <h4>Generos: {details[0]?.genres.map(el=>el.name).join(", ")}</h4>   
                <h4>Plataformas: {details[0]?.platforms.join(", ")} </h4>
            
                  

            
            </div>: 
       
       <div> <h2> loading... </h2> </div>

    }
            
        </div>
    )
}
                    
            
                 
                
           
            <div>   
            
            
                
                
                     
               
                
                
               

            </div>
    
    
