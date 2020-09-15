import React from 'react'
import './movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localStorageMovies: this.props.awarded };
    }

    render() {
        if (this.props.movies) {
            return (
                <div id="movieList">
                    {this.props.movies.map((movie) => {
                        const alreadyAwarded = this.props.awarded.find(item => item.imdbID === movie.imdbID)
                        const btnClass = alreadyAwarded ? 'disabled' : 'nominateButton'
                        return (
                            <div className="movieHolder" key={movie.imdbID}>
                                <div className="imgHolder"  >
                                    <img src={movie.Poster} alt={movie.Title}></img>
                                </div>
                                <div className="movieInfo">
                                    <p>{movie.Title}</p>
                                    <p>year {movie.Year}</p>
                                </div>
                                <div className={btnClass} onClick={() => this.props.selectMovie(movie)}> NOMINATE </div>
                            </div>
                        )
                    })
                    }
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

