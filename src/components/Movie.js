import React from 'react';
const IMAGE_API = "https://image.tmdb.org/t/p/w500"


const Movie = ({movie}) => {
    const { title, poster_path, overview, vote_average } = movie;

    const obtenerClase = (vote) => {
        if( vote >= 7.5 ) {
            return "green";
        }
        if( vote >= 4.5 ){
            return "orange"
        }
        return "red"
    }

    return (
        <div className="movie">
            <img src={ IMAGE_API + poster_path  } alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${obtenerClase(vote_average)}`}
                    >{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default Movie;