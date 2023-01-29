import React from "react";
//import style from "./Form.module.css"

export default function CreateRecipe() {
return (
    <div >
    <form>
        <label htmlFor="">name: </label> 
        <input type="text" />
        <label htmlFor="">healthScore: </label>
        <input type="number" />
        <label htmlFor="">imagen: </label>
        <input type="url" />
        <label htmlFor="">summary: </label>
        <textarea />
        <label htmlFor="">steps: </label>
        <input type="text" />
        <label htmlFor="">deits: </label>
        <input type="text" />
        <input type="button" value="enviar" />
    </form>
    </div>
    
);
}
