import { useState } from "react"

export default function useMovieCollection(){
    const [movies, setMovies] = useState(() => {
        const storedMovies = localStorage.getItem("movie-lib")
        if (!storedMovies) return []
        return JSON.parse(storedMovies)
    })
    
    const addMovie = ({title, poster}) => {
        const id = Math.floor(Math.random() * 1000000)
        const movie = {id, title, poster}
        setMovies(state => {
          const newState = [...state, movie]
          localStorage.setItem("movie-lib", JSON.stringify(newState))
          return newState
        })
    }
    
    const removeMovie = (id) => {
        setMovies(state => {
          const newState = state.filter(movie => movie.id !== id)
          localStorage.setItem("movie-lib", JSON.stringify(newState))
          return newState
        })
    }

    return {movies, addMovie, removeMovie}
}