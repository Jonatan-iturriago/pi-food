import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {getDetail} from "../../redux/actions/index"
import style from "./Detail.module.css"

export default function Detail (){
    const { id } = useParams();
    const dispatch = useDispatch()
    const detalle = useSelector(state=> state.detali)
    // pendiente
    // falta limpiar el estado para que no se vea el anterio
    useEffect(()=>{
        dispatch(getDetail(id))
    },[])
        return (
            <> 
                <div className={style.detalle}>
                <Link to="/home"><button>X</button></Link>
                <div className={style.contImagen}>
                <img src={detalle.image} alt={detalle.name} />
                </div>
                <div className={style.contInfo}>

                <h2>{detalle.name}</h2>
                <p>healthScore: {detalle.healthScore}</p>
                <p>{detalle.dishTypes}</p>
                <p>summary:</p>
                <span> {detalle.summary}</span>
                <p>steps:</p>
                <p>{detalle.steps}</p>
                </div>
                </div>
            </>
        );
}