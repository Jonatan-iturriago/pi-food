const {Diets}=require('../db')
const {loadDiets} = require('../controllers/controllerDeits')




const getAllDietas = async (req, res)=>{
    try {
        const bdDiets = await Diets.findAll();
        if(bdDiets.length > 0) return res.status(200).json(bdDiets);
        else{
            const saved = await loadDiets()
            res.status(200).json(saved);
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= {
    getAllDietas
}