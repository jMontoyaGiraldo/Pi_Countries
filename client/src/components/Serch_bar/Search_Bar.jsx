import { useState } from "react";
import estilos from "./Search_Bar.module.css";

export default function SearchBar({countries}) {

  const [id , setId] = useState('')
  
  const [serchCountrie , setSearchCountrie ] = useState([])


  const handelChange = (event)=>{
    let {value} = event.target;
    setId(value);  }

  return (
    <div className={estilos.contenedorSearchBar}>
      <p>
        buscar pais : 
        <input type="text" placeholder="escriba el pais que busca" onChange={handelChange} />
      </p>
    </div>
  );
}
