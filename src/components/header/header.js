import React from 'react'

// export default function header() {
export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Gets the input search value
    handleSearch(e) {
        e.preventDefault();
        let movieName = document.getElementById('input').value
        this.props.FetchMovies(movieName);
    }

    // Prevents form from submitting
    handleSubmit = (e) => {
        return false
    };

    render() {
        return (
            <header>
                <h1>OMDB Movie Awards</h1>
                <div id="inputWrapper">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="movieName" id="input" />
                        <button id="searchBtn" onClick={this.handleSearch}>SEARCH</button>
                    </form>
                </div>

            </header>
        )
    }
}
