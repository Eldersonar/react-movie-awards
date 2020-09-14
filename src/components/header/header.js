import React from 'react'

// export default function header() {
export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSearch(e) {
        e.preventDefault();
        let movieName = document.getElementById('input').value
        this.props.FetchMovies(movieName);
    }

    handleSubmit = (e) => {
        return false
    };

    render() {
        return (
            <header>
                <h1>OMDB Movie Awards</h1>
                <form id="inputWrapper" onSubmit={this.handleSubmit}>
                    <input type="text" name="movieName" id="input" />
                    <button id="searchBtn" onClick={this.handleSearch}>SEARCH</button>
                </form>
            </header>
        )
    }
}
