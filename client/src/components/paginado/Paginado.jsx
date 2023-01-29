import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux"
import style from "./Paginado.module.css"
import Card from "../card/Card"
const Paginacion = ()=>{
    const [currentPage, setcurrentPage]=useState(0)
    const recipes = useSelector(state=>state.recipes)

    const filter = ( )=>{
        return recipes.slice(currentPage, currentPage + 9)
    };
    const nextPage = ( )=>{
        setcurrentPage(currentPage + 9)

    }

    const prevPage = ( )=>{
        if(currentPage > 0)
        setcurrentPage(currentPage - 9)
    }


    return(
        <div >
            <div>
                <button onClick={prevPage}>atras</button>
                <button onClick={nextPage}>siguiente</button>
            </div>
            <div className={style.container}>
            {filter().map(e=>{
                return <Card 
                key={e.id}
                id={e.id}
                name={e.name}
                diets={e.diets}
                imagen={e.imagen}
                />
            })}
            </div>
            <div>
                <button onClick={prevPage}>atras</button>
                <button onClick={nextPage}>siguiente</button>
            </div>
        </div>
    )
};
export default Paginacion