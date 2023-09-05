import { useEffect, useState } from "react"
import axios from 'axios'
import Landing_page from './components/Landing_Page/Landing';
// import SearchBar from './components/Serch_bar/Search_Bar';
import Nav_Bar from './components/Nav_Bar/Nav_Bar';
// import Cards from './components/Cards/Cards';
import Form_Activities from './components/Form_Activities/Form_Activities';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes, useLocation
} from "react-router-dom";
import {useDispatch , useSelector}from 'react-redux'
import { getCountries } from "./redux/actions";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  async function postActivitie(actividad) {
    const { name, difficulty, season, duration, countrie } = actividad;
    const URL = 'http://localhost:3001/activities';
    try {
      await axios.post(URL, {
        name,
        difficulty,
        season,
        duration,
        countries: countrie,
      });

      return {name,difficulty,season,duration,countrie}

    } catch ({ response }) {
      const { data } = response
      console.log(data);
      alert(data.message)
    }
 }


  const location = useLocation();


  return (
    <div>
       {location.pathname !== "/" && 
          < Nav_Bar/>
        }
      <Routes>
        <Route path='/' element={<Landing_page/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Form' element={<Form_Activities  postActivitie={postActivitie}/>}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
