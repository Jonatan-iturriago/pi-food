const axios = require('axios')
const {Diets}=require('../db')
const {
    API_KEY
} = process.env;


module.exports = {
    loadDiets: async function(){
        const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        const arr = api.data.results;
        await Diets.create({name: "vegetarian"});
        for(let e of arr){
            for(let diet of e.diets){
                await Diets.findOrCreate({
                    where: {name: diet}
                })
            }
        }
        const allDiets = await Diets.findAll();
        return allDiets;
    }
};