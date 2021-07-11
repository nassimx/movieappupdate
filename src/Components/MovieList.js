import React from 'react'
import { MovieCard } from './MovieCard'
import './style.css'

export const MovieList = ({ movieList, search,handleDelete }) => {
    return (
        <div className="movieList">
            {movieList.filter((movie) => movie.title.toUpperCase().match(search.toUpperCase() )) 
                .map((movie,index) => <MovieCard movieCard={movie} key={index} handleDelete={handleDelete} />  )}
        </div>
    )
}
