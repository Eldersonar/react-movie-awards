import React from 'react'
import './movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localStorageMovies: this.props.localStorageMovies };
    }

    render() {
        // console.log(this.state.localStorageMovies.length)
        if (this.props.movies) {
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


                                {/* {(() => {


// Won't loop thorugh all movies to compare ids. Loops just once.

                                    // First attempt

                                    // for (let id in this.state.localStorageMovies) {
                                    //     console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyy')
                                    //     console.log(this.state.localStorageMovies[id].imdbID)
                                    //     console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyy')

                                    //     // console.log(movie.imdbID)
                                    //     // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq')
                                    //     if (this.state.localStorageMovies[id].imdbID === movie.imdbID) {

                                    //         console.log(this.state.localStorageMovies[id])
                                    //         console.log(this.state.localStorageMovies[id].imdbID)
                                    //         console.log(movie.imdbID)
                                    //         console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq')
                                    //         console.log('true')
                                    //         console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq')

                                    //         return (<div className="disabled">NOMINATE</div>)
                                    //     } else {
                                    //         console.log('false')
                                    //         return (
                                    //             <p>freaking noob</p>
                                    //             // <div className="nominateButton" onClick={() => this.props.selectMovie(movie)}> NOMINATE </div>
                                    //         )
                                    //     }
                                    // }

                                    //Second attempt
                                    
                                    for (let i = 0; i < this.state.localStorageMovies.length; i++) {
                                        if (this.state.localStorageMovies[i].imdbID.includes(movie.imdbID)) {
                                            console.log('truuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
                                            return (<div className="disabled">NOMINATED</div>)
                                        }

                                        else if (this.state.localStorageMovies.length === 0) {
                                            console.log('idkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
                                            return (
                                                <p> breh </p>
                                            )
                                        } else {
                                            console.log('falseeeeeeeeeeeeeeeeeeeeeeeeeeee')
                                            return (
                                                <div className="nominateButton" onClick={() => this.props.selectMovie(movie)}> NOMINATE </div>
                                            )
                                        }
                                    }
                                })()} */}
                                <div className="nominateButton" onClick={() => this.props.selectMovie(movie)}> NOMINATE </div>

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

