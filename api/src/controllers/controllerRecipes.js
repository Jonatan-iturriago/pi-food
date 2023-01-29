
const axios = require('axios');
const { Recipe, Diets, Op }= require('../db')
const {
    API_KEY
} = process.env;

const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100` 



const cleanArray = (arr) =>
arr.map((e) => {
    return {
        id: e.id,
        name: e.title,
        healthScore: e.healthScore,
        summary: e.summary?.replace(/<[^>]*>?/g, ""),
        steps: e.analyzedInstructions[0]?.steps.map((e) => e.step).join(" "),
        diets: e.diets.toString(),
        imagen:e.image,
        dishTypes: e.dishTypes.toString(),
        create: false
        }
});

const api = async()=>{
const dataBase = await Recipe.findAll()
const apiRecipeRaw = (
    await axios.get(url)
    ).data.results;
    const apiRecipe = cleanArray(apiRecipeRaw);
    return [...apiRecipe, ...dataBase]
};

const searchUserByName = async (name) => {
    const databaseRecipe = await Recipe.findAll({
        where:{
            name:{
                [Op.iLike]: name
            }
        }
    });
    const apiRecipeRaw = (
    await axios.get(url)
    ).data.results;
    const apiRecipe = cleanArray(apiRecipeRaw);
    const filteredApi = apiRecipe.filter((e) =>
    e.name.toLowerCase().includes(name.toString().toLowerCase())
);

    return [...filteredApi, ...databaseRecipe];
};

const searchUserById = async (id) => {
    const api = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        return {
        id: id,
        name: api.data.title,
        healthScore: api.data.healthScore,
        summary: api.data.summary?.replace(/<[^>]*>?/g, ""),
        steps: api.data.analyzedInstructions[0]?.steps.map((e) => e.step).join(" "),
        diets: api.data.diets,
        image: api.data.image,
        dishTypes: api.data.dishTypes        
        };
};

const getByIdDB = async (id) => {
    const infoBD = await Recipe.findByPk(id, {
    include: {
        model: Diets,
        attributes: ["name"],
    },
    });
    return {
    name: infoBD.name,
    healthScore: infoBD.healthScore,
    summary: infoBD.summary,
    steps: infoBD.steps,
    diets: infoBD.diets?.map((e) => e.name),
    image: infoBD.image,
    };
};

// const orderByAZ = async ()=>{
//     const recetas = await api();
//     recetas.sort((a,b)=>{
//         if(a.name.toLowerCase() === b.name.toLowerCase()){
//             return 0;
//         }
//         if(a.name.toLowerCase() < b.name.toLowerCase()){
//             return -1;
//         }
//         return 1;
//     })
// }
// const orderByZA = async ()=>{
//     const recetas = await api();
//     recetas.sort((a,b)=>{
//         if(a.name.toLowerCase() === b.name.toLowerCase()){
//             return 0;
//         }
//         if(a.name.toLowerCase() > b.name.toLowerCase()){
//             return 1;
//         }
//         return -1;
//     })
// }
// const orderHealthScore = async ()=>{
//     const recetas = await api();
//     recetas.sort((a,b)=>{
//         if(a.healthScore === b.healthScore){
//             return 0;
//         }
//         if(a.healthScore < b.healthScore){
//             return -1;
//         }
//         return 1;
//     })
//}
module.exports = {
    api,
    searchUserByName,
    searchUserById,
    getByIdDB
}