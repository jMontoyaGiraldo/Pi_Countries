import estilo from './Card.module.css'
import { Link } from "react-router-dom";


const Card = ({id,flag,name,continents})=>{

    return( <div className={estilo.dm}>
    <div className={estilo.divDeCrad}>
        <div className={estilo.cardP1} ><img src={flag} alt={name} /></div>
         <h3 className={estilo.cardP2} > name : {name} </h3>
         <h3 className={estilo.cardP3} > continent : {continents} </h3>
         <button>
         <Link to={`/detail/${id}`}>
                  <h2> detail </h2>
         </Link></button>
    </div>
    </div>)
}



export default Card