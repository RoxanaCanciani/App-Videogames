const {TipoPapel, Medida, Gramaje}= require('../db.js');
const axios = require('axios');



const info= require('../info.js');
console.log(info)
 const apiInfo = async () => {
    
        const data = info.map((e) =>
        
         {
             return {
                 
                 name:e.tipoPapel,
                 precioxKilo:e.precioxKilo,
                 alto:e.alto,
                 ancho: e.ancho,
                 gramajes: e.gramajes,
                 paginas:e.paginas,
                 libros: e.cantidadLibros,
             }
     
         }
        )
        
        return data;
     }

    
 

 const getBdInfo= async()=>{
    
    return await TipoPapel.findAll({
        include:{
            model:Medida, Gramaje,
            attributes:['name'],
            througth:{
                attributes:[],
            },
        },
    });

}



 
 
module.exports = {apiInfo,getBdInfo};