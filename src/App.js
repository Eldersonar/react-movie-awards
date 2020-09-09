import React from 'react';
import './App.css';
import Movies from './Movies';
import Awards from './Awards';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      MovieName: "man",
      MovieArray: [],
      MyMovies: [],
      movies: [],
      loading: false,
      data: [],
      value: ""
    }

    this.LOCAL_STORAGE_KEY = 'awardsApp.movies'

    this.handleSearch = this.handleSearch.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
    this.FetchMovies = this.FetchMovies.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  async FetchMovies(MovieName) {
    const url = `http://www.omdbapi.com/?s=${MovieName}&plot=full&apikey=d78f4d96`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data.Search, loading: false, data: data.Search });
  }

  async componentDidMount() {
    const url = `http://www.omdbapi.com/?s=${this.state.MovieName}&plot=full&apikey=d78f4d96`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data.Search, loading: false, data: data.Search });
  }

  handleSearch(e) {
    e.preventDefault();
    let movieName = document.getElementById('input').value
    this.setState({ name: movieName })
    this.FetchMovies(movieName);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  // GetMovies(Value) {
  //   console.log(Value)
  //   this.setState({ MovieArray: Value }, function () {
  //     this.state.MyMovies = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY) || "[]")
  //     // console.log(this.MovieArray)
  //     this.state.MyMovies.push(this.state.MovieArray);
  //     localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.state.MyMovies));
  //   })
  // }

  selectMovie(movie) {
    const movies = [...this.state.MovieArray, movie]
    this.setState({ MovieArray: movies })
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(movies));
  }

  deleteMovie(movie) {
    const items = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    this.filtered = items.filter(item => item.imdbID !== movie.imdbID);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.filtered));
    this.setState({ filtered: items })

  }

  render() {
    console.log(this.MovieArray)
    console.log(this.filtered)
    return (
      <div>
        <header>
          <h1>OMDB Movie Awards</h1>
          <form id="inputWrapper" onSubmit={this.handleSubmit}>
            <input ref={this.movieNameRef} type="text" name="movieName" id="input" />
            <button id="searchBtn" onClick={this.handleSearch}>SEARCH</button>
          </form>
        </header>
        <main>
          <div>
            <Movies name={this.state.name} movies={this.state.movies} selectMovie={this.selectMovie} />
          </div>
          <div id="awards" >
            <Awards deleteMovie={this.deleteMovie} filtered={this.filtered} movies={this.state.MovieArray} />
          </div>
        </main>
      </div >
    )
  }
}
