import React from 'react';
import './App.css';
import Header from './components/header/header'
import Main from './components/main/main'
import Popup from './components/popup/popup'

// Local storaage key
const LOCAL_STORAGE_KEY = 'awardsApp.movies'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      movieName: "man",
      movies: [],
      loading: false,
      data: [],
      awarded: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"),
    }

    this.selectMovie = this.selectMovie.bind(this)
    this.FetchMovies = this.FetchMovies.bind(this)
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
    this.closeBanner = this.closeBanner.bind(this)
  }

  // Fetches movies from OMDB API on demand
  async FetchMovies(movieName) {
    const url = `https://www.omdbapi.com/?s=${movieName}&plot=full&apikey=d78f4d96`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data.Search, loading: false, data: data.Search });
  }

  // Fetches movies from OMDB API on initial page load
  async componentDidMount() {
    const url = `https://www.omdbapi.com/?s=${this.state.movieName}&plot=full&apikey=d78f4d96`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data.Search, loading: false, data: data.Search });
  }

  // Adds movie to the awarded list
  selectMovie(movie) {
    if (this.state.awarded.find(item => item.imdbID === movie.imdbID))
      return

    const movies = [...this.state.awarded, movie]
    this.setState({ awarded: movies })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
  }

  // Deletes a single movie from the awarded list
  handleDeleteMovie(movie) {
    let filtered = this.state.awarded.filter(item => item.imdbID !== movie.imdbID);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
    filtered = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    this.setState({ awarded: filtered })
  }

  //Closes the banner and erases awarded movies
  closeBanner() {
    localStorage.setItem(LOCAL_STORAGE_KEY, []);
    this.setState({ awarded: [] })
    let banner = document.getElementsByClassName('overlay')[0]
    banner.style.cssText = "visibility: hidden;opacity: 0;"
  }

  render() {
    return (
      <div>
        <Header FetchMovies={this.FetchMovies} />
        <Popup awarded={this.state.awarded} closeBanner={this.closeBanner} />
        <Main movies={this.state.movies}
          selectMovie={this.selectMovie}
          localStorageMovies={this.state.localStorageMovies}
          handleDeleteMovie={this.handleDeleteMovie}
          awarded={this.state.awarded} />
      </div >
    )
  }
}
