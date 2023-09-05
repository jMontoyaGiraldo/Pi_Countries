import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import estilos from "./Cards.module.css";

const Cards = ({ countries }) => {
  const items_por_pagina = 10;

  const [items, setItems] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);

  useEffect(() => {
    const startIndex = paginaActual * items_por_pagina;
    const endIndex = startIndex + items_por_pagina;
    setItems(countries.slice(startIndex, endIndex));
  }, [countries, paginaActual]);

  const nextHandler = () => {
    const totalDePaises = countries.length;
    const nextPage = paginaActual + 1;

    if (nextPage * items_por_pagina >= totalDePaises) return;

    setPaginaActual(nextPage);
  };

  const prevHandler = () => {
    const prevPage = paginaActual - 1;

    if (prevPage < 0) return;

    setPaginaActual(prevPage);
  };

  return (
    <div className={estilos.Cards}>
      <div className={estilos.botonesNextPrevSuperiores}>
        <button onClick={prevHandler}>prev</button>
        <h4>pagina #{paginaActual + 1}</h4>
        <button onClick={nextHandler}>next</button>
      </div>
      <div className={estilos.todos}>
        {items.map((pais) => (
          <div key={pais.id} className={estilos.CardContainer}>
            <Card
              id={pais.id}
              flag={pais.flag}
              name={pais.name}
              continents={pais.continents}
            />
          </div>
        ))}
      </div>
      <div className={estilos.botonesNextPrevInferiores}>
        <button onClick={prevHandler}>prev</button>
        <h4>pagina #{paginaActual + 1}</h4>
        <button onClick={nextHandler}>next</button>
      </div>
    </div>
  );
};

export default Cards;