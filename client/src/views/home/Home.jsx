import React, { useState } from "react";
import Paginado from "../../components/paginado/Paginado";
import { useEffect } from "react";
import {  connect } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import style from "./Home.module.css"
//import { Link } from "react-router-dom";

const Home = (props)=>{
    useEffect(()=>{        
        props.getRecipes();
    },[])

    
    return(
        <>
        <div className={style.homecontainer}>
            {/* <Link to='/' ><button>LANDING</button></Link> */}
            <Paginado state={props.recipes} />
        </div>
        </>
    )
}
function mapStateToProps(state){
    return {
        recipes: state.recipes
    }

}

export default connect(mapStateToProps,{getRecipes})(Home);