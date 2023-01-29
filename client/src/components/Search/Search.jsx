import React, { useState } from "react";
import { connect} from "react-redux";
import {search} from "../../redux/actions/index"

function Buscar(props) {
const [recipe, setRecipe] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    props.search(recipe);
}
function handleChange(e) {
    setRecipe(e.target.value);
}
return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Buscar Receta...."
        onChange={handleChange}
    />
    <input type="submit" value="BUSCAR"/>
    </form>
);
}
export default connect(null,{search})(Buscar)