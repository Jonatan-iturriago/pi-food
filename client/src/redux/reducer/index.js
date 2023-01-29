import {GET_RECIPES, GET_DETALLE_RECIPE, SEARCH, GET_DIETS,POST_RECIPES} from "../actions/type";

const initialState = {
    recipes: [],
    detali: {},
    diets:[],
    crearRecipe: {},
}

const rootReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_RECIPES:
            console.log("esto es lo que trae",payload)
            return{
                ...state,
                recipes: payload
            }
        case GET_DETALLE_RECIPE:
            console.log("este es el detalle",payload)
            return {
                ...state,
                detali: payload
            }
        case SEARCH:
            console.log("esta es la busqueda",payload)
            return{
                ...state,
                recipes: payload
            }
        case POST_RECIPES:
            return {
                ...state,
                crearRecipe: payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: payload
            }
        default:
            return {...state}
    }
}

export default rootReducer;
