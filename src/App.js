import Ui from './Ui'
import React, {useState,useEffect} from 'react'

const App = () => {
  const [movies,setMovies] = useState([]);
  const apiUrl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8cba133be2f0f978fe078523f7423e95&page=1";
  const search_url =
  'https://api.themoviedb.org/3/search/movie?api_key=8cba133be2f0f978fe078523f7423e95&query="';

  const getMovies=()=>{
    fetch(apiUrl)
    .then(res => res.json())
    .then(data =>setMovies(data.results))
  }

  

  const submitMovies=(e)=>{
      let input = e.target.childNodes[0].value
    
      if(input && input!==""){
        fetch(search_url+input)
        .then(res => res.json())
        .then(data => setMovies(data.results))

       
      }
      else{
        window.location.reload();
      }


    e.preventDefault()
  }

  useEffect(() => {
    getMovies()
    
  },[]);

  return (
    <div>
       
      <Ui submitMovies={submitMovies} movies={movies}/>
    </div>
  )
}

export default App
