import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import estilos from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [country, setCountry] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCountry(data);
        } else {
          window.alert("No hay país con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error durante la solicitud: ", error);
        window.alert(
          "Hubo un error durante la solicitud. Por favor, inténtelo de nuevo."
        );
      });

    return () => setCountry({});
  }, [id]);

  const { Activities } = country;

  return (
    <div className={estilos.DetailContainer}>
      <div className={estilos.ImageContainer}>
        <img src={country.flag} alt={country.name} className={estilos.Flag} />
        <button className={estilos.BackButton} onClick={() => navigate("/home")}>
          Volver a la página de inicio
        </button>
      </div>
      <div className={estilos.InfoContainer}>
        <h2 className={estilos.CountryName}>{country.name}</h2>
        <div className={estilos.CountryDetails}>
          <p>
            <strong>ID:</strong> {country.id}
          </p>
          <p>
            <strong>Continente:</strong> {country.continents}
          </p>
          <p>
            <strong>Subregión:</strong> {country.subregion}
          </p>
          <p>
            <strong>Área:</strong> {country.area} km²
          </p>
          <p>
            <strong>Población:</strong> {country.population}
          </p>
        </div>
        <div className={estilos.Activities}>
          <h3>Actividades</h3>
          <ul className={estilos.lista}>
            {Activities &&
              Activities.map((actividad) => (
                <li key={actividad.id} className={estilos.ActivityItem}>
                  <p>
                    <strong>Nombre:</strong> {actividad.name}
                  </p>
                  <p>
                    <strong>Temporada:</strong> {actividad.season}
                  </p>
                  <p>
                    <strong>Dificultad:</strong> {actividad.difficulty}
                  </p>
                  <p>
                    <strong>Duración:</strong> {actividad.duration} horas
                  </p>
                </li>
              ))}
          </ul>
        </div>
        
      </div>
    
    </div>
  );
};

export default Detail;