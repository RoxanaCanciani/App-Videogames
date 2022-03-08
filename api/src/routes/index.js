const { Router } = require('express');
require("dotenv").config();
const axios= require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Videogame, Genre} = require('../db.js');
const {apiInfo,getAllVideogames,getBdInfo} = require('../routes/getInfo.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/videogames', async (req, res) => {
    const {name}=req.query;
    let totalVideogames= await getAllVideogames();
    if(name){
        let videogameName = await totalVideogames.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
    
        videogameName.length ?
        res.status(200).send(videogameName): res.status(404).send("The videogame does not exist")
    }else{
        res.status(200).send(totalVideogames);
    }
});

router.get('/platforms', async (req, res) => {
  const gen= await apiInfo()
//     const genre= gen.map(g => g.platforms)
//     console.log(genre)
    
//     const onlyGenres= genre.map(el=>{
//        for(let i=0;i<el.length;i++) {
//               return el[i]
//        }
// });
// const result = onlyGenres.reduce((acc,item)=>{
//   if(!acc.includes(item)){
//     acc.push(item);
//   }
//   return acc;
// },[])
const platf = gen.map(elem => elem.platforms).flat()
const platformsMaped = [...new Set(platf)]

    res.status(200).send(platformsMaped);
});


// router.get('/genres',async (req, res) => {
//     const gen= await apiInfo()
//     const genre= gen.map(g => g.genres)
//     //console.log(genre)
    
//     const onlyGenres= genre.map(el=>{
//        for(let i=0;i<el.length;i++) {
//               return el[i]
//        }
//     })
    
//          //console.log(onlyGenres)
//        onlyGenres.forEach( el=>{ 
//             Genre.findOrCreate({
//                 where:{
//                     name:el
//                 }
//             })
//         })
//         const genderEach= await Genre.findAll()
//         res.send(genderEach.map(e => e.name))
            
//         //res.send (genderEach)

//     });
    
router.get('/genres',async (req, res) => {
  const gen= await apiInfo()
  const genre=gen.map(g => g.genres)
  
  
  const platf = genre?.map(elem => elem.name).flat()
const platformsMaped = [...new Set(platf)]
  
       console.log(platformsMaped)
       platformsMaped?.forEach( el=>{ 
          Genre.findOrCreate({
              where:{
                  name:el
              }
          })
      })
      const genderEach= await Genre.findAll()
      res.send(genderEach?.map(e => e.name))
          
      //res.send (genderEach)

  });
    router.get('/videogame/:id',async (req,res)=>{
        const {id} = req.params
    const allRecipes = await getAllVideogames()
  
    let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos

    if (validate) {
      try {
        let dbId = await Videogame.findByPk(id, { include: { model: Genre } });  // entonce la busco directo de la base de datos
        res.status(200).json([dbId]);
      } catch (err) {
        console.log(err);
      }
    }
    
else {
    try {
      if (id) {
        let recipeId = await allRecipes.filter((el) => el.id === parseInt(id)
        );
     
        recipeId.length? res.status(200).send(recipeId)
          : res.status(400).send("Not fuound");
      }
    } catch (err) {
      res.json({ message: err });
    }
  }
        
       
    })



router.post('/videogame', async (req,res) => {
    let {
        name,
        image,
        description,
        released,
        rating,
        platforms,
        createdInBd,
        genres,
        
    } = req.body;
    if(!name || !description) {
        return res.status(400).send('Please complete to continue...') ;
    }
    
let createVideogame = await Videogame.create({
          
    name,
    image,
    description,
    released,
    rating,
    platforms,
    createdInBd,
    
    
})
let genreInDb = await Genre.findAll({ //busca todos los tipos de genero
    where:{ name:genres } })//busca los tipos de genero en la base de datos
    createVideogame.addGenre(genreInDb)
    res.status(200).send('Videogame successfully created')  


});



module.exports = router;
