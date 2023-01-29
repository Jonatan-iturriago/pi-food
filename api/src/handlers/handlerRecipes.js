const { api, searchUserByName, searchUserById, getByIdDB} = require("../controllers/controllerRecipes");
const { Recipe, Diets}= require('../db')



const getAll=async (req,res)=>{
    const recetas = await api()
    try {
        res.status(200).json(recetas)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getByName = async (req, res) => {
    const { name} = req.query;
    try {
        const results = name ? await searchUserByName(name) : await getAll();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};




const getById = async (req, res) => {
    const { id } = req.params;
    if (id.length >= 12) {
    try {
        let dataInDb = await getByIdDB(id);
        return res.status(200).json(dataInDb);
    } catch (error) {
        res.status(400).json(error.message);
    }
    }
    if (id) {
    try {
        let dataInApi = await searchUserById(id);
        return res.status(200).json(dataInApi);
    } catch (error) {
        res.status(400).json(error.message);
    }
    }
};


const postReceta = async (req, res) => {
    const {name, healthScore, imagen, summary, deits, steps} = req.body
    try {
        if( !name || !healthScore || !summary || !imagen || !deits || !steps ){
            res.status(404).json({message:"falta informacion para crear la receta"});
        }else{
            let newRecipe = await Recipe.create({
                name,
                healthScore,
                summary,
                imagen,
                steps
            })
            let dietsBD = await Diets.findAll({
                where:{
                    id:deits
                }
            })
            newRecipe.addDiets(dietsBD)
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getAll,
    getByName,
    getById,
    postReceta
}