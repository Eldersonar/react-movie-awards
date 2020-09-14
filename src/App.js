import React from 'react';
import './App.css';
import Header from './components/header/header'
import Main from './components/main/main'


const LOCAL_STORAGE_KEY = 'awardsApp.movies'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      MovieName: "man",
      MovieArray: [],
      movies: [],
      loading: false,
      data: [],
      awarded: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"),
      localStorageMovies: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")
    }

    this.selectMovie = this.selectMovie.bind(this)
    this.FetchMovies = this.FetchMovies.bind(this)
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
  }

  async FetchMovies(MovieName) {
    const url = `https://www.omdbapi.com/?s=${MovieName}&plot=full&apikey=d78f4d96`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data.Search, loading: false, data: data.Search });
  }

  async componentDidMount() {
    const url = `https://www.omdbapi.com/?s=${this.state.MovieName}&plot=full&apikey=d78f4d96`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.Search)
    this.setState({ movies: data.Search, loading: false, data: data.Search });
  }

  selectMovie(movie) {
    const movies = [...this.state.localStorageMovies, movie]
    this.setState({ localStorageMovies: movies, awarded: movies })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
  }

  //Bug - awarded state won't update. Component uses the latest value on render
  handleDeleteMovie(movie) {
    console.log(movie)
    let filtered = this.state.localStorageMovies.filter(item => item.imdbID !== movie.imdbID);
    console.log(filtered)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
    filtered = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(filtered)
    console.log(this.state.awarded)
    this.setState({ awarded: filtered })
    console.log(this.state.awarded)
  }

  render() {
    return (
      <div>
        <Header FetchMovies={this.FetchMovies} />
        <Main movies={this.state.movies}
          selectMovie={this.selectMovie}
          localStorageMovies={this.state.localStorageMovies}
          handleDeleteMovie={this.handleDeleteMovie}
          awarded={this.state.awarded} />
      </div >
    )
  }
}
