import imagen from '../things/—Pngtree—globle world map create with_8628160.png'
import stilos from './Landing.module.css'
import { Link } from "react-router-dom";

export default function Landing_page (){
    return (
        <>
        <div className={stilos.imgland}><img className={stilos.imgg} src={imagen} alt="world" /></div>
        <Link to="/home"><button>Home Page</button></Link>
        </>
    )
}