import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';

export default function LandingPage(){
    return (
        <div className={styles.landing}>
           <div className={styles.landingcontainer}>
                <h1 >Videogames</h1>
            <Link to ='/home'>
                <button className={styles.btn}>Ingresar</button>
            </Link>
            </div>
        </div>
    )
}