import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="card">
            <div className="container">
                <img src={movie.img} alt={movie.name} width="100%" height="200px" />
                <h2>{movie.name} - <a target="_blank" href={movie.link}>Ver</a></h2>
                <h4>{movie.genre} - {movie.year} - Rate: {movie.rate}/10</h4>
                <p>{movie.comment}</p>
            </div>
        </div>
    )
}

export default Movie;