import { useEffect, useState } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
const FEATURE_API = "https://api.themoviedb.org/3/movie/popular?api_key=a3686e40425695d7f7e57d46a13f3d95&language=es-ES&page=1"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=a3686e40425695d7f7e57d46a13f3d95&language=es-ES&page=1&include_adult=false&query="

function App() {
  
  const[ movies, setMovies ] = useState([]);
  const[ page, setPage] = useState(1);
  const[ search,setSearch ] = useState('');

  useEffect( () =>{
    async function getMovies(){
      const moviesResp = await fetch(FEATURE_API);
      const moviesData = await moviesResp.json();
      setMovies( moviesData.results );
      setPage(moviesData.page);
    }
    getMovies();
  },[])


  const searchMovies = async (query) => {
    const moviesResp = await fetch( SEARCH_API + query );
    const moviesData = await moviesResp.json();
    setMovies( moviesData.results );
    setPage( moviesData.page );
  }
  
  return (
    <div className="root">
      <Header search={search} setSearch={setSearch} searchMovies={searchMovies} />
      <div className="movie-container">
          {
            movies.length > 0 && movies.map(movie=> (
              <Movie key={movie.id} movie={movie} />
            ))
          }
      </div>
    </div>
  );
}

export default App;
