const { Router } = require('express');
require("dotenv").config();
const axios= require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {TipoPapel,Medida, Gramaje} = require('../db.js');
const {apiInfo} = require('./getInfo.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//const routerVideogames=require('/videogames')
//router.use(/videogames,routerVideogames)

router.get('/todo', async(req,res)=>{
    const apiInfor= await apiInfo();
    console.log('lo que me trae la api',apiInfor)
    try{
        let hay = await TipoPapel.findAll();
        if(!hay.length) await TipoPapel.bulkCreate(apiInfor)
    }catch(error){
    console.log(error)
    } res.send(apiInfor)
})

router.get('/tipos', async(req,res)=>{
    const apiInfor= await apiInfo();

    const platf = apiInfor.map(elem => elem.name).flat()
   
    const platformsMaped = [...new Set(platf)]
    console.log('lo que me trae la api',apiInfor)
    try{
        let hay = await TipoPapel.findAll();
        if(!hay.length) await TipoPapel.bulkCreate(apiInfor)
    }catch(error){
console.log(error)
    } res.send(platformsMaped )
})

router.get('/alto', async(req,res)=>{
    const apiInfor= await apiInfo();
//const alt=  apiInfor.map(elem=>elem.alto);
    const platf = apiInfor.map(elem => elem.alto).flat()
   
 const platformsMaped = [...new Set(platf)]

   
    try{
        let hay = await Medida.findAll();
        if(!hay.length) await Medida.bulkCreate(apiInfor)
    }catch(error){
console.log(error)
    } res.send(platformsMaped )
})

router.get('/ancho', async(req,res)=>{
    const apiInfor= await apiInfo();
    //const anc=  apiInfor.map(elem=>elem.ancho);
    const platf = apiInfor.map(elem => elem.ancho).flat()
   
 const platformsMaped = [...new Set(platf)]

    console.log('lo que me trae la api',apiInfor)
    try{
        let hay = await Medida.findAll();
        if(!hay.length) await Medida.bulkCreate(apiInfor)
    }catch(error){
console.log(error)
    } res.send(platformsMaped )
})

router.get('/gramaje', async(req,res)=>{
    const apiInfor= await apiInfo();
    const platf = apiInfor.map(elem => elem.gramajes).flat()
   
    const platformsMaped = [...new Set(platf)]

    console.log('lo que me trae la api',apiInfor)
    try{
        let hay = await Gramaje.findAll();
        if(!hay.length) await Gramaje.bulkCreate(apiInfor)
    }catch(error){
console.log(error)
    } res.send(platformsMaped)
})

router.get('/paginas', async(req,res)=>{
    const apiInfor= await apiInfo();
    const platf = apiInfor.map(elem => elem.paginas).flat()
   
    const platformsMaped = [...new Set(platf)]

    console.log('lo que me trae la api',apiInfor)
    try{
        let hay = await Paginas.findAll();
        if(!hay.length) await Gramaje.bulkCreate(apiInfor)
    }catch(error){
console.log(error)
    } res.send(platformsMaped)
})


router.get('/libros', async(req,res)=>{
    const apiInfor= await apiInfo();
    const platf = apiInfor.map(elem => elem.libros).flat()
   
    const platformsMaped = [...new Set(platf)]

    console.log('lo que me trae la api',apiInfor)
    try{
        let hay = await Paginas.findAll();
        if(!hay.length) await Gramaje.bulkCreate(apiInfor)
    }catch(error){
console.log(error)
    } res.send(platformsMaped)
})








// router.get('/medidas', async (req, res) => {
//   const plat= await apiInfo()

//   const platf = plat.map(elem => elem.medidas).flat()
//   console.log("plat.medidas", platf)
// const platformsMaped = [...new Set(platf)]
// console.log("holkaaaaaa", platformsMaped)
//     try{
//         let hay = await Medida.findAll();
//         if(!hay.length) await Medida.bulkCreate(platformsMaped)
//     }catch(error){
// console.log(error)
//     }
//     res.status(200).send(platformsMaped);
// })
//   const pla= await apiInfo()
//     const plat= pla.map(g => g.medidas)
//     //console.log(plat)
    
//     const onlyPlatforms= plat.map(el=>{
//        for(let i=0;i<el.length;i++) {
//               return el[i]
//        }
       
// });
// const result = onlyPlatforms.reduce((acc,item)=>{
//   if(!acc.includes(item)){
//     acc.push(item);
//   }
//   return acc;
// },[])
// res.status(200).send(result);
//  });


// router.get('/medidas',async (req, res) => {
//   const gen= await apiInfo()
//   const genre=gen.map(g => g.medidas)
  
  
//   const platf = genre?.map(elem => elem.medidas).flat()
// const genresMaped = [...new Set(platf)]
  
//        console.log("ACA ESTOY YO",genresMaped)
//        genresMaped?.forEach( el=>{ 
//           Medida.findOrCreate({
//               where:{
//                   medidas:el
//               }
//           })
//       })
//       const genderEach= await Medida.findAll()
//       res.send(genresMaped)
          
      

//   });


//     router.get('/videogame/:id',async (req,res)=>{
//         const {id} = req.params
//     const allVideogames = await getAllVideogames()
  
//     let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos

//     if (validate) {
//       try {
//         let dbId = await Videogame.findByPk(id, { include: { model: Genre } });  // entonce la busco directo de la base de datos
//         res.status(200).json([dbId]);
//       } catch (err) {
//         console.log(err);
//       }
//     }
    
// else {

//    const infoId=  await axios.get(`https://api.rawg.io/api/games/${id}?key=3c0767a9b2474e2cb6f897c063a86294`)

//     // try {
//     //   if (id) {
//     //     let videogameId =  infoId.filter((el) => el.id === parseInt(id)
//     //     );
     
//          infoId? res.status(200).send(infoId.data)
//         : res.status(400).send("Not found");
//     //   }
//     // } catch (err) {
//     //   res.json({ message: err });
//     // }
//   }
        
       
//     })




// router.post('/videogame', async (req,res) => {
//     let {
//         name,
//         image,
//         description,
//         released,
//         rating,
//         platforms,
//         createdInBd,
//         genres,
        
//     } = req.body;
    
    
// let createVideogame = await Videogame.create({
          
//     name,
//     image,
//     description,
//     released,
//     rating,
//     platforms,
//     createdInBd,
    
    
// })
// let genreInDb = await Genre.findAll({ //busca todos los tipos de genero
//     where:{ name:genres } })//busca los tipos de genero en la base de datos
//     createVideogame.addGenre(genreInDb)
//     res.status(200).send('Videogame successfully created')  


// });


    

module.exports = router;
