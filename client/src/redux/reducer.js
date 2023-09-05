import { ACTIVITY, FILTER, GET_ALL_CO } from "./actions";

const initialState = {
  allCountries: [],
  filterCountries: [],
  activitiesCountries: [],
  activitiesFilterCountries: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CO:
      return { ...state, allCountries: payload };

    case FILTER:
      const { por, info } = payload;
      let paises = [...state.allCountries];

      if (por === "continente") {
        if (info === "all") {
          return { ...state, filterCountries: paises };
        } else {
          return {
            ...state,
            filterCountries: paises.filter((p) => p.continents === info),
          };
        }
      } else {return state;}

    case ACTIVITY:

      let paisesObjetivo = state.filterCountries.length
        ? [...state.filterCountries]
        : [...state.allCountries];
      const { difficulty, duration, season, all } = payload;
      
      if(all)return{...state,activitiesCountries : paisesObjetivo.filter((a)=>a.Activities.length>0)}
      
      if (difficulty !== false) {
        paisesObjetivo = paisesObjetivo.filter((pais) =>
          pais.Activities.find((elemento) => elemento.difficulty === difficulty)
        );
      }
      if (duration !== false) {
        paisesObjetivo = paisesObjetivo.filter((pais) =>
          pais.Activities.find((elemento) => elemento.duration === duration)
        );
      }
      if (season !== false) {
        paisesObjetivo = paisesObjetivo.filter((pais) =>
          pais.Activities.find((elemento) => elemento.season === season)
        );
      }
      if(!difficulty ||!duration||!season){paisesObjetivo = []}
      
      return {...state ,activitiesFilterCountries:paisesObjetivo }

    default:
      return state;
  }
};

export default reducer;
