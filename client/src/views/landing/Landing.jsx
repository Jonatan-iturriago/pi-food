import React from "react";
import {Link} from 'react-router-dom'
import style from "./Landing.module.css"

const Landing = ()=>{
    return (
        <div className={style.container}>
          <span className={style.welcometitle}>WHAT TO COOK TONIGHT</span>
          <span className={style.welcomesubtitle}>Fast, fresh, and foolproof</span>
          <Link to="/home">
            <button className={style.btnpage}>Enter Site</button>
          </Link>
        </div>
    )


    
    // return(
    //     <>

    //         <Link to='/home'><button>EMPESAR</button></Link>

    //     </>
    // )
}

export default Landing;