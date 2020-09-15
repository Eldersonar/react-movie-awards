import React from 'react'
import Movies from '../movies/Movies';
import Awards from '../awards/Awards';

export default class Main extends React.Component {
    // export default function main() {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <main>
                <div>
                    <Movies movies={this.props.movies} selectMovie={this.props.selectMovie} awarded={this.props.awarded} />
                </div>
                <div id="awards" >
                    <Awards handleDeleteMovie={this.props.handleDeleteMovie} awarded={this.props.awarded} />
                </div>
            </main>
        )
    }
}
