import React from 'react'
import './popup.css'

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { awarded: this.props.awarded };
        console.log(props)
        console.log(this.state.awarded)

    }

    closeBanner(e) {
        e.stopPropagation()
        this.props.closeBanner()
    }

    render() {
        return (
            <div id="popup1" className="overlay">
                <div className="popup">
                    {/* <a className="close" href="#">&times;</a> */}
                    <div className="content">
                        <p>Congratulations!</p>
                        <p>You've nominated 5 movies.</p>

                        <button onClick={(e) => this.closeBanner(e)}>OK</button>
                    </div>
                </div>
            </div>
        )
    }
}