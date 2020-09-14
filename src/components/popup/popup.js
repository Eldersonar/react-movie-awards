import React from 'react'
import './popup.css'

export default class Popup extends React.Component {
    // export default function popup() {

    // to be implemented
    closeBanner() {
        console.log('banner closed')
    }

    render() {
        return (
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Here i am</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <p>Congratulations. You've nominated 5 movies.</p>
                        <button onClick={this.closeBanner}>Try again</button>
                    </div>
                </div>
            </div>
        )
    }
}

// export default Popup