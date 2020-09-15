import React from 'react';
import Movie from './movie/Movie';

// export default function Movies(handleSearch) {
export default class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: null,
            data: []
        };
    }

    render() {
        if (this.props.movies) {
            return (
                <Movie movies={this.props.movies} selectMovie={this.props.selectMovie} awarded={this.props.awarded} />
            );
        }

        if (this.state.loading) {
            return (
                <div className="movieHolder">
                    <div className="imgHolder">
                    </div>
                    <div className="movieInfo">
                    </div>
                    <div>
                    </div>
                </div>
            )
        }
        return <div>Couldn't get movies</div>

    }
}
