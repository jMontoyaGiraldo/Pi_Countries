// En tu componente Form_Activities

import { useState } from "react";
import validate from "./validate";
import estilo from "./Form_Activities.module.css";
import { useSelector } from "react-redux";

const Form_Activities = ({ postActivity }) => {
  const countries = useSelector((state) => state.allCountries);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    season: "summer",
    duration: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    season: "",
    duration: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "countries") {
      setActivity({
        ...activity,
        [property]: [...activity[property], value],
      });
    } else {
      setActivity({ ...activity, [property]: value });
    }

    setErrors(validate({ ...activity, [property]: value }, errors));
  };

  const handleCountryRemove = (countryId) => {
    setActivity({
      ...activity,
      countries: activity.countries.filter((c) => c !== countryId),
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    postActivity(activity).then(() => {
      alert("Actividad creada con éxito");
      setActivity({
        name: "",
        difficulty: "",
        season: "summer",
        duration: "",
        countries: [],
      });
    });
  }

  return (
    <div className={estilo.FormContainer}>
      <form action="" onSubmit={handleSubmit}>
        <div className={estilo.InputContainer}>
          <label htmlFor="name">Nombre de la actividad:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={activity.name}
            onChange={handleChange}
          />
          {errors.name && <span className={estilo.Error}>{errors.name}</span>}
        </div>

        <div className={estilo.InputContainer}>
          <label htmlFor="difficulty">Dificultad de la actividad:</label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            value={activity.difficulty}
            onChange={handleChange}
          />
          {errors.difficulty && (
            <span className={estilo.Error}>{errors.difficulty}</span>
          )}
        </div>

        <div className={estilo.InputContainer}>
          <label htmlFor="season">Mejor temporada para la actividad:</label>
          <select
            id="season"
            name="season"
            value={activity.season}
            onChange={handleChange}
          >
            <option value="summer">Verano</option>
            <option value="winter">Invierno</option>
            <option value="autumn">Otoño</option>
            <option value="spring">Primavera</option>
          </select>
        </div>

        <div className={estilo.InputContainer}>
          <label htmlFor="duration">
            Duración promedio de la actividad (horas):
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={activity.duration}
            onChange={handleChange}
          />
          {errors.duration && (
            <span className={estilo.Error}>{errors.duration}</span>
          )}
        </div>

        <div className={estilo.InputContainer}>
          <label htmlFor="countries">Países donde se puede realizar:</label>
          <select
            id="countries"
            name="countries"
            value={""}
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccione un país
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <ul className={estilo.SelectedCountries}>
            {activity.countries.map((countryId) => (
              <li key={countryId}>
                {countries.find((c) => c.id === countryId)?.name}
                <button
                  type="button"
                  onClick={() => handleCountryRemove(countryId)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className={estilo.SubmitButton}>
          Crear Actividad
        </button>
      </form>
    </div>
  );
};

export default Form_Activities;
