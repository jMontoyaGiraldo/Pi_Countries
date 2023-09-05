import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { filterCountires, activitiesCountries } from "../../redux/actions";
import estilos from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const paisesFiltrados = useSelector((state) => state.filterCountries);
  const paisesConActividades = useSelector(
    (state) => state.activitiesCountries
  );
  const PaisesConActividadFiltrados = useSelector(
    (state) => state.activitiesFilterCountries
  );

  const [paises, setPaises] = useState(countries);
  const [openFilter, setOpenFilter] = useState(false);
  const [order, setOrder] = useState("alfabetico");
  const [aseDes, setAseDes] = useState("A");
  const [activities, setActivities] = useState({
    all: false,
    difficulty: null,
    duration: null,
    season: null,
  });
  const [mostrarPorActividad, setMostrarPorActividad] = useState(false);

  useEffect(() => {
    setPaises(countries);
  }, [countries]);

  const paisesMostrados = () => {
    let paisesAMostrar = paises;

    if (paisesFiltrados.length) {
      paisesAMostrar = paisesFiltrados;
    }
     
    if(mostrarPorActividad){
      paisesAMostrar = paisesConActividades
      if(PaisesConActividadFiltrados.length){
        paisesAMostrar = PaisesConActividadFiltrados
      }
    }

    const paisesCambiados = [...paisesAMostrar];

    if (order === "poblacion") {
      paisesCambiados.sort((a, b) =>
        aseDes === "A"
          ? a.population - b.population
          : b.population - a.population
      );
    } else if (order === "alfabetico") {
      paisesCambiados.sort((a, b) =>
        aseDes === "A"
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
      );
    }

    return paisesCambiados;
  };

  function todosLosContinetes() {
    const almacen = [];
    for (let i = 0; i < countries.length; i++) {
      if (!almacen.find((e) => e === countries[i].continents)) {
        almacen.push(countries[i].continents);
      }
    }
    return almacen;
  }

  const bontonesDeFiltros = [...todosLosContinetes()];

  function handlerFilter(por, infor) {
    dispatch(filterCountires(por, infor));
  }

  const handlerActivities = (e) => {
    const parameter = e.target.name;
    const value = e.target.value;

   
    setActivities({ ...activities, [parameter]: value });
    dispatch(activitiesCountries({ ...activities, [parameter]: value }));
  };

  return (
    <div>
      <button onClick={()=>{openFilter === false ? setOpenFilter(true) : setOpenFilter(false)}}>filter</button>
      <div className={openFilter ? estilos.active : estilos.inactive}>
        <div className={estilos.contenedorSort}>
          <div className={estilos.sort}>
            <h3 className={estilos.ordenarPor}>sort by :</h3>
            <button onClick={() => setOrder("alfabetico")}>Alphabetical</button>
            <button onClick={() => setOrder("poblacion")}>Population</button>
            <h5 className={estilos.ordenarPor}>ascending and descending</h5>
            <button onClick={() => setAseDes("A")}>↑</button>
            <button onClick={() => setAseDes("D")}>↓</button>
          </div>
          <div className={estilos.filtrar}>
            <h3>filter by:</h3>
            <h4>continent</h4>
            <div>
              {bontonesDeFiltros.map((continente) => (
                <button
                  key={continente}
                  onClick={() => handlerFilter("continente", continente)}
                >
                  {continente}
                </button>
              ))}
              <button onClick={() => handlerFilter("continente", "all")}>
                all
              </button>
            </div>
          </div>
        </div>
        <>
          <div className={estilos.actividades}>
            <div>
              <h4>filter by activities :</h4>
              <button
                onClick={() => {
                  mostrarPorActividad
                    ? setMostrarPorActividad(false)
                    : setMostrarPorActividad(true);
                }}
              >
                {mostrarPorActividad ? "on" : "off"}
              </button>
              <button name="all" value={true} onClick={(e)=>{handlerActivities(e); setActivities({...activities, all : false})}}>
                all countries with activities
              </button>
            </div>
            <div className={estilos.dificultad}>
              <h5>activity difficulty:</h5>
              <select name="difficulty" id="" onChange={handlerActivities}>
                <option value={null}> </option>
                <option value={'1'}> 1</option>
                <option value={'2'}> 2</option>
                <option value={'3'}> 3</option>
                <option value={'4'}> 4</option>
                <option value={'5'}> 5</option>
              </select>
            </div>
            <div className={estilos.duration}>
              <h5>duration of activity:</h5>
              <input
                type="number"
                placeholder="time in hours"
                name="duration"
                onInput={handlerActivities}
              />
              <h5>season:</h5>
              <select name="season" id="" onChange={handlerActivities}>
                <option value={''}></option>
                <option value={'summer'}>Summer</option>
                <option value={'winter'} >Winter</option>
                <option value={'autumn'} >Autumn</option>
                <option value={'spring'} >spring</option>
              </select>
            </div>
          </div>
        </>
      </div>
      <Cards countries={paisesMostrados()} />
    </div>
  );
};

export default Home;
