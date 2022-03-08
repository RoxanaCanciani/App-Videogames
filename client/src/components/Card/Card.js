import React from "react";
import styles from './Card.module.css';

export default function Card({id, name, image, genres}){
    return(
        <div className={styles.all}>
        <div className={styles.card}>
        <div key={id}>
            <img className={styles.image}  src={image?image : 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'} alt="img not found" width="200px" height="250px" />
            <div className={styles.section}>
                <h3>{name}</h3>
                <div>
                    
                     {genres.map(genre => (
                        <p key={genre.name}>{genre.name}</p>
                    ))} 
                </div>
                </div>
                </div>
                </div>
        </div>
                       )
}


