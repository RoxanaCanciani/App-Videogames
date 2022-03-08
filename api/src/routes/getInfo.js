const {Genre, Videogame}= require('../db.js');
const axios = require('axios');

const {apikey} = process.env;

 const videogames=`https://api.rawg.io/api/games?key=${apikey}`;

 const apiInfo = async () => {
    let videoApi = [];
    const allVideoGames = [videogames];
    for(let i = 0; i < 5; i++) {
        const gamesPerPag = await axios.get(`${allVideoGames[i]}`)
       
        allVideoGames.push(gamesPerPag.data.next)
        const dataGame = gamesPerPag.data.results.map((e) =>
        
         {
             return {
                 id: e.id,
                 name: e.name,
                 description: e.description? e.description: 'No description',
                 image: e.background_image,
                 released: e.released,
                 rating: e.rating,
                 platforms: e.platforms.map(p => p.platform.name.toUpperCase()),
                 genres: e.genres.map(g => g),
             }
     
         }
        )
        
        videoApi = videoApi.concat(dataGame);
     }
     //console.log(videoApi)
     return videoApi;
 }

 const getBdInfo= async()=>{
    
    return await Videogame.findAll({
        include:{
            model:Genre,
            attributes:['name'],
            througth:{
                attributes:[],
            },
        },
    });

}
const getAllVideogames= async()=>{
    const apiAllInfo= await apiInfo();
    const bdInfo= await getBdInfo();
    const allInfo= apiAllInfo.concat(bdInfo);

    return allInfo;
}  


 
 
module.exports = {apiInfo,getAllVideogames,getBdInfo};