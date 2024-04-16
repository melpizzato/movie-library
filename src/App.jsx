import Movie from "./components/Movie"
import MovieForm from "./components/MovieForm"
import useMovieCollection from "./hooks/useMovieCollection"

export default function App(){

  const {movies, addMovie, removeMovie} = useMovieCollection()

  return (
    <div id="app">
      <h1>My Movie Library</h1>
      <MovieForm addMovie={addMovie} />        
      <div className="movies">
        {movies.length > 0 ? 
        movies.map((movie) => (
          <Movie 
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            onRemove={() => removeMovie(movie.id)} />))
        : (
          <h2 style={{marginTop: "4rem"}}>Oops! Nothing to see here yet. Try adding some movies :)</h2>
        )
      }
      </div>
    </div>
  )
}