import React from 'react'
import Movie from '../components/Movie';
import { ALL_MOVIES } from '../graphql/Query';
import { useQuery } from '@apollo/client';

const Movies = () => {

    const { loading, error, data } = useQuery(ALL_MOVIES);
    if (loading) return <p>Loading...</p>;
    if (error) return (<p>Error : Error 400</p>);

    return (
        <div className="movies">
            {data.movies.map(movie => {
                return <Movie key={movie.name} movie={movie} />
            })}
        </div>
    )

}

export default Movies;