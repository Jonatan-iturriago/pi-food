import style from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = (props)=>{
    return(
        <>
        <div className={style.card}>
            <div className={style.titulo}>
                <span>{props.name}</span>
            </div>
        <Link to={`/detalle/${props.id}`} >
        <div className={style.cont}>
            <img src={props.imagen} alt={props.name} />
        </div>
        </Link>
        <div className={style.titulo}>
            <span>{props.diets}</span>
        </div>
        </div>
        </>
    )
}

export default Card