import React, { useState, useEffect } from 'react'
import './movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.LOCAL_STORAGE_KEY = 'awardsApp.movies'
        this.state = { localStorageMovies: localStorage.getItem('awardsApp.movies') };
        console.log(this.props)
    }

    getmovies() {
        this.setState({ localStorage: localStorage })
    }

    render() {
        console.log(this.localStorageMovies)
        if (this.localStorageMovies) {
            return (
                <div id="movieList">
                    {this.props.movies.map((movie) => {
                        return (
                            <div className="movieHolder" key={movie.imdbID}>
                                <div className="imgHolder"  >
                                    <img src={movie.Poster} alt={movie.Title}></img>
                                </div>
                                <div className="movieInfo">
                                    <p>{movie.Title}</p>
                                    <p>year {movie.Year}</p>
                                </div>
                                <div className="nominateButton" onClick={() => this.props.GetMovies(movie)}> NOMINATE </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div id="movieList">
                    {this.props.movies.map((movie) => {
                        return (
                            <div className="movieHolder" key={movie.imdbID}>
                                <div className="imgHolder"  >
                                    <img src={movie.Poster} alt={movie.Title}></img>
                                </div>
                                <div className="movieInfo">
                                    <p>{movie.Title}</p>
                                    <p>year {movie.Year}</p>
                                </div>
                                <div className="nominateButton" onClick={() => this.props.selectMovie(movie)}> NOMINATE </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default Movie

