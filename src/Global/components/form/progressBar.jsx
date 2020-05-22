import React, { Component } from 'react';

import "../../css/progressBar.css";

class progressBar extends Component {
    render() {
        return (
            <ul className="progressbar">
                <li className="active">Account Setup</li>
                <li>Social Profiles</li>
                <li>Personal Details</li>
            </ul>
        )
    }
}

export default progressBar;