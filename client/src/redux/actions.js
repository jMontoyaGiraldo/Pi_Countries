import axios from "axios";
export const GET_ALL_CO = 'GET_ALL_CO';
export const FILTER = 'FILTER';
export const ACTIVITY = 'ACTIVITY'


export const getCountries = () => {
    return function(dispatch){
         return axios.get("http://localhost:3001/countries")
         .then( respuesta =>{
            const {data} = respuesta 
            dispatch({type: GET_ALL_CO , payload :data })})
    }
}


export const filterCountires = (por, info) => {
    return{type : FILTER , payload : {por , info}}
}

export const activitiesCountries = (obj) => {
    return{ type: ACTIVITY , payload : obj}
}