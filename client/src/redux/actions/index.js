import axios from "axios";
import data from "../../data.json";


import {GET_RECIPES, GET_DETALLE_RECIPE,GET_DIETS, SEARCH, POST_RECIPES, FILTER} from "./type";

const url="http://localhost:3001/recipes"

export function getRecipes() {
return async function (dispatch) {
     try {
          const json = await axios.get(url)
          return dispatch({
               type: GET_RECIPES,
               payload: json.data
          });
     } catch (error) {
          alert(error);
     }
};
}

export function search(nombre){
     return async function(dispatch){
          try {
               const json = await axios.get(`${url}/name/?name=${nombre}`);
               return dispatch({
                    type: SEARCH,
                    payload: json.data
               })
          } catch (error) {
               alert(error)
          }
     };
}

export function getDetail(id){
     return async function(dispatch){
          try {
               const json = await axios.get(`${url}/${id}`);
               return dispatch({
                    type: GET_DETALLE_RECIPE,
                    payload: json.data
               });
          } catch (error) {
               alert(Error)
          }
     };
}

export function postRecipes() {
     return async function (dispatch) {
          try {
               const json = await axios.post(url);
               return dispatch({
                    type: POST_RECIPES,
                    payload: json.data
               });
          } catch (error) {
               alert(error);
          }
     };
     }

export function getDiets (){
     return async function(dispatch){
          try {
               const json = await axios.get("http://localhost:3001/deits");
               return dispatch({
                    type:GET_DIETS,
                    payload:json.data
               })
          } catch (error) {
               
          }
     }
}


