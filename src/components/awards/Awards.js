import React from 'react'
import './awards.css'
import Popup from '../popup/popup'

// export default function Awards() {
export default class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this)
    }

    // Calls the funtion to delete a movie
    deleteMovie(e, movie) {
        e.stopPropagation()
        this.props.handleDeleteMovie(movie)
    }

    //doesn't pick up element styles. Does not show the log...

    // Shows a happy banner when the number of awarded movies reaches 5
    showBanner() {
        // let banner = document.getElementsByClassName('overlay')[0]
        // console.log(banner.style)
        // banner.style.cssText = "visibility: visible;opacity: 1;"
        console.log('banner goes here')
    }

    render() {
        if (this.props.awarded) {
            if (this.props.awarded.length === 5) {
                this.showBanner()
                return (
                    <>
                        <h1 id="awardLabel">5 movies</h1>
                        <div id="movieList">
                            {this.props.awarded.map((movie) => {
                                return (
                                    <div className="awardHolder" key={movie.imdbID}>
                                        <div className="awardImgHolder"  >
                                            <img src={movie.Poster} alt={movie.Title}></img>
                                        </div>
                                        <div className="awardMovieInfo">
                                            <p>{movie.Title}</p>
                                            <p>year {movie.Year}</p>
                                        </div>
                                        <div className="withdrawButton" onClick={(e) => this.deleteMovie(e, movie)}> WITHDRAW </div>
                                    </div>
                                )
                            })}
                        </div>
                        <Popup />
                    </>
                )
            }
            return (
                <>
                    <h1 id="awardLabel">AWARDS</h1>
                    <div id="movieList">
                        {this.props.awarded.map((movie) => {
                            return (
                                <div className="awardHolder" key={movie.imdbID}>
                                    <div className="awardImgHolder"  >
                                        <img src={movie.Poster} alt={movie.Title}></img>
                                    </div>
                                    <div className="awardMovieInfo">
                                        <p>{movie.Title}</p>
                                        <p>year {movie.Year}</p>
                                    </div>
                                    <div className="withdrawButton" onClick={(e) => this.deleteMovie(e, movie)}> WITHDRAW </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div id="awardsText">
                        Your awards
                </div >
                </>
            )
        }
    }
}
