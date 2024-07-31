
import './App.css';
import axios from 'axios';

//React-Slicks CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Routing
import {Routes,Route} from "react-router-dom";

//Pages 
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlayPage from './pages/Play.Page';


axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params ={};
axios.defaults.params["api_key"]="cedc0cb237d582080af2b66f2f537190"

function App() {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/movie/:id' element={<MoviePage/>}/>
    <Route path='/plays'element={<PlayPage/>}/>
  </Routes>
}

export default App;
