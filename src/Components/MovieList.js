import React from 'react'
import { MovieCard } from './MovieCard'
import './style.css'

export const MovieList = ({ movieList, search }) => {
    return (
        <div className="movieList">
            {movieList.filter((movie) => movie.title.toUpperCase().match(search.toUpperCase()))
                .map((movie) => { return <MovieCard movieCard={movie} key={movie.id} deleteCard /> })}
        </div>
    )
}
